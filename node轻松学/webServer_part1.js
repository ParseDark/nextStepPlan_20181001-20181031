const http = require('http')
// req/res 都是流的实例（都可以像流一样操作）
var server = http.createServer((req, res)=> {
    console.log('request received')
    res.writeHead(200, {'Content-Type': "text/plain"})
    res.write("Hello World")
    res.end()
})


server.listen(3000)