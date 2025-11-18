//总净额，数量
let totalCounts=document.querySelector("totalCount");//获取总数量
let totalPrice=document.querySelectorAll("price");//获取总金额
function total() {
    //重新获取输入框
   let totalCounts = document.querySelector('#totalCount');
   //重新获取小计数量
   let inputs = document.querySelectorAll('.number');
   //得到所有的数量
   var counts=document.getElementsByName("number");
   //得到所有的单价
   var prices=document.getElementsByName("price");
   var sumMoney=0;
   let num = 0;
   for (var i=0;i<counts.length;i++){
       //乘以Math.pow(10,2)的原因为避免失真
       //td只能获取innerHTML，不能是value
       sumMoney+=(parseFloat(prices[i].innerHTML)*Math.pow(10,2)*parseInt(counts[i].innerHTML)/Math.pow(10,2));
        num = num + Number(inputs[i].innerHTML); //可以使用number转换为数字型
        console.log( Number(sumMoney))
   }
   //小件数量
   //把总金额显示再指定的元素中
   console.log(num)
   totalCounts.innerHTML = num;
   document.getElementById("totalPrice").innerHTML=sumMoney;
   document.getElementById("totalPrice1").innerHTML=sumMoney;
   
}


//选择地址
function xz(btn){
    // alert("aaa");
    var tr = btn.parentNode.parentNode;
    // console.log(tr)
    // var name = tr.getElementsByTagName("td")[0].innerHTML;
    // console.log(name);

    var strongs1 = tr.getElementsByTagName("strong")[0].innerHTML;
    var strongs2 = tr.getElementsByTagName("strong")[1].innerHTML;
    var strongs3 = tr.getElementsByTagName("strong")[2].innerHTML;
    
    document.getElementById("a-name").innerHTML=strongs1
    document.getElementById("a-tel").innerHTML=strongs2
    document.getElementById("a-add").innerHTML=strongs3

}
