const frases = [
    "Eres el amor de mi vidita.",
    "Contigo, todo es mejor.",
    "Tu, yo y la lenga para toda la vida.",
    "Gracias por hacerme tan feliz."
  ];
  
  const fotos = [
    "foto1.jfif",
    "foto2.jfif",
    "foto3.jfif",
    "foto4.jfif"
  ];
  
  let indice = 0;
  let desbloqueado = false;
  
  function mostrarFrase() {
    desbloqueado = true;
  
    document.getElementById("frase-romantica").style.display = "block";
    document.querySelector(".botones-frases").style.display = "block";
    document.querySelector("button[onclick='mostrarFrase()']").style.display = "none";
  
    actualizarContenido();
  }
  
  function siguienteFrase() {
    if (!desbloqueado) return;
    indice = (indice + 1) % frases.length;
    actualizarContenido();
  }
  
  function anteriorFrase() {
    if (!desbloqueado) return;
    indice = (indice - 1 + frases.length) % frases.length;
    actualizarContenido();
  }
  
  function actualizarContenido() {
    const frase = document.getElementById("frase-romantica");
    const imagen = document.querySelector(".foto-principal");
  
    // Desvanece
    imagen.classList.add("foto-fade-out");
  
    setTimeout(() => {
      frase.textContent = frases[indice];
      imagen.src = fotos[indice];
    }, 300);
  
    setTimeout(() => {
      imagen.classList.remove("foto-fade-out");
    }, 500);
  }
  
  // Carga inicial con imagen de signo de interrogación
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".foto-principal").src = "secreto.png";
  });
  