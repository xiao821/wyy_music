
var tab_list = document.querySelector('left_music');
var tab_list1 = document.querySelector('left_music1');
var lis = document.getElementById('only').querySelectorAll('.name');
// var lis1 = document.getElementById('only1').querySelectorAll('li');
var items = document.querySelectorAll('.item');
for(var i = 0; i < lis.length; i++){
    // 开始给5个li 设置索引号
    lis[i].setAttribute('index',i);
    lis[i].onclick = function(){
        for(var i = 0; i < lis.length; i++){
            lis[i].className = '';
        }
        this.className = 'selected';
        // 下面显示内容
        var index = this.getAttribute('index');
        // console.log(index);
        // 干掉其他人 让其余的item 这些div 隐藏
        for(var i = 0; i < items.length; i++){
            items[i].style.display = 'none';
        }
        // 留下我自己 让对应的item显示出来

        items[index].style.display = 'block';
    }
}
