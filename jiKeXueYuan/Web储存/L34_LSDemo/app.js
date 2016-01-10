/**
 * Created Web存储-localStroage-app.js by fairy on 2016/1/11.
 */

var ta;
var btn;
window.onload = function(){
    ta = document.getElementById('ta');

    if(localStorage.text){
        ta.value = localStorage.text;
    }
    btn = document.getElementById('btn');
    btn.onclick = function(){
        localStorage.text = ta.value;
    }
}