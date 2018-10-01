let http = require("http")
let url = require("url")
let fs = require("fs")
let path = require('path')

let MIMEType = {
    "htm": "text/html",
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "gif": "image/gif",
    "js": "text/javascript",
    "css": "text/css",
    "json":"text/json",
    "ico": "image/png"
};


let server = http.createServer((req, res)=>{

   let pathName = url.parse(req.url).pathname
   console.log(pathName)
   if(pathName === "/") {
       pathName = '/index.html'
   }else if(pathName.indexOf(".") === -1) {
       pathName += '/index.html'
   }


    fs.readFile("./public" + pathName, (err, data)=>{
        if(err) {
            res.end('404')
        }
        let contentType = MIMEType[path.extname(pathName).split(".")[1]]
        console.log(contentType)
        res.writeHead(200, {
            // "content-type": MIMEType[path.extname(pathName).split(".")[1]]
            "content-type": contentType
        })
        res.end(data);
    })

 
  


})


server.listen(3000, "127.0.0.1")