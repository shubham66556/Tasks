 const http = require('http');
 const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/home'){
        res.write('<html>');
res.write('<head><title>My first page</title><head>');
res.write('<body><h1>welcome home</h1></body>');
res.write('</html>')
res.end();
    }
    if(url==='/about'){
        res.write('<html>');
res.write('<head><title>My first page</title><head>');
res.write('<body><h1>welcome to about us page</h1></body>');
res.write('</html>')
res.end();
    }

    if(url==='/node'){
        res.write('<html>');
res.write('<head><title>My first page</title><head>');
res.write('<body><h1>welcome to my node js project</h1></body>');
res.write('</html>');
res.end();
    }



 })


 server.listen(4000);

console.log('shubham');
