var checkbar = false;
var all = document.getElementById('all');
var selection = document.getElementById('selecao');

function Ative() {
    checkbar = !checkbar;
    if(checkbar) {
        selection.style.marginLeft = "-10vw";
        selection.style.animationName = "animacao";
        all.style.filter = "blur(2px)";
    } else{
        selection.style.marginLeft = "-100vw";
        selection.style.animationName = "";
        all.style.filter = "";
    }
}
function fechar() {
    if (checkbar) {
      Ative();
    }
  }
  window.addEventListener("resize", function (event) {
    if (window.innerWidth > 425 && animacao) {
      Ative();
    }
  });

  darks = false
  var OnOff = document.getElementById('OnOff')


  function DarkMode() {
    darks = !darks
    if(darks) {
        OnOff.style.justifyContent = "right"
        OnOff.style.animationName = "darkmodeactive"
    } else{
        OnOff.style.justifyContent = "left"
        OnOff.style.animationName = ""
    }
  }



  let slider =document.querySelectorAll('.slider-img');
  let prev=document.getElementById("prev");
  let next=document.getElementById("next");

  let currentSlide=0;

  function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
  }

  function showslider(){
    slider[currentSlide].classList.add('on')
  }


  function nextslider(){
    hideSlider()
    if(currentSlide == slider.length -1){
      currentSlide = 0
    }else{
      currentSlide++
    }
    showslider()
  }

  
  function prevslider(){
    hideSlider()
    if(currentSlide == 0){
      currentSlide = slider.length -1
    }else{
      currentSlide--
    }
    showslider()
  }

  next.addEventListener('click', nextslider);
prev.addEventListener('click', prevslider);