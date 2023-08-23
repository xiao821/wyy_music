// JavaScript Document
var number=true;
var music=document.querySelector("audio");
var tb=document.getElementsByClassName("tb");
for(var i=0;i<tb.length;i++){
	tb[i].onclick=function(){
		if(number===false){
			 number=true;
			music.pause();
			 
		}else{
			number=false;
			music.play();
		}
	};
}

var btn=document.getElementById('qd')
btn.onclick=function(){
	qd.innerHTML="已签到";
	qd.style.backgroundColor="#f5f5f5";
	qd.style.color="#b2adad"
	
	if(qd.innerHTML=="已签到"){
		window.alert('签到成功');
		document.getElementById('qd').disabled=true;
	}
}


