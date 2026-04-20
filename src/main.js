
const database = [{
    'paleta_de_cores': {
        "azul_escuro": '5c5bff',
        "azul_claro": '5bacff',
    },
    'imagens': {
        "personagem": "./images/personagem.jpg",
        "personagem2": "./images/personagem-pixel-art.png",
        "eu_ghibli": "url",
        "minecraft": "url",
        "greninja": "url",
    },
}];

/* HOUVER DA IMAGEM NA HOME */
const personaHover = () => {
  let personagem = document.getElementById("circle_home2");
  let circle_persona = document.getElementById("circle_home3");

  circle_persona.addEventListener("mouseenter", () => {
  
    personagem.style.backgroundImage = "url(."+ database[0].imagens.personagem2+")";
  })
  circle_persona.addEventListener("mouseleave", () => {
  
    personagem.style.backgroundImage = "url(."+ database[0].imagens.personagem+")";
  })
}


/* ANIMAÇÃO DAS LETRAS NA HOME */
window.onload = () => {
  const elemento = document.getElementById("texto01home");
  
  function envolverTexto(node) {
    if (node.nodeType === 3) { // texto puro
      return node.textContent
        .split("")
        .map((letra, i) => {
          if (letra === " ") return " ";
          return `<span style="animation-delay:${i * 0.05}s">${letra}</span>`;
          })
        .join("");
    } else {
      return node.outerHTML;
    }
  }
  
  elemento.innerHTML = Array.from(elemento.childNodes)
    .map(envolverTexto)
    .join("");
};

personaHover();