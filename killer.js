
var pm1=sessionStorage.getItem("pm");
var pm=parseInt(pm1);
var ss1=sessionStorage.getItem("ss");
var ss=parseInt(ss1);



$(document).ready(function() {
	$("#backTo").click(function(){
		window.location.href="assign.html";
	});
});

$(document).ready(function() {
	$("#endTo").click(function(){
		window.location.href="assign.html";
	});
});


var ident1=sessionStorage.getItem("ident0");
var ident = ident1.split('-');
var i=ident.length+1;

function show(){
	for(i;i<=18;i++){
		var cc="card"+i;
		document.getElementById(cc).style.display="none";
	}

	for(var j=0;j<ident.length;j++){
		var bb="cIdent"+(j+1);
		document.getElementById(bb).innerHTML=ident[j];
	}
}

$(document).ready(function() {
		var u=sessionStorage.getItem("c");

		if(!u){
			var u=new Array();
		}
		var u1 = u.split("-");
		
		
		for(var j=0;j<u1.length;j++){
			$("#card"+u1[j]).children(".cIdent").css("background","rgb(146,183,165)");//jq选择器中加变量
		}	
		
});

$(document).ready(function() {
	
	$(".card").click(function(){
		var dp11=sessionStorage.getItem("dp");
		if(dp11){
		var sz=$(this).children(".nIdent").html();
		var shan2=sessionStorage.getItem("c");
		
			var shan33=shan2.split("-");
			for(var i=0;i<10;i++){
				var duibi=parseInt(shan33[i]);
				
				
				if(duibi==parseInt(sz)){
					alert("他已经死了，请重新选择杀人目标！");///////////////////
				}
			}
		}
			
		var sf=$(this).children(".cIdent").html();
		if(sf=="杀手"){
			alert("不可以杀自己人!");
		}else{
		var shan10=sessionStorage.getItem("shan");
		var flag2=sessionStorage.getItem("flag");
		
		if(!shan10){
			$(".knife").css("display","none");
			$(this).children(".knife").css("display","block");
			var a1=$(this).children(".nIdent").html();
			var a=parseInt(a1);
			sessionStorage.setItem("s", a);
			sessionStorage.setItem("shan0",a);//记录杀人num，用于最后复盘
			var g1=$(this).children(".cIdent").html();
			sessionStorage.setItem("shas0",g1);//记录杀人id，用于最后复盘
			var death=new Array();
			death.push(a);
			if(!shan){
				var shana=new Array();
				sessionStorage.setItem("shan",shana);
			}
			var shan1=sessionStorage.getItem("shan");
			var shan2=shan1.split("-");
			
			
			shan2.push(a);
			
			shan3=shan2.join("-");

			sessionStorage.setItem("shan",shan3);
			
			pm--;
			var pm2=pm;
		
			sessionStorage.setItem("pm",pm2);
			sessionStorage.setItem("b", death);
			var flag1=1;
			sessionStorage.setItem("flag",flag1);
		
		}else{
			var flag2=sessionStorage.getItem("flag");
			
			if(flag2==1){
				
				var shan4=sessionStorage.getItem("shan");
				var b1=sessionStorage.getItem("b");
				var shan5=shan4.split("-");
				var b2=b1.split("-");
				shan5.pop();
				b2.pop();
				shan6=shan5.join("-");
				b3=b2.join("-");

				sessionStorage.setItem("b",b3);
				sessionStorage.setItem("shan",shan6);
				pm3=sessionStorage.getItem("pm");
				pm3++;
				pm4=pm3;
				sessionStorage.setItem("pm",pm4);
			}

			$(".knife").css("display","none");
			$(this).children(".knife").css("display","block");
			var a1=$(this).children(".nIdent").html();
			var a=parseInt(a1);
			
			var shan2=sessionStorage.getItem("shan");
			//为最后一页复盘建立每夜杀人号码的数组
			var shan=shan2.split("-");
			shan.push(a);
			shan1=shan.join("-");
			
			sessionStorage.setItem("shan",shan1);
			
			//不再存为最后一页复盘建立每夜杀人身份的数组，因为杀手必须杀害平民！

			sessionStorage.setItem("s", a);
			var death1=sessionStorage.getItem("c");

			if(!death1){
				
				var death22=new Array();
				var death1=death22.join("-");

			}

			var death3=death1.split("-");
			death3.push(a);
			
			var death2 = death3.join("-");
			
			sessionStorage.setItem("b", death2);
			var pm1=sessionStorage.getItem("pm");
			
			pm1--;
			var pm2=pm1;
			
			sessionStorage.setItem("pm",pm2);
			var flag3=sessionStorage.getItem("flag");
			flag3=1;
			sessionStorage.setItem("flag",flag3);
		}
	}	
	});
});

$(document).ready(function() {
	$("#footer").click(function(){
		var flag4=sessionStorage.getItem("flag");
			flag4=0;
			sessionStorage.setItem("flag",flag4);
		window.location.href="choose.html";
		
	});
});