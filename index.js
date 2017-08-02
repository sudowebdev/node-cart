const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/api/products', function(req, res) {
  res.send('Display all the products');
});

//executed when Add-To-Cart button for a product is clicked
app.post('/api/products/addtocart/:id', function(req, res) {
    /*
    :id is used because each product will have its own unique id.
    So, instead of making a route for each id, what we can do is use
    :id at the end. We can now access the id that is passed on by:
        req.params.id
    So, if the url is 'localhost:2345/api/products/addtocart/5' then
        req.params.id will have a value equal to 5
    */
    res.send('Product with id: ' + req.params.id + ' added to cart');
});

app.listen(2345, function() {
  console.log('Listening at localhost:2345');
})
