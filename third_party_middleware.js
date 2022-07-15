var exp = require('express');
var bp = require('body-parser');

var app = exp();

app.use(bp.urlencoded({extended: false}));

app.listen(9000,function(){
	console.log("exp app started");
});

app.get('/login',function(req,res){
       res.sendFile(__dirname+"/login.html");
});

app.post('/logincheck',function(req,res){
	//need to access req.body
	//defaultly- req.query

	if(req.body.uid == "bakul" && req.body.pwd == "bakul123")
	{
		res.writeHead(200,{'content-type':'text/html'});
		res.write("<h2> Successful </h2>");
		res.write("<h3> Welcome "+req.body.uid+" </h3>");
		res.end();
	}
	else
		res.send("<h3> Failed </h3>");	
});



app.all('*',function(req,res){
	res.send("Invalid URL !!!");
});