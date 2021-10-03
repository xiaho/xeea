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
var titleText = [ "乡", "乡|", "乡x/", "乡x|", "乡xs/", "乡xs|", "乡xsu/", "乡xsu|", "乡x/", "乡x|", "乡|", "乡"];

function loop(){
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
