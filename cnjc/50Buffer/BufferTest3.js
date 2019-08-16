buf = Buffer.alloc(256);
len = buf.write("www.runoob.com");

console.log("写入字节数 : "+  len); //14

len = buf.write("王宇大好人")
console.log("写入字节数 : "+  len); //15 一个汉字uft8 3字节
console.log(buf);
console.log(buf.toString());



