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

   if(req.method.toLocaleLowerCase() === 'get' && pathName === '/getMethod') {
       queryString =  url.parse(req.url, true).query
       let contentType = MIMEType[path.extname(pathName).split(".")[1]]
       res.writeHead(200, {
            // 设置中文编码格式
            "content-type": `text/html;charset=UTF-8`
        })
       // res.end() 参数必须为字符串
       res.end(`name: ${queryString.name}, age: ${queryString.age}`)
   }

    // 定义初始页面
    // 手动路由
   if(pathName === "/") {
       pathName = '/indexpost.html'
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