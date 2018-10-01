let http = require("http")
let url = require("url")
let fs = require("fs")
let path = require('path')
let queryString = require('querystring')

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

   if(req.method.toLocaleLowerCase() === 'post' && pathName === '/postMethod') {
    let postdata = ''
    // post 请求区别于get的地方在于，post是一点一点的传入服务器的。每传一点就触发data
    req.addListener('data', (chunk)=> {
        postdata += chunk
    })
    req.addListener('end', ()=>{
        console.log(postdata)
        postdata = queryString.parse(postdata)
        console.log(postdata)
    })
   }

   if(pathName === "/") {
       pathName = '/indexpost.html'
   }else if(pathName.indexOf(".") === -1) {
       pathName += '/indexpost.html'
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