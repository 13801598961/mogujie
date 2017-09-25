!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 20 * (width / 320) + "px");
        };
     
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
 
}(document, window));


// 鼠标轮播效果
function scrollDoor(){
}
scrollDoor.prototype = {
	sd : function(a,b,c,d){
		var box = this;
		if(a.length != b.length)
		{
			alert("菜单层数量和内容层数量不一样!");
			return false;
		}				
		for(var i = 0 ; i < a.length ; i++)
		{	
			box.$(a[i]).value = i;				
			box.$(a[i]).onmouseover = function(){
					
				for(var j = 0 ; j < a.length ; j++)
				{						
					box.$(a[j]).className = d;
					box.$(b[j]).style.display = "none";
				}
				box.$(a[this.value]).className = c;	
				box.$(b[this.value]).style.display = "block";				
			}
		}
		},
	$ : function(oid){
		if(typeof(oid) == "string")
		return document.getElementById(oid);
		return oid;
	}
}
window.onload = function(){
	var SDmodel = new scrollDoor();
	SDmodel.sd(["m01","m02","m03","m04","m05"],["c01","c02","c03","c04","c05"],"sd01","sd02");
}


