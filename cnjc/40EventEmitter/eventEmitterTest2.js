//event.js 文件
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener2', arg1, arg2); 
}); 

// var count = events.emitter.listenerCount('someEvent'); //旧的接口，但是本此版本不支持
var count = events.EventEmitter.listenerCount(emitter,'someEvent');
console.log("someEvent has " + count + " listener");

emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 