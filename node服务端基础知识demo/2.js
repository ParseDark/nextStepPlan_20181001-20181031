let http = require("http")
let fs = require("fs")

let server = http.createServer((req, res)=>{
    res.writeHead(200, {
        "content-type": "text/html"
    })

    fs.readFile("./index.html", (err, data)=>{
        if(err) throw err
        res.end(data)
    })

})


server.listen(3000, "127.0.0.2")