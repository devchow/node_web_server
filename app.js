const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res) => {
// specify the type of data
res.writeHead(200, {'Content-Type': 'text/html'})

// read the index.html file
fs.readFile('index.html', function(error, data){
    // check for errors
    if(error){
        // display the error message on the terminal
        res.writeHead(404)
        res.write('Error: File Not Found')
    }else{
        // write content to the response body
        res.write(data)
    }
})

res.end('<h1>Hello Server!</h1>')
})

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port ' + port + " ✔")
    }
})