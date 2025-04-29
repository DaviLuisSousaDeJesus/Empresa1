var checkbar = false;
var all = document.getElementById('all');
var selection = document.getElementById('selecao');

function Ative() {
    checkbar = !checkbar;
    if(checkbar) {
        selection.style.marginLeft = "0vw";
        selection.style.padding = "1em"
        selection.style.animationName = "animacao";
        all.style.filter = "blur(2px)";
    } else{
        selection.style.marginLeft = "-100vw";
        selection.style.animationName = "";
        all.style.filter = "";
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
  var Circle = document.getElementById('circle')


  function DarkMode() {
    darks = !darks
    if(darks) {
        OnOff.style.justifyContent = "right"
        OnOff.style.animationName = "darkmodeactive"
        document.body.classList.add('DarkMode')
        OnOff.style.backgroundColor = "#2F2F2F"
        Circle.style.backgroundColor = "white"
        document.querySelectorAll('.navbar a').forEach(link => {
          link.classList.add('preto-mode');
        });
        document.getElementById('retangle').style.backgroundColor = 'black'
    } else{
        OnOff.style.justifyContent = "left"
        OnOff.style.animationName = ""
        document.body.classList.remove('DarkMode')
        OnOff.style.backgroundColor = "white"
        Circle.style.backgroundColor = "#2F2F2F"
        document.querySelectorAll('.navbar a').forEach(link => {
          link.classList.remove('preto-mode');
        });
        document.getElementById('retangle').style.backgroundColor = 'white'
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