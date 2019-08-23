let express = require('express');
	app = express();

app.use(express.static("../client"));

app.listen(80);

//app.get("/",function(req, res){
//res.send("Hello,humanity!")
//});