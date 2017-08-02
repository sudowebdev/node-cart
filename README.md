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
