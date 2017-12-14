var express    = require('express')
var app        = express()
var http = require('http')
var server = http.Server(app);
var port = process.env.PORT || 2020
var bodyParser = require('body-parser')
var fs = require('fs')
var router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// index.html file
router.get('/', function(req, res) {
    fs.readFile('./app/index.html', function(err, html){
        if(err) throw err;
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end();
    });
});

app.use("/", router)
app.use(express.static('./app/'))
server.listen(port);
console.log(`API running at localhost:${port}/api`);
