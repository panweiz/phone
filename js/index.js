$(".i5").click(function(){
  $(".phone").css("width","");
  $(".screen").css("height","");
  $(".phonename").text($(this).text());
});
$(".i6").click(function(){
  $(".phone").css("width","260");
  $(".screen").css("height","370");
  $(".phonename").text($(this).text());
});
$(".i6s").click(function(){
  $(".phone").css("width","270");
  $(".screen").css("height","390");
  $(".phonename").text($(this).text());
});

var page=0;
$(".screen").click(function(){
  page+=1;
  if (page>2){
    page=0;
  }
  $(".pages").css("left","-"+page*100+"%");
});

$(".button").click(function(){
  page=0;
  $(".pages").css("left","-"+page*100+"%");
});

$(".wiggle").click(function(){
  wiggletime=0
});

var wiggletime=21;
setInterval(function(){
  if (wiggletime<=20){
    wiggletime+=1;
    console.log(wiggletime);
    if (wiggletime%2==0){
      $(".phone").css("left","-50px");
    }else{
      $(".phone").css("left","50px");
     }
    if (wiggletime==21){
      $(".phone").css("left","");
    }
  }
},60);