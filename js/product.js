let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dotts = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("d-none");
  }
  for (i = 0; i < dotts.length; i++) {
    dotts[i].className = dotts[i].className.replace("active", "");
  }
  slides[slideIndex - 1].classList.remove("d-none");
  slides[slideIndex - 1].classList.add("d-block");
  dotts[slideIndex - 1].classList.add("active");
}
