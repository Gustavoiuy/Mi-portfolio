
let menuVisible = false;



function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;

    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    // Ocultar el menu una vez que se ha seleccionado una opcion
    document.getElementById("nav").classList="";
    menuVisible = false;
}


// Efecto aparición suave en los elementos del currículum
const items = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

items.forEach((item) => observer.observe(item));




// Ejemplo: Validar y simular envío
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  alert("¡Gracias por contactarme! Tu mensaje ha sido enviado correctamente.");
  e.target.reset();
});
