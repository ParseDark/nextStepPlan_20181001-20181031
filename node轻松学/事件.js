const events = require('events')

let events1 = new events.EventEmitter()

events1.on('someEvent', (msg) => {
    console.log(msg)
})

events1.emit('someEvent', "hahhahaha")