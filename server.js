const express = require('express');
const app = express()
const path = require('path')


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

app.listen('5000',function(){
    console.log('Server is up and running')
})