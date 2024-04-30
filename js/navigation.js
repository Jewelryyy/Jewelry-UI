document.querySelectorAll('.navigation > ul > li').forEach(function (li) {
    li.addEventListener('click', function (event) {
        event.stopPropagation();
        var subMenu = document.getElementById('sub-menu');
        if (subMenu) {
            if (subMenu.style.display === 'none' || subMenu.style.display === '') {
                subMenu.style.display = 'block';
            } else {
                subMenu.style.display = 'none';
            }
        }
    });
});

document.querySelectorAll('.nav-item.toSub').forEach(function (li) {
    li.addEventListener('click', function (event) {
        event.stopPropagation();
        this.classList.toggle('rotated');
    });
});

// 防止子菜单的点击事件冒泡到父菜单
document.querySelectorAll('.navigation ul ul').forEach(function (ul) {
    ul.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});