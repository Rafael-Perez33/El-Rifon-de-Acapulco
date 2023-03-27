let slideActual = 0;
const slides = document.getElementsByClassName("slide");
const botonAnterior = document.querySelector(".anterior");
const botonSiguiente = document.querySelector(".siguiente");

function mostrarSlide(slide) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("mostrar");
  }
  slides[slide].classList.add("mostrar");
}

function siguienteSlide() {
  slideActual++;
  if (slideActual >= slides.length) {
    slideActual = 0;
  }
  mostrarSlide(slideActual);
}

function anteriorSlide() {
  slideActual--;
  if (slideActual < 0) {
    slideActual = slides.length - 1;
  }
  mostrarSlide(slideActual);
}

botonSiguiente.addEventListener("click", siguienteSlide);
botonAnterior.addEventListener("click", anteriorSlide);

mostrarSlide(slideActual);

const botonComprar = document.querySelector('.comprar');

botonComprar.addEventListener('click', () => {
  window.location.href = 'sorteo.html';
});
