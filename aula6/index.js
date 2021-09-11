const http=require('http');
const hostname = 'localhost';
const porta = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello word \n');
});
server.listen(porta, hostname,()=> {
    console.log('servidor rodando em ', hostname);
})