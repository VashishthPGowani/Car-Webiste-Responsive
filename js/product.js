let sldind = 1;
showSlides(sldind);

function plusSlides(n) {
  showSlides((sldind += n));
}

function currentSlide(n) {
  showSlides((sldind = n));
}

function showSlides(n) {
  let i;
  let slds = document.getElementsByClassName("mySlides");
  let tapka = document.getElementsByClassName("dot");
  if (n > slds.length) {
    sldind = 1;
  }
  if (n < 1) {
    sldind = slds.length;
  }
  for (i = 0; i < slds.length; i++) {
    slds[i].classList.add("d-none");
  }
  for (i = 0; i < tapka.length; i++) {
    tapka[i].className = tapka[i].className.replace("active", "");
  }
  slds[sldind - 1].classList.remove("d-none");
  slds[sldind - 1].classList.add("d-block");
  tapka[sldind - 1].classList.add("active");
}


$(document).ready(()=>{
  $( "#tabs" ).tabs();
})