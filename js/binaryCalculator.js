'use strict';  
var myexp = ''; // holds the expression to be evaluated
function updateDisp() {
    document.getElementById('res').innerHTML = myexp;
};
document.getElementById('btnClr').onclick = function() {
    myexp = '';
    updateDisp();
};
function addExp(e) {
    var btn = e.target || e.srcElement;
    myexp += document.getElementById(btn.id).innerHTML;
    updateDisp();
};
document.getElementById('btn0').onclick = addExp;
document.getElementById('btn1').onclick = addExp;
document.getElementById('btnSum').onclick = addExp;
document.getElementById('btnSub').onclick = addExp;
document.getElementById('btnMul').onclick = addExp;
document.getElementById('btnDiv').onclick = addExp;
document.getElementById('btnEql').onclick = function() {
    var nums = ['',''];
    var op = '';
    var j = 0;
    for (let e of myexp) {
        if (e == '0' || e == '1') {
            nums[j] += e;
        } else {
            op = e;
            j++;
        }
    }
    var result = parseInt(nums[0],2).toString() + op + parseInt(nums[1],2).toString();
    myexp = eval(result).toString(2);
    updateDisp();
};