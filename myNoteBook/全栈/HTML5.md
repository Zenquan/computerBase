# HTML5

## geolocation 地理
PC    不精准

手机  GPS

```js
if ("geolocation" in navigator) {
  /* 地理位置服务可用 */
} else {
  /* 地理位置服务不可用 */
}
```
### 获取当前定位getCurrentPosition()
```js
navigator.geolocation.getCurrentPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
```
### 监视定位watchPosition() 
```js
var watchID = navigator.geolocation.watchPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
```
watchPosition() 函数会返回一个 ID，唯一地标记该位置监视器。您可以将这个 ID 传给 clearWatch() 函数来停止监视用户位置。
```js
navigator.geolocation.clearWatch(watchID);
```
### 调整返回结果
>getCurrentPosition() 和 watchPosition() 都接受一个成功回调、一个可选的失败回调和一个可选的 PositionOptions 对象。

对 watchPosition 的调用类似于这样:
```js
function geo_success(position) {
  do_something(position.coords.latitude, position.coords.longitude);
}

function geo_error() {
  alert("Sorry, no position available.");
}

var geo_options = {
  enableHighAccuracy: true, 
  maximumAge        : 30000, 
  timeout           : 27000
};

var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
```


## webworker  多进程

- 1.提高性能
- 2.提升用户体验

## video、audio

## 拖拽

ondragenter 进去
ondragleave 出来
ondragover  悬停---一直发生
ondrop      松手

reader.readAsText(oFile)   文本 
reader.readAsDataURL(oFile) base64位   图片
reader.readAsArrayBuffer(oFile)   原始二进制数据  编辑
reader.readAsBinaryString(oFile)  二进制文本形式  上传 

```js
oDiv.addEventListener('dragenter', function () {
    oDiv.innerHTML = "请上传图片"
}, false)
oDiv.addEventListener('dragleave', function () {
    oDiv.innerHTML = "拖到这里上传"
}, false)
oDiv.addEventListener('dragover', function (ev) {
    ev.preventDefault();
}, false)
oDiv.addEventListener('drop', function (ev) {
    ev.preventDefault();
    let oFile = ev.dataTransfer.files[0];
    let reader = new FileReader();
    reader.onload = function(){
        alert('成功'+this.result);
        // oImg.src=this.result;
    };
    reader.onerror = function(){
        alert('失败')
    };
    console.log(reader)
    reader.readAsBinaryString(oFile);
}, false)
```

## canvas---画布
1.什么都能画
2.性能高---大型动画、游戏

```html
<canvas width="" height=""><canvas>
```
图形上下文---绘图接口
```js
let gd = oC.getContext('2d');
```
路径操作--ps里的选区一样
moveTo
lineTo

beginPath: 清除之前路径
closePath：闭合路径

描边 stroke()  strokeStyle
填充 fill() fillStyle

矩形

gd.rect(100, 200, 400, 200);
gd.stroke();
stroke()  strokeStyle
fill() fillStyle

gd.strokeRect(100, 200, 400, 200)

gd.fillRect(100, 200, 400, 200)

弧（圆）

arc(cx, cy, r, startAng, endAng, 是否逆时针)

1度 = PI/180   *pi/180
1弧度 = 180/PI *180/pi