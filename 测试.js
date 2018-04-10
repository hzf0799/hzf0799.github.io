function qrkdj(){             //确认框
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
function writeText(txt)      //划过图片介绍
{
    document.getElementById("desc").innerHTML=txt;
}
function startTime(){        //实时时间
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById("txttime").innerHTML=h+":"+m+":"+s;
    t=setTimeout(function(){startTime()},500);
}
function checkTime(i){       //时间小于10前面加个0
    if(i<10){ 
        i="0"+i;
    }
    return i;
}
function person(name,age)    //对象的使用
{
    this.name=name;
    this.age=age;
}

my=new person("jon",16);
document.getElementById("dx").innerHTML=my.name+"&nbspis&nbsp"+my.age;
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
document.getElementById("txtSs").onkeyup=function()
{
    var input=document.getElementById("txtSs");
    var filter=input.value.toUpperCase();/*将小写转为大写*/
    var ul=document.getElementById("ulSs");
    var li=ul.getElementsByTagName("li");
    for(i=0;i<li.length;i++)
        {
            sn=li[i].getElementsByTagName("span")[0];/*截取li下第一个*/
            if(sn.innerHTML.toUpperCase().indexOf(filter)>-1)/*首次出现在0*/
                {
                    if(filter!==""){
                    li[i].style.display="block";
                    }
                    else
                    {
                         li[i].style.display="none";
                    }
                }
  
            else
            {
                li[i].style.display="none";
            }
        }
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
//滚动
document.getElementById("gdbtn").onclick=function(){
    window.scrollTo(0,100);
}
//选项卡

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
    }

}
document.getElementById("startbtn").onclick=openCity("startbtn","yi");//Event等于该元素当前状态
document.getElementById("erbtn").onclick=openCity("erbtn","er");
document.getElementById("sanbtn").onclick=openCity("sanbtn","san");
document.getElementById("startbtn").click();
//侧边栏
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