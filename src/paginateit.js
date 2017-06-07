$(document).ready(function(){
 	var $i = 0;
	$(".page").each(function(){
  	$i++;
    
    if($i > 3)
    {
    	$(this).hide();
    } else {
    	$(this).addClass('open');
      $(this).removeClass('page');
    }
  });
  $('.next-btn').click(function(){
  	next();
  });
  
  $('.prev-btn').click(function(){
  	prev();
  });
});

function next()
{
   var $nextone = $(".open").next('.page');
   if($nextone.length)
   {
     $($('.open')[0]).hide();
     $($('.open')[0]).addClass('page');
     $($('.open')[0]).removeClass('open');
     $($nextone).show();
     $($nextone).addClass('open');
     $($nextone).removeClass('page');
   }
}

function prev()
{
   var $prevone = $(".open").prev('.page');
   if($prevone.length)
   {
   
     $($('.open').last()).hide();
     $($('.open').last()).addClass('page');
     $($('.open').last()).removeClass('open');
     
    
     $($prevone).show();
     $($prevone).removeClass('page');
     $($prevone).addClass('open');
   }
}