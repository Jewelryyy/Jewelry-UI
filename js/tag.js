var dynamicTag = document.querySelector('#dynamic .dynamic_tag');

dynamicTag.addEventListener('click', handleTagClick);

function handleTagClick() {
    dynamicTag.textContent = '';
    // 调换监听器
    dynamicTag.removeEventListener('click', handleTagClick);
    dynamicTag.addEventListener('keydown', handleTagInput);
}

function handleTagInput(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        var newTagText = dynamicTag.textContent.trim();
        if (newTagText !== '') {
            // 构建新标签
            var newTag = document.createElement('span');
            newTag.className = 'tag info';
            newTag.textContent = newTagText;
            var closeBtn = document.createElement('span');
            closeBtn.className = 'icon';
            closeBtn.textContent = '×';
            closeBtn.onclick = function () {
                this.parentElement.remove();
            };
            newTag.appendChild(closeBtn);

            dynamicTag.textContent = '添加文本 +';
            // 失焦操作
            dynamicTag.blur();

            // 将新标签添加进文档
            var parent = document.getElementById('dynamic');
            parent.insertBefore(newTag, dynamicTag); // 将新标签插入到添加按钮前面

            // 重置监听器
            dynamicTag.removeEventListener('keydown', handleTagInput);
            dynamicTag.addEventListener('click', handleTagClick);
        }
    }
}