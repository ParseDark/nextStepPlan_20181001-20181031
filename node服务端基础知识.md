#node服务器基础教程笔记

_ _ _

1. 模块
| 模块名 | 简介 |
|--------|--------|
|   fs   |  文件系统模块： readFile       |
|    http    |   htttp请求有关模块 常用createServer， listen     |
|   url    |    客户端请求url的一个对象： parse    |
|   path     |     路径相关： extname（获取文件后缀名）   |
|   queryString     |     解析请求回传参数   |



2. 流程
	如果你要建立一个最简单的服务器，你只需要以下步骤
		1. 引入对应的模块——http fs
		2. 使用http模块的createServer模块创建一个http请求。
		3. 在createServer模块的回调里，使用reponse参数返回写入文件头，使用fs返回你的html页面。
		4. 使用http模块里的listen方法监听端口。
```
	// 像这样
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
```

3. 路由的概念
	* 什么是路由
	> 简单说，假如我们有一台提供 Web 服务的服务器的网络地址是：10.0.0.1，而该 Web 服务又提供了三个可供用户访问的页面，其页面 URI 分别是：
	>	http://10.0.0.1/
	>	http://10.0.0.1/about
	>	http://10.0.0.1/concat

	> 那么其路径就分别是 /，/about，/concat。
	> 当用户在浏览器窗口输入(可能是点击等事件)不同的url，那么就会访问不同的页面，服务器通过判断上面的路径（/， /about, /concat），对应不同的后端程序，继而运行相应的程序，得到对应的返回。
	> 简而言之**路由是根据不同的 url 地址展示不同的内容或页面**

	* 简单路由的实现
		* 通过req.url获取路径
		* 使用if判断路径
		* 在对应的判断分支中执行相应的操作
		* res.end返回
```
    if(req.url == "/"){
        fs.readFile("./public/index.html", (err, data)=>{
				res.end(data);
       	 })
    }
```
	* 重定向
		个人理解，如果用户访问到服务端没有的路径，比如： /sdalkjdklasjdlajs，之类的地址，那么我们可以对这种情况处理一下，显示对应的页面，或者直接跳转回首页。这就是重定向。

4. 返回非html的文件
	以上的情况，我们只是实现了服务器返回html的情况，假设，你的html中使用了src，也就是使用了外部文件（像js/css/image）等资源。我们就要通过设置响应头的方式让浏览器识别正确的资源类型。
	* res.writeHead 设置响应头的信息。双参数，第一个参数为响应类型（像成功200， 缓存304， 没有这个资源404这种）, 第二个参数是一个json类型的对象。
```
        res.writeHead(200, {
            "content-type": contentType
        })
```

5. Get请求处理
	首先判断请求类型，使用req对象判断是否符合get请求的条件
		1. req.method.toLocaleLowerCase() === 'get'
		2. pathName === '/getMethod'
	第一，判断请求的类型是否为get
	第二，通过路径判断执行相应的后端程序
6. Post请求处理
	post与get请求的区别：
		1. post 加密，而get请求是把信息放在url里传入。而post不是。
		2. post是一部分一部分的传入服务器的，每传一点就触发req.addListener('data', chunk=> {
		 	postdata += chunk
		})
		当传输完成就触发req.addListener('end'）但是在这个函数的回调中，不能直接处理postdata因为前面说过了，post是加密传输。所以，此时的postdata还是处于加密状态。所以我们需要使用另一个模块去解析它。queryString.parse(postdata)。此时，我们就可以获取到解密后的数据，也就是用户传给我们的信息。
``



















