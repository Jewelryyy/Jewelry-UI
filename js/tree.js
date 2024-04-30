// 获取所有的树节点
var treeNodes = document.querySelectorAll('.tree-node');
// 遍历每个树节点
treeNodes.forEach(function (node) {
    // 获取当前树节点的下一个兄弟元素
    var children = node.nextElementSibling;
    // 默认折叠所有的树节点
    node.classList.add('collapsed');
    // 如果下一个兄弟元素存在且是一个 ul 元素（即子树）
    if (children && children.tagName === 'UL') {
        // 隐藏子树
        children.style.display = 'none';
    } else {
        // 如果没有子树，给当前树节点添加 no-children 类
        node.classList.add('no-children');
    }
});

// 获取树的容器元素，添加点击事件监听器
var treeArea = document.querySelector('.tree');
treeArea.addEventListener('click', function (event) {
    // 如果点击的是一个 span 元素（即树节点的文本）
    if (event.target.tagName === 'SPAN') {
        // 获取被点击的树节点
        var node = event.target;
        // 获取被点击的树节点的下一个兄弟元素
        var children = event.target.nextElementSibling;
        // 如果下一个兄弟元素存在且是一个 ul 元素（即子树）
        if (children && children.tagName === 'UL') {
            var isCollapsed = children.style.display === 'none';
            children.style.display = isCollapsed ? '' : 'none';
            // 如果子树被展开
            if (isCollapsed) {
                // 移除 collapsed 类，表示树节点已展开
                node.classList.remove('collapsed');
            } else {
                // 添加 collapsed 类，表示树节点已折叠
                node.classList.add('collapsed');
            }
        }
    }
});

// 树形选择器
document.querySelectorAll('.custom-checkbox').forEach(function (span) {
    span.addEventListener('click', function () {
        var checkbox = this.previousElementSibling;
        checkbox.checked = !checkbox.checked;
        // 手动触发 change 事件
        var event = new Event('change');
        checkbox.dispatchEvent(event);
    });
});

document.querySelectorAll('.tree-select-node input[type="checkbox"]').forEach(function (node) {
    node.addEventListener('change', function () {
        var children = this.parentNode.nextElementSibling;
        if (children) {
            children.querySelectorAll('input[type="checkbox"]').forEach(function (child) {
                child.checked = node.checked;
            });
        }
    });
});

// 获取所有的树节点
var treeNodes = document.querySelectorAll('.tree-select-node');
// 遍历每个树节点
treeNodes.forEach(function (node) {
    // 获取当前树节点的下一个兄弟元素
    var children = node.nextElementSibling;
    // 默认折叠所有的树节点
    node.classList.add('collapsed');
    // 如果下一个兄弟元素存在且是一个 ul 元素（即子树）
    if (children && children.tagName === 'UL') {
        // 隐藏子树
        children.style.display = 'none';
    } else {
        // 如果没有子树，给当前树节点添加 no-children 类
        node.classList.add('no-children');
    }
});

// 获取树的容器元素，添加点击事件监听器
var treeArea = document.querySelector('.tree_select');
treeArea.addEventListener('click', function (event) {
    // 如果点击的是一个 span 元素（即树节点的文本）
    if (event.target.tagName === 'SPAN') {
        // 获取被点击的树节点
        var node = event.target;
        // 获取被点击的树节点的下一个兄弟元素
        var children = event.target.nextElementSibling;
        // 如果下一个兄弟元素存在且是一个 ul 元素（即子树）
        if (children && children.tagName === 'UL') {
            var isCollapsed = children.style.display === 'none';
            children.style.display = isCollapsed ? '' : 'none';
            // 如果子树被展开
            if (isCollapsed) {
                // 移除 collapsed 类，表示树节点已展开
                node.classList.remove('collapsed');
            } else {
                // 添加 collapsed 类，表示树节点已折叠
                node.classList.add('collapsed');
            }
        }
    }
});


//树形下拉框
document.querySelector('.custom-select').addEventListener('click', function () {
    this.classList.toggle('open');
    document.querySelector('.selected-option').classList.toggle('rotated');
});

document.querySelectorAll('.tree_pull .tree-node').forEach(function (node) {
    node.addEventListener('click', function (event) {
        event.stopPropagation();
        // 获取被点击的节点的下一个兄弟元素
        var children = this.nextElementSibling;
        // 如果下一个兄弟元素存在且是一个 ul 元素（即子树）
        if (children && children.tagName === 'UL') {
            var isCollapsed = children.style.display === 'none';
            children.style.display = isCollapsed ? '' : 'none';
            // 如果子树被展开
            if (isCollapsed) {
                // 移除 collapsed 类，表示树节点已展开
                this.classList.remove('collapsed');
            } else {
                // 添加 collapsed 类，表示树节点已折叠
                this.classList.add('collapsed');
            }
        } else {
            // 如果没有子树，将节点的文本内容赋给 .custom-select
            var selectedOption = this.closest('.custom-select').querySelector('.selected-option');
            selectedOption.textContent = this.textContent;
            // 移除 open 类
            this.closest('.custom-select').classList.remove('open');
            document.querySelector('.selected-option').classList.toggle('rotated');
        }
    });
});