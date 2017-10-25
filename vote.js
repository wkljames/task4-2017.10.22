
var pm1=sessionStorage.getItem("pm");
var pm=parseInt(pm1);
var ss1=sessionStorage.getItem("ss");
var ss=parseInt(ss1);

$(document).ready(function() {
	$("#backTo").click(function(){
		window.location.href="choose.html";
	});
});

$(document).ready(function() {
	$("#endTo").click(function(){
		window.location.href="choose.html";
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
		var u=sessionStorage.getItem("b");
		var u1 = u.split('-');
		
		for(var j=0;j<u1.length;j++){
			$("#card"+u1[j]).children(".cIdent").css("background","rgb(146,183,165)");//jq选择器中加变量
		}	
	
});


$(document).ready(function() {
	$(".card").click(function(){
		var sz=$(this).children(".nIdent").html();
		var shan2=sessionStorage.getItem("b");
		
			var shan33=shan2.split("-");
			for(var i=0;i<10;i++){
				var duibi=parseInt(shan33[i]);
				
				
				if(duibi==parseInt(sz)){
					alert("他已经死了，请重新选择投票目标！");///////////////////
				}
			}
		$(".knife").css("display","none");
		$(this).children(".knife").css("display","block");
		$(".card").children(".cIdent").css("background","rgb(244,208,133)");
		var u=sessionStorage.getItem("b");
		var u1 = u.split('-');
		
		for(var j=0;j<u1.length;j++){
			$("#card"+u1[j]).children(".cIdent").css("background","rgb(146,183,165)");//jq选择器中加变量
		}	
		$(this).children(".cIdent").css("background","rgb(146,183,165)");
		var w1=$(this).children(".nIdent").html();
		var w=parseInt(w1);
		
		var g1=$(this).children(".cIdent").html();
		var dpp=sessionStorage.getItem("dp");
		 dpp-=0;
		if(dpp==1){
		sessionStorage.setItem("toun0",w);//记录投人num，用于最后复盘（只是第一天）
		sessionStorage.setItem("tous0",g1);//记录杀投人id，用于最后复盘（只是第一天）
		}
		var toun=sessionStorage.getItem("toun");
		var tous=sessionStorage.getItem("tous");
			if((!toun)||(!tous)){
				var touna=new Array();
				var tousa=new Array();
				sessionStorage.setItem("toun",touna);
				sessionStorage.setItem("tous",touna);
			}
			var lag2=sessionStorage.getItem("lag");
		
			if(lag2==1){
			
				var toun4=sessionStorage.getItem("toun");
				var tous4=sessionStorage.getItem("tous");
				var c1=sessionStorage.getItem("c");
				var toun5=toun4.split("-");
				var tous5=tous4.split("-");
				var c2=c1.split("-");
				toun5.pop();
				tous5.pop();
				c2.pop();
				toun6=toun5.join("-");
				tous6=tous5.join("-");
				c3=c2.join("-");

				sessionStorage.setItem("c",c3);
				sessionStorage.setItem("toun",toun6);
				sessionStorage.setItem("tous",tous6);
				
				
				var sf3=sessionStorage.getItem("sf2");
			
			if(sf3=="杀手"){
				ss3=sessionStorage.getItem("ss");
				ss3++;
				
				ss4=ss3;
				sessionStorage.setItem("ss",ss4);
			}else{
				pm3=sessionStorage.getItem("pm");
				pm3++;
				pm4=pm3;
				sessionStorage.setItem("pm",pm4);
				
				}
			}
		var toun2=sessionStorage.getItem("toun");//为最后一页复盘建立每天投票号码的数组
		
		var toun=toun2.split("-");	
			toun.push(w);
			toun1=toun.join("-");
			sessionStorage.setItem("toun",toun1);
			

		var tous2=sessionStorage.getItem("tous");//为最后一页复盘建立每天投票号码的数组
		var tous=tous2.split("-");	
			tous.push(g1);
			tous1=tous.join("-");
			sessionStorage.setItem("tous",tous1);
			
		
		
		u1.push(w);
		var u2 = u1.join("-");
		
		sessionStorage.setItem("c",u2);
		var lag2=1;
		sessionStorage.setItem("lag",lag2);

		var sf=$(this).children(".cIdent").html();
		sessionStorage.setItem("sf2",sf);
		if(sf=="杀手"){
			ss=sessionStorage.getItem("ss");
			ss--;
			var ss2=ss;
			sessionStorage.setItem("ss",ss2);
		}else{
			pm=sessionStorage.getItem("pm");
			pm--;
			var pm2=pm;
			sessionStorage.setItem("pm",pm2);
			
		}
		
	});
});

$(document).ready(function() {
	$("#footer").click(function(){
		var lag4=sessionStorage.getItem("lag");
			lag4=0;
			sessionStorage.setItem("lag",lag4);
			ss=sessionStorage.getItem("ss");
			pm=sessionStorage.getItem("pm");
		if(ss>=(pm-1)){
			alert("杀手胜利！");
			
			window.location.href="end.html";
		}else if(ss==0){
			alert("平民胜利！");
			
			window.location.href="end.html";
		}else{
			window.location.href="choose.html";
		}
	});
});