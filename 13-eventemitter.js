const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data received. User ${name} with id: ${id}`)
})
customEmitter.on('response', () => {
    console.log(`the order is important`)
})

customEmitter.emit('response', 'john', 34)