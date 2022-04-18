const db = require('./database');
const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require('uuid');


app.listen('3000' , () =>{
    console.log('server started on port 3000');
})

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

    db.query("select title,price,color,first_pic FROM table1 WHERE category='"+category+"' limit "+limit+" offset "+offset,(err, result) => {
        if (err) throw err;
        if(result[5]===undefined){
            next_paging = "no more";
        }else{
            next_paging = +paging + 1;
        }
        return res.send({"page":0+paging,"next_paging":next_paging,"data": result});
    });

});    


//Product Search API

app.get('/api/v1/products/search', (req,res) => {
    let keyword = '%'+req.query.keyword+'%';
    db.query("SELECT title,price,first_pic,color FROM table1 WHERE title like '" +keyword+ "'", function (err,result) {
        if (err) throw err;
        return res.send({data: result});
    });
});


//Product Details API

app.get('/api/v1/products/details/:id',async(req,res)=>{
    let id = req.params.id;
    console.log(id);
    db.query("SELECT * FROM table1, table2 WHERE table1.id=table2.pid AND table2.pid=" +id ,(err, result) => {
        if (err) throw err;
        return res.send({data: result});
    });
})


//Product Create API
// SQL injection LAST_INSERT_ID() 動態表格紀錄 color合併 多個檔案上傳
//Cannot set headers after they are sent to the client

app.get('/api/v1/create',function(req,res){
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


app.post('/api/v1/create', upload.single('pic'),(req,res)=>{
    const body = req.body;
    const id = uuidv4();

    db.query("INSERT INTO table1 (uid, category, number, title, price, info, description, pic) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ",[id, body.category, body.number, body.title, body.price, body.info, body.description, req.file.path], (err, result) => {
        if(err) throw err;
        res.send("table created"); 
    });

    /*
    const id = db.query("SELECT LAST_INSERT_ID()", (err, result) => {
        if(err) throw err;
        return result;
    });
    */

    const td = body.document.querySelectorAll('tbody tr td');

    td.forEach( function(element){
        db.query("INSERT INTO table2 (pid, color, size, stock) VALUES (?, ?, ?, ?)",[id, td[0], body.size, body.stock], (err, result2) => {
            if(err) throw err;
            res.send("table created");     
        });
    });

})




//SELECT * FROM table1 AS TableA LEFT JOIN table2 AS TableB WHERE TableA.id= 1
/*
    for(let i=1;i<5;i++){
        const color = db.query("SELECT DISTINCT color FROM table2 where pid = " +i , function (err, result) {
            if (err) throw err;
            return res.send({"pid":i,"color":result});
          });
    };
*/

