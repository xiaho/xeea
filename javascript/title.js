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
var titleText = [ "", "a|", "a/", "ak|", "ak/", "aku|", "aku/", "akuz|", "akuz/", "akuza|", "akuza/", "akuz|", "akuz/", "aku|", "aku/", "ak|", "ak/", "a|", "a/", "乡"];

function loop(){
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
