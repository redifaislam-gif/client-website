
  var slide = document.getElementById("slide");
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  
  let x =0;
  prev.onclick = function(){
      if(x > "-10500"){
        x = x -320;
        slide.style.top = x + "px";
      }

      next.onclick = function(){
        if(x < 0){
          x = x + 320;
          slide.style.top = x + "px";
        }
    
  
  }
  }



	function openNav1() {
	  
	  document.getElementById("myNav1").style.width="300px";
  }
  
  
  function closeNav1() {
	  
	  document.getElementById("myNav1").style.width="0%";
  }



