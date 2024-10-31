if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}
function loaded(){
	setInterval(loop, 300);
}
var x = 0;
var titleText = [ "", "x|", "x/", "xe|", "xe/", "xee|", "xee/", "xeea|", "xeea/", "xeea|", "xeea/", "xee|", "xee/", "xe|", "xe/", "x|", "x/", "乡"];

function loop(){
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
