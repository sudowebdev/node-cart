# Node-Cart

## Step 1: Initialise your project

    npm init

Create a new file: **index.js** in the root directory.    

## Step 2: Create a basic express app

    npm install --save express

**index.js**

    const express = require('express');
    const app = express();

    app.get('/', function(req, res) {
      res.send('Hello World');
    });


    app.listen(2345, function() {
      console.log('Listening at localhost:2345');
    })

## Step 3: Add stub API paths for 'Products'

### Part 1: GET handler for 'localhost:2345/api/products'

    app.get('/api/products', function(req, res) {
      res.send('Display all the products');
    });

### Part 2: POST handler for '/api/products/addtocart/:id'

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

**Q.** How to test if the POST requests are working as expected or not?  
**A.** For that you need to install **POSTMAN**. Just look for POSTMAN on Google and download it according to your OS.  

After you open it, you will find an input type box at the top.  
Just write the complete url -> **localhost:2345/api/products/addtocart/5** and select **POST instead of GET** as the HTTP method. Before pushing on the **Send** button make sure that you have **restarted** your server.
