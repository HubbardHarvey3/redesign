var express = require("express")
var app = express()
var fs = require('fs')
let ejs = require('ejs')
// var AWS = require('aws-sdk')


//AWS Stuff
// AWS.config.loadFromPath('./config.json')
// const s3 = new AWS.S3();

app.set('port', (process.env.PORT || 80))
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render('../public/index.ejs')
});


// app.get("/aws", function(req, res){
//     res.render('aws', {url:url})
// });

let url;

//AWS Magic
//For now, I am creating a single get request for each file.  Ideally, I would like to set the params.Key dynamically to cut down on the number of routes.
// //however, I don't know how to retrieve info from the front end to the server.
// app.get('/aws/1', function (req, res){

//     var params = {
//         Bucket: 'cbcsermons',
//         Key: '11-4-2018 AM Service.wav',
//         ResponseContentType: 'audio/wav',
//         ResponseContentDisposition: 'attachment'
//     };

//     var url = s3.getSignedUrl('getObject', params);
//     res.render('file', {url:url})   
// })

// app.get('/aws/2', function (req, res){
//     var params = {
//         Bucket: 'cbcsermons',
//         Key: '3-17-19 AM Service.wav',
//         ResponseContentType: 'audio/wav',
//         ResponseContentDisposition: 'attachment'
//     };   
//     var url = s3.getSignedUrl('getObject', params);
//     res.render('file', {url:url, params:params})   
// })


//End of the Get requests for the files.
app.get('/file', function (req, res) {
    res.render('file', { url: url })
})


// When I go live, this code needs to be used!!!!------------------------
app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'))
})

//app.listen(process.env.PORT, process.env.IP, function(){
//   console.log("Blog server is spinning up");
//});
