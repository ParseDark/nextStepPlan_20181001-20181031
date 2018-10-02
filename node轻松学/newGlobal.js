
setTimeout(()=> {
    console.log(`3s`)
}, 3000)

let count = 0
setInterval(()=> {
    count++
    console.log(`${count} s`)
}, 1000)



console.log(__dirname)