//保存文本框上一个value
var forwardValue="";
//文本框对象
var text;
//ul列表对象
var list;
//是否隐藏ul列表标记
var isHide=true;

//初始化方法
function load(){
    //获取DOM对象
    text = document.getElementById("keys");
    list = document.getElementById("possibilityKeys");
    //启动监视器
    setInterval("checkTextValue()",500);
}

//循环检测文本框内容是否改变
function checkTextValue(){
    //判断内容是否改变
    if(forwardValue != text.value){
        //内容一旦改变，清空ul列表
        list.innerHTML = "";
        //内容一旦改变，重置当前li节点
        currentli = null;
        //记录新内容
        forwardValue=text.value;
        
        //判断文本框是否为空
        if(forwardValue != ""){
            //更新匹配列表
            //这里为了演示，每次都显示10个匹配项
            for(var i=0;i<10;i++){
                //创建一个a标签
                var a = document.createElement("a");
                //设置a标签的显示内容
                //这里应该从具体的接口获取数据,但是为了方便演示，直接在输入内容后加上数字来区分
                a.innerHTML = forwardValue + i;
                //设置a标签的href属性
                //直接调用提交表单方法，参数是改a标签的文本值(显示内容)
                a.href = "javascript:listSubmit('" + (forwardValue + i) + "');";
                //给a标签添加鼠标移入事件
                a.onmouseover=onmouseover;
                //给a标签添加鼠标移出事件
                a.onmouseout=onmouseout;
                //创建一个li标签
                var li = document.createElement("li");
                //把a标签插入到li标签中
                li.appendChild(a);
                //把li标签填入ul中
                list.appendChild(li);
            }
            
            //显示ul列表
            list.style.display = "block";
        }else{
            //如果为空，隐藏ul列表
            list.style.display = "none";
        }
    }
}

//文本框失去焦点处理
function hideul(){
    //判断是否需要隐藏，在ul列表中点击鼠标时不能隐藏，隐藏了无法跳转
    if(isHide){
        //隐藏ul列表
        list.style.display = "none";
    }
}

//li中超链接鼠标移入处理
function onmouseover(){
    isHide=false;
}

//li中超链接鼠标移出事件处理
function onmouseout(){
    isHide=true;
}

//列表提交表单方法
function listSubmit(value){
    //给文本框赋值
    text.value=value;
    //手动提交表单
    document.forms[0].submit();
}

//按钮提交表单方法
function btnSubmit(){
    //加一个控制，防止非法提交
    if(text.value != ""){
        //不为空则提交表单
        document.forms[0].submit();
    }
}


