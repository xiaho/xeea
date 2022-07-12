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
var titleText = [ "", "a|", "a/", "as|", "as/", "ast|", "ast/", "asta|", "asta/", "astar|", "astar/", "astari|", "astari/", "astar|", "astar/", "asta|", "asta/", "ast|", "ast/", "as|", "as/", "a|", "a/", "乡"];

function loop(){
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
