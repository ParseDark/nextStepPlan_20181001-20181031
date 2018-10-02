const fs = require('fs')

// // 同步
// let data = fs.readFileSync('testjson.json', 'utf8')

// console.log(data)

// let newdata = "yangling"

// fs.writeFileSync('myGirl.text', newdata)

// 异步
let fileData = fs.readFile('testjson.json', 'utf8', (err, data) => {
    if(err) console.log(err)
    console.log('文件读取完成后执行')
    console.log(data)
    let newdata = "yangling"
    fs.writeFile('myGirl.text', newdata, (err)=> {
        if(err) console.log(err)
        console.log('文件写入完成')
    })
})
console.log('我在文件读取之前执行了')




