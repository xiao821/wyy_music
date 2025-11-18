
function onloads(){
	//定时器
	var ul=document.getElementById("wrap-ul");
	timer = setInterval(toright1,2000);
	ul.onmousemove = function(){
		clearInterval(timer);
		// timer = null;
	}
	ul.onmouseleave = function(){
		timer = setInterval(toright1,2000);
	}
}

var lis=document.getElementsByClassName("aa");
//console.log(lis)
var pages=document.getElementsByClassName("page");
//console.log(pages)

var lisclass = ['cc aa','b1 aa','b1 aa','b1 aa','b1 aa','b1 aa'];
var pageclass = ['page active','page','page','page','page','page'];

function toleft1(){
	var first_lis = lisclass.shift();
	lisclass.push(first_lis);
	var frist_pages = pageclass.shift();
	pageclass.push(frist_pages);

	for (var i=0;i<lis.length;i++) {
		lis[i].className = lisclass[i];
		pages[i].className = pageclass[i];
	}
}

function toright1(){
	var first_lis = lisclass.pop();
	lisclass.unshift(first_lis);
	//console.log(first_lis);
	var frist_pages = pageclass.pop();
	pageclass.unshift(frist_pages);
	//console.log(frist_pages);

	//console.log(lis);
	for (var i=0;i<lis.length;i++) {
		lis[i].className = lisclass[i];
		pages[i].className = pageclass[i];
	}
}

function page_onclick(k){
	var lis_clear = ['b1 aa','b1 aa','b1 aa','b1 aa','b1 aa','b1 aa'];
	var pages_claer = ['page','page','page','page','page','page'];
	for (var i=0;i<lis.length;i++) {
		lis[i].className = lis_clear[i];
		pages[i].className = pages_claer[i];
	}
	lis[k].setAttribute('class','cc aa');
	pages[k].setAttribute('class','page active');
}


// 下面轮播图
let rolldiv = document.getElementById("rolldiv");
let ulname= document.getElementsByName("ulname")[0];
let bigdiv=document.getElementById('bigdiv');
//alert(ulname.offsetWidth-bigdiv.offsetWidth);

//alert(ulname.style.width);
let rorgint=ulname.offsetLeft;//记录开始的值

let lorgint=ulname.offsetWidth-bigdiv.offsetWidth+60;//算不出  随便写一个吧
let index=1;//判断是否在运行 1为运行 0 为否；
let action=setInterval(function (){
	   if(ulname.offsetLeft<=-lorgint){
		   rightorleft=2;
		   //alert("21313");
	   }
	   if(ulname.offsetLeft>=rorgint)
	   {
		   rightorleft=-2;
	   }
	ulname.style.left=ulname.offsetLeft+rightorleft+'px';
	//console.log(ulname.offsetLeft);
},30);
let rightorleft=-2;//判断左右
function leftaction(){
	 rightorleft=-2;
}
function rightaction(){
	 rightorleft=2;
}

function divaction(){
   if(index ==0){
	action=setInterval(function (){
		if(ulname.offsetLeft<=-lorgint){
			rightorleft=2;
		}
		if(ulname.offsetLeft>=rorgint)
		{
			rightorleft=-2;
		}
		ulname.style.left=ulname.offsetLeft+rightorleft+'px';
		//console.log(ulname.offsetLeft);记录滚动值
		},30);
	index=1;
	}
}
function divstop(){
   if(index==1){
   clearInterval(action);
   index=0;
   }
}
