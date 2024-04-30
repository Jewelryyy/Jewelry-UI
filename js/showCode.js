// 获取所有的 .show_code 类的 <a> 标签
var buttons = document.querySelectorAll('.show_code');

// 为每个 <a> 标签添加点击事件监听器
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
        event.preventDefault();
        // 获取当前 <a> 标签对应的 .code_area 元素
        var codeArea = this.nextElementSibling;
        // 切换 codeArea 的可见性
        if (codeArea.style.display === 'none' || codeArea.style.display === '') {
            codeArea.style.display = 'block';
            this.textContent = '隐藏代码';  // 改变按钮的文字
        } else {
            codeArea.style.display = 'none';
            this.textContent = '显示代码';  // 改变按钮的文字
        }
    });
}