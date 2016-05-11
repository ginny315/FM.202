### 遇到的一些问题及处理方式
 - style lang="sass"模式下不能换行写
   模式运用错误，改成 lang="scss" 后成功
   
 - 在图片中使用相对地址正确，但是当数据返回时绑定图片地址时，webpack对图片打包处理了，这时要怎样找路径？
   在之前require文件进去
   
 - 一个神奇的定位问题
   将body设置为position:relative之后，若将header设置position:fixed，则相对于浏览器定位，而后面的滑动框被撑大了，导致此时的header的位置不能变成max-width：640，而是被撑大的实际值。
   若将header设置为position:absolute，则不能保证随着滚动条变化而保持位置不变，有没有能同时满足两个要求的东西咧?设置header的max-width：640px
   
 - 怎样用focus?
   要实现首次加载时第一个元素获得焦点，当手指滑动时改变焦点，只能有一个焦点
   传统做法是页面加载完毕取第一个元素设置为focus，根据监听事件改变焦点
   vue中怎样判断这个节点已经加载完毕了呢?
   不要操作DOM节点，通过数据绑定判断（绑定在class中）