var fs = require('fs');
var request = require("request");
var path = require('path');
var src = "https://pic.qqtn.com/up/2019-6/2019061811092772406.jpg";
var writeStream = fs.createWriteStream('./assets/aa.png');
var readStream = request(src)
readStream.pipe(writeStream);

readStream.on('end', function() {
    console.log('文件下载成功');
});
readStream.on('error', function() {
    console.log("错误信息:" + err)
})
writeStream.on("finish", function() {
    console.log("文件写入成功");
    writeStream.end();
});