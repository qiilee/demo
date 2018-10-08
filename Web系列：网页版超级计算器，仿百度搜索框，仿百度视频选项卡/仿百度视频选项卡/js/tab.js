function changeTable(currentItem){
    //根据id获取属于选项卡的ul节点的子节点
    var tabItems = document.getElementById("tab_items").childNodes;
    //获取内容元素
    var content = document.getElementById("tab_content");
    
    //注意：不要在js中直接写CSS代码，要先把样式在CSS文件中写好，然后去改变元素的样式名称。
    
    //设置所有节点的样式为“未选中”
    for(var i=0;i<tabItems.length;i++){
        //判断是否是li节点
        if(tabItems[i].nodeName == "LI"){
            //设置节点的样式为“未选中”
            //liComm unselectedli是两个样式，这里同时设置了两个样式
            tabItems[i].className="liComm unselectedli";
        }
    }
    
    //设置当前节点样式为选中
    currentItem.className="liComm selectedli";
    
    //修改内容
    content.innerHTML = currentItem.firstChild.firstChild.firstChild.nodeValue;
}