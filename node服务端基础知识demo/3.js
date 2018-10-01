let http = require("http")
let url = require("url")
let fs = require("fs")

let server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type": "text/html"})
    // 提出路由的概念
    if(req.url == "/"){
        fs.readFile("./public/index.html", (err, data)=>{
            res.end(data);
        })
    }

    let parser = url.parse(req.url)
    console.log(parser)

    // res.end("")

})


server.listen(3002, "127.0.0.1")