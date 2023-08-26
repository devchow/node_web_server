const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
//   res.end('Hello Server!')
res.writeHead(200, {'Content-Type': 'text/html'})
res.end('<h1>Hello Server!</h1>')
})

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port ' + port + " ✔")
    }
})