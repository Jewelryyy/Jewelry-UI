var fileInput = document.getElementById('file-input');
var fileList = document.getElementById('file-list');

fileInput.addEventListener('change', function (event) {
    var files = event.target.files;

    // 清空文件列表
    fileList.innerHTML = '';

    // 遍历选择的文件并添加到文件列表
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var listItem = document.createElement('li');
        listItem.classList.add('file-item');
        listItem.innerHTML = '<span class="file-name">' + file.name + '</span><span class="file-delete">删除</span>';
        fileList.appendChild(listItem);
    }
});

fileList.addEventListener('click', function (event) {
    if (event.target.classList.contains('file-delete')) {
        var listItem = event.target.parentNode;
        fileList.removeChild(listItem);
    }
});

document.getElementById('img-input').addEventListener('change', function () {
    var file = this.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var label = document.getElementById('img-label');
            label.textContent = '';
            label.insertAdjacentHTML('beforeend', '<img id="preview" style="max-width: 200px; max-height: 200px;">');
            document.getElementById('preview').addEventListener('click', function (event) {
                var preview = document.getElementById('preview');
                if (preview) {
                    preview.parentNode.removeChild(preview);
                }
                document.getElementById('img-label').textContent = '+';
            });
            document.getElementById('preview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
