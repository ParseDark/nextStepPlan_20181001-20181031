const fs = require('fs')

let myStream = fs.createReadStream(__dirname + '/newGlobal.js', 'utf8')
let myWriteStream = fs.createWriteStream(__dirname + '/wirteNewGlobal.js')


// 使用管道实现复制
myStream.pipe(myWriteStream)



// //第二种用法 写入
// let writeData =  'hello world'
// myWriteStream.write(writeData)
// myWriteStream.end()
// myWriteStream.on('finish', () => {
//     console.log('finish')
// })



// //第一种用法 写入
// let data = ""
// // 当数据正在传递的时候，触发“data”事件
// myStream.on('data', (chunk)=> {
//     console.log('new chunk received')
//     data += chunk
//     myWriteStream.write(chunk)
//     console.log(chunk)
// })

// // 当数据结束传递的时候，触发’end‘事件
// myStream.on('end', ()=> {
//     console.log(data)
  
// })