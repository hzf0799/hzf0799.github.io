
//自适应
(function(designWidth, maxWidth) {
    var doc = document,
    win = window,
    docEl = doc.documentElement,
    remStyle = document.createElement("style"),
    tid;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        maxWidth = maxWidth || 540;
        width>maxWidth && (width=maxWidth);
        var rem = width * 100 / designWidth;
        remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
    }

    if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(remStyle);
    } else {
        var wrap = doc.createElement("div");
        wrap.appendChild(remStyle);
        doc.write(wrap.innerHTML);
        wrap = null;
    }
//标签页
function openCity(evt,cityName){
    return function(){
    var i;
    var tabcontent;
    var tablinks;
    tabcontent=document.getElementsByClassName("tabcontent");
    for(i=0;i<tabcontent.length;i++)
        {
            tabcontent[i].style.display="none";
        }
   tablinks=document.getElementsByClassName("tablink");
        for(i=0;i<tablinks.length;i++)
        {
            tablinks[i].className=tablinks[i].className.replace(" active2", "");
        }
    document.getElementById(cityName).style.display="block";
    var s=document.getElementById(evt).className +=" active2";
    //alert(s);
     window.scrollTo(0,0);
    }

}
document.getElementById("startbtn").onclick=openCity("startbtn","yi");//Event等于该元素当前状态
document.getElementById("twobtn").onclick=openCity("twobtn","er");
document.getElementById("startbtn").click();
//弹窗
var modal=document.getElementById("myModal");
document.getElementById("myBtn").onclick=function()
{
    modal.style.display="block";
}
document.getElementById("close").onclick=function(){
    modal.style.display="none";
}
//点击其他地方,关闭窗口
window.onclick=function(event){
    if(event.target==modal){
        modal.style.display="none";
    }
}
document.getElementById("qrk").onclick=function(){             //确认框
    var r=confirm("按下按钮");
    var x;
    if(r==true)
        {
            x="确认";
        }
    else
    {
        x="取消";
    }
    document.getElementById("xxx").innerHTML=x; 
}
//侧方框
document.getElementById("openNav").onclick=function()
{
    document.getElementById("mySidenav").style.display="block";
    document.getElementById("body1").style.marginLeft="30%";
    
}
document.getElementById("closeNav").onclick=function()
{
    document.getElementById("mySidenav").style.display="none";
    document.getElementById("body1").style.marginLeft="0";
}
//轮播
var sIndex=1;
showSlides(sIndex);
document.getElementById("prev").onclick=plusSlides(-1);
document.getElementById("next").onclick=plusSlides(1);
document.getElementById("dot1").onclick=currentSlide(1);
document.getElementById("dot2").onclick=currentSlide(2);
document.getElementById("dot3").onclick=currentSlide(3);
function showSlides(n)
{
    var i;
    var slides=document.getElementsByClassName("mySlides");
    var dots=document.getElementsByClassName("dot");
    if(n>slides.length)  //实现到最大值时跳回最小值
        {
            sIndex=1;
        }
    if(n<1)
    {
        sIndex=slides.length;
    }
    for(i=0;i<slides.length;i++)//全部隐藏
        {
            slides[i].style.display="none";
        }
    for(i=0;i<dots.length;i++)
        {
           dots[i].className=dots[i].className.replace("active","");
        }
    slides[sIndex-1].style.display="block";
    dots[sIndex-1].className+=" active";
}
function plusSlides(n){
    return function(){showSlides(sIndex+=n);  //闭包 用来返回出来的是函数
                     }
}
function currentSlide(n) {
    return function(){showSlides(sIndex=n);
                     }
}
document.getElementById("lb1").onmouseover=function(){
    clearInterval(lb);
}
document.getElementById("lb1").onmouseout=function(){
    lb=setInterval(plusSlides(1),3000);
}

var lb=setInterval(plusSlides(1),3000);
//百度搜索
            sstxt= document.getElementById("text");  
            ssul = document.querySelector("#search");  //静态的 不会改变数据
            ssli = document.getElementsByClassName("li1");  
            sstxt.onkeyup = function(){  
                ssul.style.display = sstxt.value?"block":"none";  /*三目运算符,如果值部位空,则block。*/
                var ssc = document.createElement("script");  /*创建一个script标签*/
                ssc.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+sstxt.value+"&cb=ssjson";
                /*src值引入百度的url,输入的内容连接到url,运行方法*/
                document.body.appendChild(ssc);
                /*将创建好的script标签元素放入body中*/
                
                
                /*按下回车根据input值跳转页面*/
                if(event.keyCode==13){
                    /*将百度作为连接,传入input的值*/
                    window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+sstxt.value
                }
            }
            
            var count = 0;
            var search = 0;
            var arr = ssul.children; /*获取ul下的所有li*/
            function ssjson(json){
                var jsonLength = 0;  /*json长度的初始值*/
                for(var x in json.s){   /*将循环的次数变成json的长度*/
                    jsonLength++;　　　　　
                }
                for(var i=0;i<ssli.length;i++){
                    if(jsonLength==0){  /*如果遍历出的长度等于0,li的值为空*/
                        arr[i].innerHTML = null;   
                    }else{
                        if(json.s[i]!=null){/*如果json[i]的值不等于空,则将它的值放入li中*/
                            arr[i].innerHTML = json.s[i];
                        }
                    }
                }
                if(count==ssli.length-1){
                    count=0;
                    search=0;
                }
                count++;
                search++;
            }
            
            /*单击li中的值显示在input框中*/
            function iptShow(thisId){
                sstxt.value = arr[thisId].innerHTML;
                window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+sstxt.value
            }
            /*单击body中的任意地方隐藏li*/
            document.body.onclick = function(){
                ssul.style.display = "none";
            }
        
            /*单击百度btn的时候触发,并跳到新的连接*/
            var btn = document.querySelector("#btn");
            btn.onclick = function(){
                /*获取当前input的值*/
                var sstxt = document.getElementById("text").value;
                /*将百度作为连接,传入input的值,并跳入新的页面*/
                window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+sstxt
            }  
            
