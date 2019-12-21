const express = require('express');
const app = express();
const cors = require('cors')
var bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config()
//middle ware
app.use(cors());
 app.use(bodyParser.json()); 
 
app.use(express.static(path.join(__dirname,'frontend','build')));

 app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'frontend','build','index.html'));
})

const PORT = process.env.PORT || 3007
app.listen(PORT, () =>{
    console.log('Connected');
})

