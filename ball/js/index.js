

$(".icon_down").click(function(){
   $("li:nth-child(n+4)").show();
   $(".icon_up").css("display","block");
   $(".icon_down").css("display","none");
  });
$(".icon_up").click(function(){
   $("li:nth-child(n+4)").hide();
   $(".icon_up").css("display","none");
   $(".icon_down").css("display","block");
  });

$(".books li").click(function(){
    let selectValue = $(this).find(".books_time").text(); 
    console.log(selectValue)
    location.href = "books.html?id=selectValue" ;

  });