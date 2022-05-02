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
var titleText = [ "乡", "乡|", "乡f/", "乡f|", "乡fu/", "乡fu|", "乡fus/", "乡fus|", "乡fuss/", "乡fuss|", "乡fussi|", "乡fussi/", "乡fussia|", "乡fussia/",];

function loop(){
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
