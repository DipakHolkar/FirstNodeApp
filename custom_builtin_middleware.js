var exp = require('express');

var app = exp();

//built-in middleware
app.use(exp.static('images'));
//app.use(exp.static('styles'));

app.listen(9000,function(){
	console.log("exp app started");
});


//general middleware
app.use(function(req,res,next){
	console.log(req.url+ " in general middleware");
	next();
});

//specific middleware
app.use('/home',function(req,res,next){
	console.log(req.url+ " in home middleware");
	next();   //imp - to go further and find out next middleware
});


//actual business logic 
//has got access to next
app.get('/home',function(req,res,next){
	//res.writeHead(200,{'content-type':'text/html'});
	//res.write("<h3>Learning middlewares</h3>");
	//res.write("<p>This route is supported by middlewares</p>");
	res.write("<table border=1>");
	res.write("<tr><td>1</td></tr></table>");
	res.end();
	next();
})


app.get('/image',function(req,res){
	res.send("<img src='background.jpeg' width='200' height='200' />");
});


app.use(function(req,res,next){
	console.log(req.url+ " in general middleware - 2");
	next();
});

app.all('*',function(req,res){
	res.send("Invalid URL !!!");
})

