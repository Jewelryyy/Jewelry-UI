// 获取表格元素
var table = document.querySelector('.table');

// 为表头的每一列添加点击事件监听器
table.querySelectorAll('th').forEach(function (header, index) {
    header.addEventListener('click', function () {
        // 获取表体的所有行
        var rows = Array.from(table.querySelectorAll('tbody tr'));
        // 根据被点击的列对行进行排序
        rows.sort(function (rowA, rowB) {
            var cellA = rowA.cells[index].textContent;
            var cellB = rowB.cells[index].textContent;
            return cellA < cellB ? -1 : cellA > cellB ? 1 : 0;
        });
        // 将排序后的行添加回表体
        rows.forEach(function (row) {
            table.querySelector('tbody').appendChild(row);
        });
    });
});

// 获取全选复选框
var checkAll = document.querySelector('#checkAll');
// 获取所有的单选复选框
var checkItems = document.querySelectorAll('.checkItem');

// 为全选复选框添加点击事件监听器
checkAll.addEventListener('click', function () {
    // 遍历所有的单选复选框，将它们的选中状态设置为全选复选框的选中状态
    checkItems.forEach(function (checkItem) {
        checkItem.checked = checkAll.checked;
    });
});

// 为每个单选复选框添加点击事件监听器
checkItems.forEach(function (checkItem) {
    checkItem.addEventListener('click', function () {
        // 如果所有的单选复选框都被选中，那么全选复选框也应该被选中
        checkAll.checked = Array.from(checkItems).every(function (item) {
            return item.checked;
        });
    });
});