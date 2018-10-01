let http = require("http")
let url = require("url")
let fs = require("fs")

let server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type": "text/html"})

   let pathName = url.parse(req.url).pathname
   console.log(pathName)
    // 手动设置路由
   if(pathName === "/") {
       pathName = '/index.html'
   }else if(pathName.indexOf(".") === -1) {
       pathName += '/index.html'
   }


    fs.readFile("./public" + pathName, (err, data)=>{
        if(err) {
            res.end('404')
        }
        res.end(data);
    })

})


server.listen(3000, "127.0.0.1")