var buffer1 = Buffer.from('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());

var buffer = Buffer.from('www.runoob.com');
//  缓冲区长度
console.log("buffer length: " + buffer.length);

//裁剪功能返回的实际是原始缓存区 buffer 或者一部分，操作的是与原始 buffer 同一块内存区域。


// 裁剪
var buffer_origin = Buffer.from('runoob');
var buffer_slice = buffer_origin.slice(0,2);
console.log("buffer slice content: "+buffer_slice.toString());
console.log("buffer origin content: "+buffer_origin.toString());
buffer_slice.write("wirte"); // Write buffer slice

// 裁剪前与原始字符串的改变
console.log("buffer slice content: "+buffer_slice.toString());
console.log("buffer origin content: "+buffer_origin.toString());