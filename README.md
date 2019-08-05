主要就是使用node爬取网页数据，爬取了一下图片，下载到本地。
一、搭建开发环境
安装nodejs(4.2.6)
下载地址:https://nodejs.org 下载对应操作系统的安装包并安装。

node -v
检测版本是否正常

检查npm
npm -v

二、安装依赖
npm install

三、下载图片示例
node eg.js
所下载的图片请在assets文件夹查看

四、本地页面预览
node demo.js
根据提示在浏览器输入localhost:8081

五、本地json数据预览
在第四步的基础上
根据提示在浏览器输入localhost:8081/index

六、查看下载图片
图片存在项目的相对路径assets的文件夹

七、预览图
![预览图](https://raw.githubusercontent.com/ght5935/nodeImg/master/assets/1.png)

注：为了可以下载更多的图片，可以手动更改demo.js中 page 的值，然后重启服务（第四步）

<br/>
/index返回取到json
<br/>
/index.html在网页上显示图片
