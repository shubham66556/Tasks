const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>{
console.log('In another middleware');
res.send('<form action = "/product" method = POST><input type="text" name = "title"><button type = "submit">Add product</button><input type="text" name = "title"><button type = "submit">Input size</form>');

})

app.use('/product',(req,res,next)=>{
    console.log(req.body);
res.redirect('/');

});
const server = http.createServer(app);
    

server.listen(5000);