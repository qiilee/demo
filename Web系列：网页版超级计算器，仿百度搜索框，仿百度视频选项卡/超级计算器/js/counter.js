/*
作者：杨元
博客地址：http://www.cnblogs.com/iyangyuan/
说明：欢迎转载，但请尊重版权。严禁用于商业用途！
*/


//运算表达式
var accountExpression = "";
//文本框对象
var txtScreen;


//窗体加载时初始化文本框
function loadScreen(){
    txtScreen = document.getElementById("txtScreen");
    txtScreen.innerHTML="0";
}

//表达式拼接方法
function inputValue(value){
    //拼接表达式
    accountExpression += value;
    //显示在界面上
    txtScreen.innerHTML=accountExpression;
}

//表达式计算方法
function inputResult(){
    
    //取得整个表达式
    var fullExpression = accountExpression;
    //存放简单表达式
    var partExpression = "";
    
    //循环去括号
    //原理：每次取出最内层括号，最内层括号中的表达式肯定是简单表达式（无括号的表达式）
    while(fullExpression.indexOf("(")>=0){
        //获取最内层括号中的简单表达式
        partExpression = (fullExpression.split("(")[fullExpression.split("(").length-1]).split(")")[0];
        //将源表达式中的最内层括号置换成运算结果
        fullExpression = fullExpression.replace("(" + partExpression + ")",getSimpleExpressionResult(partExpression));
    }
    
    //此时整个表达式已经是简单表达式的形式，求结果即可
    txtScreen.innerHTML = getSimpleExpressionResult(fullExpression);
    //清空表达式字符串
    accountExpression = "";
}

//获取简单表达式结果
function getSimpleExpressionResult(ex){
    //左操作数
    var leftNumber = 0;
    //右操作数
    var rightNumber = 0;
    //提取操作数的正则表达式
    var regex = /[\+,\-,\*,/]/;
    //存放单个表达式，例如1+1
    var partExpression = "";
    //存放结果
    var result = 0;
    
    //先算乘法
    while(ex.indexOf("*")>=0){
        //取右操作数
        rightNumber = parseFloat(ex.split("*")[ex.split("*").length-1].split(regex)[0]);
        //取左操作数
        leftNumber = parseFloat(ex.split("*")[ex.split("*").length-2].split(regex)[ex.split("*")[ex.split("*").length-2].split(regex).length-1]);
        //拼接单个表达式
        partExpression = leftNumber + "*" + rightNumber;
        //计算单个表达式结果
        result = parseFloat(leftNumber) * parseFloat(rightNumber);
        //从源表达式中去除该单个表达式
        ex = ex.replace(partExpression,result);
    }
    //算除法
    while(ex.indexOf("/")>=0){
        //取右操作数
        rightNumber = parseFloat(ex.split("/")[ex.split("/").length-1].split(regex)[0]);
        //取左操作数
        leftNumber = parseFloat(ex.split("/")[ex.split("/").length-2].split(regex)[ex.split("/")[ex.split("/").length-2].split(regex).length-1]);
        //拼接单个表达式
        partExpression = leftNumber + "/" + rightNumber;
        //计算单个表达式结果
        result = parseFloat(leftNumber) / parseFloat(rightNumber);
        //从源表达式中去除该单个表达式
        ex = ex.replace(partExpression,result);
    }
    //加法和减法比较特殊，采用从左至右的顺序解析
    
    //提取运算符的正则表达式
    var regexg = /[\+,\-,\*,/]/g;
    //存放操作数的数组
    var numberArray;
    //存放运算符的数组
    var operatorArray;
    
    //获取所有操作数
    numberArray = ex.split(regex);
    //获取所有运算符
    operatorArray = ex.match(regexg);
    
    //遍历操作数和运算符进行运算
    result = parseFloat(numberArray[0]);
    for(var i=1;i<numberArray.length;i++){
        //判断是什么操作
        if(operatorArray[i-1].toString() == "+"){
            result += parseFloat(numberArray[i]);
        }else if(operatorArray[i-1].toString() == "-"){           
            result -= parseFloat(numberArray[i]);
        }
    }
    
    //返回最后结果
    return result;
}


//退格方法
function inputC(){
    if(accountExpression.length>0){
        //消除最后一个字符
        accountExpression = accountExpression.substring(0,accountExpression.length-1);
        //显示在界面上
        txtScreen.innerHTML=accountExpression;
    }
}

//清除方法
function inputCE(){
    accountExpression = "";
    txtScreen.innerHTML="0";
}