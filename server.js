const express = require('express');
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
        
    var options = { 
        root: path.join(__dirname) 
    }; 
      
    var fileName = 'TicTacToe vs comp.html'; 
    res.sendFile(fileName, options, function (err) { 
        if (err) { 
            next(err); 
        } else { 
            console.log('Sent:', fileName); 
        } 
    });
})

app.listen(PORT,function(){
    console.log('Server is up and running')
})