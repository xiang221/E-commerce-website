const db = require('./database');
const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const bodyParser = require("body-parser");

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
    let category = req.params.category;
    const limit = 6;
    const paging = +req.query.paging;
    const offset = (paging * limit)+0;
    let next_paging = +paging + 1;
    console.log(category);
    const sql ="select title,price,color,first_pic FROM table1 WHERE category='"+category+"' limit "+limit+" offset "+offset;
    console.log(sql);
   db.query(sql,(err, result) => {
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
    const keyword = '%'+req.query.keyword+'%';
    console.log(keyword);
    db.query("SELECT title,price,first_pic,color FROM table1 WHERE title like '" +keyword+ "'", function (err,result) {
        if (err) throw err;
        console.log(result);
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
// SQL injection
//修改表格 儲存進不同表格 檔案上傳技術

/*
const upload = multer({
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        cb(new Error('請上傳圖片'));
      }else if(fileSize>=1000000){
          cb(new Error('檔案太大'));
      }
      cb(null, true)
    }
  })

*/

app.get('/api/v1/create',function(req,res){
    res.sendFile(__dirname + "/admin/" + "product.html" );
});

app.use(bodyParser.urlencoded({
    extended:true
}));

app.post('/api/v1/create',(req,res)=>{
    const category = req.body.category;
    const title = req.body.title;
    const number = req.body.number;
    const price = req.body.price;
    const info = req.body.info;
    const description = req.body.description;
    console.log(price);
    db.query("INSERT INTO table1 (category, number, title, price, info, description) VALUES (?, ?, ?, ?, ?, ?) ",[category, number, title, price, info, description], (err, result) => {
        if(err) throw err;
        res.send("table created");
    });
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  })
  
const upload = multer({ storage: storage });


//SELECT * FROM table1 AS TableA LEFT JOIN table2 AS TableB WHERE TableA.id= 1
/*
    for(let i=1;i<5;i++){
        const color = db.query("SELECT DISTINCT color FROM table2 where pid = " +i , function (err, result) {
            if (err) throw err;
            return res.send({"pid":i,"color":result});
          });
    };
*/


//form post become get 
    
