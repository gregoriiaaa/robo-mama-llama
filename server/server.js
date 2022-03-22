const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send("Hello World");
})

server.listen(5000, ()=>{
    console.log("listening in port 5000...")
})