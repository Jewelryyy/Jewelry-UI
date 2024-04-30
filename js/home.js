// 获取所有的链接
var links = document.querySelectorAll('a');

// 为每个链接添加点击事件监听器
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        // 给链接添加选中样式
        for (var j = 0; j < links.length; j++) {
            links[j].classList.remove('selected');
        }
        this.classList.add('selected');
        // 获取链接内容
        var component = this.href.split('#').pop();
        // 组建资源路径
        var url = './component/' + component + '.html';
        // 创建新的 DOM 元素
        var iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style.width = '100%'; // 设置宽度为 100%
        iframe.style.height = '100%'; // 设置高度为 100%
        iframe.style.border = 'none'; // 去掉边框
        iframe.style.overflow = 'auto'; // 设置滚动条为自动
        iframe.style.display = 'block'; // 设置为块级元素
        // 将新元素添加到页面中
        var containerMain = document.querySelector('.container_main');
        containerMain.innerHTML = ''; // 清空主区域内容
        containerMain.appendChild(iframe);
    });
}
