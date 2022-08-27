function one(){
    document.getElementById('txt2').value += "1";
}
function two(){
    document.getElementById('txt2').value += "2";
}
function three(){
    document.getElementById('txt2').value += "3";
}
function four(){
    document.getElementById('txt2').value += "4";
}
function five(){
    document.getElementById('txt2').value += "5";
}
function six(){
    document.getElementById('txt2').value += "6";
}
function seven(){
    document.getElementById('txt2').value += "7";
}
function eight(){
    document.getElementById('txt2').value += "8";
}
function nine(){
    document.getElementById('txt2').value += "9";
}
function zero(){
    document.getElementById('txt2').value += "0";
}
function decimal(){
    document.getElementById('txt2').value += ".";
}
function doubleZero(){
    document.getElementById('txt2').value += "00";
}
function allClear(){
    document.getElementById('txt1').value = "";
    document.getElementById('txt2').value = "";
}
function equalto(){
    document.getElementById('txt1').value = document.getElementById('txt2').value + "=";
    document.getElementById('txt2').value = eval(document.getElementById('txt2').value);
}
function plus(){
    document.getElementById('txt2').value += "+";
}
function minus(){
    document.getElementById('txt2').value += "-";
}
function divide(){
    document.getElementById('txt2').value += "/";
}
function multiply(){
    document.getElementById('txt2').value += "*";
}
function openParenthesis(){
    document.getElementById('txt2').value += "("; 
}
function closeParenthesis(){
    document.getElementById('txt2').value += ")"; 
}
function percent(){
    document.getElementById('txt2').value = document.getElementById('txt2').value + "/100";
}
function rec(){
    document.getElementById('txt1').value = "1/" + document.getElementById('txt2').value + "=";
    document.getElementById('txt2').value = 1 / document.getElementById('txt2').value;
}
function sqr(){
    document.getElementById('txt1').value = document.getElementById('txt2').value + "*" + document.getElementById('txt2').value + "=";
    document.getElementById('txt2').value = document.getElementById('txt2').value * document.getElementById('txt2').value;
}
function cube(){
    document.getElementById('txt1').value = document.getElementById('txt2').value + "*" + document.getElementById('txt2').value + "*" + document.getElementById('txt2').value + "=";
    document.getElementById('txt2').value = document.getElementById('txt2').value * document.getElementById('txt2').value * document.getElementById('txt2').value;
}
function sqrt(){
    document.getElementById('txt1').value = "√" +  document.getElementById('txt2').value + "=";
    document.getElementById('txt2').value = Math.sqrt( document.getElementById('txt2').value);
}
function mod(){
    document.getElementById('txt1').value = "|" +  document.getElementById('txt2').value + "|" + "=";
    document.getElementById('txt2').value = Math.abs( document.getElementById('txt2').value);
}
function rad(){
    if( document.getElementById('rad').innerHTML == "RAD"){
        document.getElementById('rad').innerHTML = "DEG";
    }
    else{
        document.getElementById('rad').innerHTML= "RAD";
    }
}
function sin(){
    if(document.getElementById('rad').innerHTML == "DEG"){
        document.getElementById('txt1').value = "sin(" +  document.getElementById('txt2').value + ")" + "=";
        document.getElementById('txt2').value = Math.sin( document.getElementById('txt2').value * Math.PI/180);
    }
    else{
        document.getElementById('txt1').value = "sin(" +  document.getElementById('txt2').value + ")"+"=";
        document.getElementById('txt2').value = Math.sin( document.getElementById('txt2').value);
    }
}
function cos(){
    if(document.getElementById('rad').innerHTML == "DEG"){
        document.getElementById('txt1').value = "cos(" +  document.getElementById('txt2').value + ")" + "=";
        document.getElementById('txt2').value = Math.cos( document.getElementById('txt2').value * Math.PI/180);
    }
    else{
        document.getElementById('txt1').value = "cos(" +  document.getElementById('txt2').value + ")"+"=";
        document.getElementById('txt2').value = Math.cos( document.getElementById('txt2').value);
    }
}
function tan(){
    if(document.getElementById('rad').innerHTML == "DEG"){
        document.getElementById('txt1').value = "tan(" +  document.getElementById('txt2').value + ")" + "=";
        document.getElementById('txt2').value = Math.tan( document.getElementById('txt2').value * Math.PI/180);
    }
    else{
        document.getElementById('txt1').value = "tan(" +  document.getElementById('txt2').value + ")"+"=";
        document.getElementById('txt2').value = Math.tan( document.getElementById('txt2').value);
    }
}
function log(){
    document.getElementById('txt1').value = "log(" + document.getElementById('txt2').value + ")" + "=";
    document.getElementById('txt2').value = Math.log10(document.getElementById('txt2').value );
}
function ln(){
    document.getElementById('txt1').value = "ln(" + document.getElementById('txt2').value  + ")" + "=";
    document.getElementById('txt2').value = Math.log(document.getElementById('txt2').value );
}
function log2(){
    document.getElementById('txt1').value = "log2(" + document.getElementById('txt2').value + ")" + "=";
    document.getElementById('txt2').value = Math.log2(document.getElementById('txt2').value );
}
function pi(){
    document.getElementById('txt1').value = "π=";
    document.getElementById('txt2').value = Math.PI;
}
function e(){
    document.getElementById('txt1').value = "e=";
    document.getElementById('txt2').value = Math.E;
}
function change(){
    document.getElementById("txt2").value = document.getElementById('txt2').value * -1;
}
function fac(num){
    if(num<0){
        return -1;
    }
    else if(num==0){
        return 1;
    }
    else{
        return num*fac(num-1);
    }
}
function fact(){
    var num,result;
    num=document.getElementById('txt2').value;
    result=fac(num);
    document.getElementById('txt1').value = document.getElementById('txt2').value + "!";
    document.getElementById('txt2').value = result;
}