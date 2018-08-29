var express = require("express")
var app = express()

app.set('port', (process.env.PORT || 80))
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render('../public/index.ejs')
});

// When I go live, this code needs to be used!!!!------------------------
// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'))
// })

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Blog server is spinning up");
});
