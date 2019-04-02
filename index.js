var express = require('express')
var appServer = express()
var path = require('path');

appServer.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/ClientUI/index.html'));
});

appServer.get('/index.js', function (req, res) {
    res.sendFile(path.join(__dirname+'/ClientUI/index.js'));
});

 //ValidateUser
 appServer.get('/validateUser', function (req, res) {
    
    //Get username
    var username = req.query.username;

    //Get password
    var password = req.query.password;
    
    //Validation
    if(username == "admin" && password == "admin"){
        res.send("Welcome User");
    }else {
        res.send("Not allowed!");
    }
})

appServer.listen(3000)