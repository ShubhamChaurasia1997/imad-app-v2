var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
  host: 'db.imad.hasura-app.io',
  user: 'shubhamchaurasia1997',
  port: '5432',
  database: 'shubhamchaurasia1997',
  password: process.env.DB_PASSWORD
};
var app = express();

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
var pool = new Pool(config);
app.get('/test-db', function (req, res) {
    pool.query('SELECT * FROM test',function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(rows));
        }});
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
