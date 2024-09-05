
///<reference types="../@types/jquery"/>


const aboutoffset=$("#about").offset().top
const navbarHeight=$('nav').innerHeight()
$(window).on('scroll',function(){
    if ($(window).scrollTop() >aboutoffset - navbarHeight/2) {
        $('nav').css('backgroundColor','rgb(255,0,0,0.5)')
        $('.BackToTop').fadeIn(1000)
        $('.BackToTop').css('display','flex')
    }
    else{
        $('nav').css('backgroundColor','transparent')
        $('.BackToTop').css('display','none')
    }
})

$('.BackToTop').on('click',function(){
    // console.log("click");
//    $(window).scrollTop(0)
    $('html , body').animate({scrollTop:0},1000)
})

$('nav navbarSupportedContent a[href^="#"]').on('click',function(){
    const eleId=$(this).attr("href")
    const sectionOffset=$(eleId).offset().top
    $('html , body').animate({scrollTop:0},1000)
})

$('.colorBox span').eq(0).css('backgroundColor','rgb(255,0,0)')
$('.colorBox span').eq(1).css('backgroundColor','rgb(0,255,0)')
$('.colorBox span').eq(2).css('backgroundColor','rgb(0,0,255)')
$('.colorBox span').eq(3).css('backgroundColor','rgb(125,60,30)')
$('.colorBox span').eq(4).css('backgroundColor','rgb(0,80,230)')
$('.colorBox span').eq(5).css('backgroundColor','rgb(220,40,30)')


$('.ColorBoxIcon').on('click' ,function(){
    const colorBoxWidth=$('.colorBox').innerWidth()
    // open
    if($('.colorBox').css('left') == '0px'){
     $('.colorBox').animate({left: -colorBoxWidth+"px"},1000)
    }
    // close
    else{
        $('.colorBox').animate({left:"0px"},1000)
    }
//    $('.colorBox').animate({left:-colorBoxWidth+"px"},1000)
// $('.colorBox').css({'transform':'translateX(-100%)',"transition":"all 0.5s"})
   
  
})

$('.colorBox span').on('click',function(){
    const color=$(this).css('backgroundColor')
    $('h1,h2,h3,p').css('color',color)
})
