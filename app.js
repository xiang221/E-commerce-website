const db = require('./database');
const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const bodyParser = require("body-parser");
const uuid = require('short-uuid');
//bcrypt
const bcrypt = require('bcrypt');
const { Console } = require('console');
const saltRounds = 10;
//JWT
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


app.listen('3000' , () =>{
    console.log('server started on port 3000');
})

app.use(cookieParser());

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql connected...');
});


//Product List API

app.get('/api/v1/products/:category(women|men|accessories)',(req,res) => {
    const limit = 6;
    let category = req.params.category;
    let paging = +req.query.paging;
    let offset = (paging * limit)+0;
    let next_paging = +paging + 1;

    db.query("select title,uid,number,price,color,pic FROM table1 WHERE category='"+category+"' limit "+limit+" offset "+offset,(err, result) => {
        if (err) throw err;
            if(result[5]===undefined){
                next_paging = "no more";
            }else{
                next_paging = +paging + 1;
            };
        return res.send({"page":0+paging,"next_paging":next_paging,"data": result});
    });

});    


//Product Search API

app.get('/api/v1/products/search', (req,res) => {
    let keyword = '%'+req.query.keyword+'%';
    db.query("SELECT * FROM table1 WHERE title like '" +keyword+ "'", function (err,result) {
        if (err) throw err;
        return res.send({data: result});
    });
});


//Product Details API

app.get('/api/v1/products/details/:id',async(req,res)=>{
    let id = req.params.id;
    console.log(id);
    db.query("SELECT * FROM table1, table2 WHERE table1.uid=table2.pid AND table1.uid ='" +id+ "'" ,(err, result) => {
        if (err) throw err;
        return res.send({data: result});
    });
})


//Product Create API
//Cannot set headers after they are sent to the client

app.get('/api/v1/create', (req,res) => {
    res.sendFile(__dirname + "/admin/" + "product.html" );
});

app.use(bodyParser.urlencoded({
    extended:true
}));

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
      cb(null, './images');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({ storage: storage });


app.post('/api/v1/create', upload.any(),(req,res) => {
    const body = req.body;
    const id = uuid.generate();
    const files = [];

    for(let i=0; i<req.files.length; i++){
        files.push(req.files[i].path);
    }

    const file = files.toString();

    db.query("INSERT INTO table1 (uid, category, number, title, price, info, description, pic) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ",
    [id, body.category, body.number, body.title, body.price, body.info, body.description, file],
     (err, result) => {
        if(err) throw err;
        res.redirect(__dirname + "/admin/" + "product.html" ); 
    });

    console.log(id);
    db.query("INSERT INTO table2 (pid, color, size, stock) VALUES (?, ?, ?, ?)",
    [id, body.color, body.size, body.stock], 
    (err, result2) => {
        if(err) throw err;
        res.redirect(__dirname + "/admin/" + "product.html" );   
    });
});



//signup API

app.get('/api/v1/signup', (req,res) => {
    res.sendFile(__dirname + "/admin/" + "signup.html" );
});


app.post('/api/v1/signup', (req,res) => {
    const body = req.body;
    const password = req.body.password;
    db.query("SELECT email FROM table3 WHERE email='" +req.body.email+ "'" ,(err, result) => {
        if(err) throw err;
        console.log(result);
        if (result.length===0){
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if(err) throw err;
                    db.query("INSERT INTO table3 (username, email, password) VALUES (?, ?, ?) ",[body.username, body.email, hash],
                     (err, result) => {
                        if(err) throw err;
                        res.send("succes");
                    });
                });
            });
        }else{
            res.send("Already created!");
        }
    });    
});

//login API
//!founduser

app.get('/api/v1/login', (req,res) => {
    res.sendFile(__dirname + "/admin/" + "login.html" );
});

app.post('/api/v1/login', (req,res)=>{
    const body = req.body;

    db.query("SELECT email FROM table3 WHERE email='" +req.body.email+ "'" ,(err, foundUser) => {
        if(err) throw err;
        console.log(foundUser);
        if (foundUser!==[]){
            checkUser();
        }else{
            res.send("This user doesn't exist!");
        };
    }); 

    function checkUser() {
        const password = db.query("SELECT password FROM table3 WHERE email='" +req.body.email+ "'" ,(err, password) => {
            if(err) throw err;
            const hash = bcrypt.hash(body.password, saltRounds, function(err, hash) {
                if(err) throw err;
                return hash;
            });
            bcrypt.compare(body.password, password[0].password).then((match) => {
                if(match) {
                    const token = jwt.sign({email:body.email}, process.env["TOKEN_SECRET"], { expiresIn: '1800s' });
                    body.email.token = token;
                    res.cookie('jwt',token, { httpOnly: true, secure: true, maxAge: 3600000 });
                    res.redirect('/api/v1/profile');
                }else{
                    res.send("Error");
                };
            });
        });    
    };
});



//profile API

app.get('/api/v1/profile',  (req,res) => {
    const token = req.cookies['jwt'];
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
      const decoded = jwt.verify(token, process.env["TOKEN_SECRET"]);
      req.user = decoded;
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
    res.sendFile(__dirname + "/admin/" + "profile.html")
});
