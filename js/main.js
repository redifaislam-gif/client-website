$(document).ready(function(){
	
	
//stikey
	$(".js--clint-section").waypoint(function(direction){
		
	if(direction== "down"){
		$(".menu-section").addClass("stikey");
	}else{
	$(".menu-section").removeClass("stikey");	
	}	
		
	});
	//protfolio
	var mixer=mixitup('.container');
	
	
	$(".hellow-circle").circleProgress();	
		
	

$(".hellow-circle").circleProgress();	
	
	
	
	
	
$('.owl-carosel').owlCarousel();	
	
});

$(document).ready(function(){
	
	$(".logo").click(function(){
		
			$(this).slideIn();
		
	});	
		
});

	

 function openNav() {
	  
	  document.getElementById("myNav").style.width="30%";
  }
  
  
  function closeNav() {
	  
	  document.getElementById("myNav").style.width="0%";
  }
  


	function openNav1() {
	  
	  document.getElementById("myNav1").style.width="90%";
  }
  
  
  function closeNav1() {
	  
	  document.getElementById("myNav1").style.width="0%";
  }
  

 

