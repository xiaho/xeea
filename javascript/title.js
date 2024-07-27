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
var titleText = [ "", "y|", "y/", "yo|", "yo/", "yok|", "yok/", "yoka|", "yoka/", "yokai|", "yokai/", "yoka|", "yoka/", "yok|", "yok/", "yo|", "yo/", "y|", "y/", "乡"];

function loop(){
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
