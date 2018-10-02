const fs = require('fs')

// // 删除文件 异步
// fs.unlink('myGirl.text', (err)=> {
//     console.log('delect myGirl.text suceess')
// })

// // 删除文件 同步
// fs.unlinkSync('myGirl.text', (err)=> {
//     console.log('delect myGirl.text suceess')
// })


// 创建文件夹 同步
fs.mkdir("yeah", (err) => {
    fs.readFile('global.js', 'utf8', (err, data)=> {
        if(err) console.log(err)
        fs.writeFile('./yeah/newGlobal.js',data, ()=> {
            console.log('文件写入成功')
        })
    })
})

// // 删除文件夹 同步
// fs.rmdir("yeah", (err) => {

// })

// // 删除文件夹 同步
// fs.mkdirSync("yeah1", (err) => {

// })

