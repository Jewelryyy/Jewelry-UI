document.getElementById('openDialog').addEventListener('click', function () {
    document.getElementById('dialog').classList.remove('hidden');
});

document.getElementById('confirm').addEventListener('click', function () {
    document.getElementById('dialog').classList.add('hidden');
});

document.getElementById('cancel').addEventListener('click', function () {
    document.getElementById('dialog').classList.add('hidden');
});