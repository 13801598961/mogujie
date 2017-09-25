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


// 增减运算符
function calculate(ob){
            var opera = ob.innerHTML;
            if(opera == '+'){
                var input = ob.previousSibling.previousSibling;
                input.value = parseInt(input.value) + 1;
            }else if(opera == '-'){
                var input = ob.nextSibling.nextSibling;
                input.value = parseInt(input.value) - 1;
                if( input.value < 1 ){
                    input.value = 1;
                }
            }
        }
