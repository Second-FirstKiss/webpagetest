const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb+srv://00shoonya:testpassword@cluster0.pegetkq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
let mydb;
mongoclient.connect(url)
.then(client => {
    console.log('몽고DB 연결 성공');
})

var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'myboard',
});

//conn.connect();

const express = require('express');
const app = express();

//const db = require('node-mysql/lib/DB'); app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


//body-parser 라이브러리 추가
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.listen(8080, function() {
    console.log('포트 8080으로 서버 대기중...')
});

app.get('/book', function(req, res) {
    res.send('Books Page');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

//'enter' 요청에 대한 처리 루틴
app.get('/enter', function(req, res) {
    //res.sendFile(__dirname + '/enter.html');
    res.render('enter.ejs');
});

app.get('/list', function(req, res) {
    //몽고db에서 데이터 가져오기
    mydb.collection('post').find().toArray(function(err, docs){
        res.send(docs);
    });
    //MySQL DB에서 데이터 가져오기
    // conn.query('SELECT * FROM books', function(err, rows){
    //     if(err) console.log(err);
    //     res.send(rows);
    // });
    //res.sendFile(__dirname + '/list.html');
    res.render('list.ejs', {data: result});
});

app.post('/save', function(req, res){
    console.log(req.body.title);
    console.log(req.body.contetnt);
    //몽고db에 데이터 저장
    mydb.collection('post').insertOne(
        {title: req.body.title, content: req.body.content, date: req.body.someDate},
        function(err, result){
            console.log('저장완료');
        }
    );
    //MySQL DB에 데이터 저장
    // let sql = 'INSERT INTO books (title, content, created) VALUES (?, ?,NOW())';
    // let params = [req.body.title, req.body.content];
    // conn.query(sql, params, function(err, rows){
    //     if(err) console.log(err);
    //     res.send('데이터 추가 성공');
    // });
    res.send('데이터 추가 성공');
});

app.post("/delete", function (req,res){
    console.log(req.body);
    req.body._id = new ObjId(req.body._id);
    mydb.collection('post').deleteOne(req.body)
    .then(result=>{    
        console.log('삭제완료');
    })
});