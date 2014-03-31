
var express = require('express');
var app = express();

//Middleware: Allows cross-domain requests (CORS)
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.configure(function() {
 
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(allowCrossDomain);
  app.use(app.router);
});

app.get('/', function(req, res) {
  res.type('application/json'); // set content-type
  res.json({Result: 'I am a beautiful butterfly'}); // send text response
});

app.get('/fact/:id', function(req, res) {
  res.type('application/json'); 
  res.json({Result: 'Factorial value ' + fact(req.params.id)  }); // send text response
  
});

app.get('/loop/:id', function(req, res) {
  res.type('application/json'); 
  for(var i = 0; i<req.params.id; i++){
	fact(20);
  }
  res.json({Result: 'Done' }); 
  
});

function fact(n){
	if (n == 0) return 1;
	else return n * fact(n - 1);
}

app.listen(process.env.PORT || 4730,"localhost");