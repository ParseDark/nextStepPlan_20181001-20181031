// const events = require('events')

// let events1 = new events.EventEmitter()

// // 先绑定，后触发
// events1.on('someEvent', (msg) => {
//     console.log(msg)
// })

// events1.emit('someEvent', "hahhahaha")

const events = require('events')
const util = require('util')

let Person = function (name) {
    this.name = name
}

util.inherits(Person, events.EventEmitter)

var xiaoming = new Person("xiaoming")
var lili = new Person('lili')

let person = [xiaoming, lili]

person.forEach((man)=> {
    man.on('speak', (msg)=> {
        console.log(`my name is ${man.name}, i want to say ${msg}`)
    })
})

xiaoming.emit("speak", "fuck")
lili.emit('speak', 'yeah')
j
