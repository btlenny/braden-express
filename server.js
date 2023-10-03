// Require modules
const express = require('express');
const path = require('path');
const guitarsDb = require('./data/guitars');
// Create the Express app
const app = express();
// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Mount middleware (app.use)
  
  
// Mount routes
app.get('/', function (req, res) {
    res.send('<h1>Hello Express</h1>');
  });

app.get('/guitars', function(req, res) {
    res.render('guitars/index', {
      guitars: guitarsDb.getAll()
    });
});

app.get('/', function(req, res) {
    res.redirect('/home');
  });

// Tell the app to listen on port 3000
app.listen(3000, function () {
    console.log('Listening on port 3000');
});

