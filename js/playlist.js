
var lis = document.querySelectorAll('.name');
var items = document.querySelectorAll('.item');
var button=document.getElementById('a')
var con=document.getElementById('fade')

console.log(lis);
console.log(items);
for(var i = 0; i < lis.length; i++){
    // 开始给5个li 设置索引号
    lis[i].setAttribute('index',i);
    lis[i].onclick = function(){
        for(var i = 0; i < lis.length; i++){
            lis[i].className = '';
        }
        this.className = 'current';
        // 下面显示内容
        var index = this.getAttribute('index');
        //  console.log(index);
        // 干掉其他人 让其余的item 这些div 隐藏
        for(var i = 0; i < items.length; i++){
            items[i].style.display = 'none';
        }
        // 留下我自己 让对应的item显示出来
        items[index].style.display = 'block';
        fade.style.display='none'
    }
}

button.onclick=function(){
    if (fade.style.display == "block") {
        fade.style.display = 'none';

    } else {
        fade.style.display = 'block';
    }
    
}


