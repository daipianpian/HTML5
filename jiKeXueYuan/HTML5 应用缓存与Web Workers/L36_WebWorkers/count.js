/**
 * Created ”¶”√ª∫¥Ê”ÎWeb Workers-count.js by fairy on 2016/1/11.
 */

var countNum = 0;
function count(){
    postMessage(countNum);
    countNum++;
    setTimeout(count , 1000);
}

count();