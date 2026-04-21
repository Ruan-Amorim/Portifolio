
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
    'sound': {
      "pig": ["../sounds/Pig_idle1.ogg","../sounds/Pig_idle2.oga","../sounds/Pig_death.oga"],
    }
}];

/* HOUVER DA IMAGEM NA HOME */
const personaHover = () => {
  let personagem = document.getElementById("circle_home2");
  let mensagem = document.getElementById("hello_image");
  let circle_persona = document.getElementById("circle_home3");

  circle_persona.addEventListener("mouseenter", () => {
  
    personagem.style.backgroundImage = "url(."+ database[0].imagens.personagem2+")";
    mensagem.style.opacity = 1;
  })
  circle_persona.addEventListener("mouseleave", () => {
  
    personagem.style.backgroundImage = "url(."+ database[0].imagens.personagem+")";
    mensagem.style.opacity = 0;
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

/* ELEMENTO VISIVEL */
window.addEventListener("scroll", () => {
  const vetorAtual = window.scrollY;
  const alturaTela = screen.height * 0.80;
  const navbar = document.getElementById("navbar");

  if (vetorAtual < alturaTela * 0.80) {
    iconUpdate(1);
    navbar.style.width = "45%";
    navbar.style.left = "50%";
    navbar.style.transform = "translate(-50%)";
    navbar.style.backgroundColor = "rgba(236, 236, 236, 0.19)";
  } else if (vetorAtual >= alturaTela * 2) {
    iconUpdate(3);
    navbar.style.width = "28%";
    navbar.style.left = "1%";
    navbar.style.transform = "translate(0)";
    navbar.style.backgroundColor = "whitesmoke";
  } else if (vetorAtual >= alturaTela) {
    iconUpdate(2);
    navbar.style.width = "45%";
    navbar.style.left = "50%";
    navbar.style.transform = "translate(-50%)";
    navbar.style.backgroundColor = "rgba(236, 236, 236, 0.19)";
  } else {
    
  }
});

function iconUpdate(icon) {
  for (let x = 0; x < 6; x++) {
    let number = x + 1;
    let icone = document.getElementById(`icon${String(number)}`);
    icone.style.color = "#5C5BFF"
  }
  let icone = document.getElementById(`icon${String(icon)}`);
  icone.style.color = "#5CBAFF";
}
/* SCROLL */

const scrollSmoth = (idLugar) => {
  const lugar = document.getElementById(idLugar)

  const inicio = window.scrollY;
  const fim = lugar.offsetTop;
  const duracao = 600;
  
  let start = null;
  
  function animar(tempo) {
    if (!start) start = tempo;
  
    const progresso = Math.min((tempo - start) / duracao, 1);
    const ease = 1 - Math.pow(1 - progresso, 3);
  
    window.scrollTo(0, inicio + (fim - inicio) * ease);
  
    if (progresso < 1) {
      requestAnimationFrame(animar);
    }
  }
  
  requestAnimationFrame(animar);

}
/* FUNÇÃO DE DANO */

var hit = 0;
function damage(persona) {
  const steve_damage = new Audio("../sounds/classic_hurt.mp3");
  const image = document.getElementById("image_about");
  image.classList.toggle("damage");

  setTimeout(() => {
    image.classList.remove("damage")
  }, 200);
  switch (persona) {
    case 'pig':  
    const pig_hurt = new Audio(database[0].sound.pig[hit]);
    pig_hurt.play();
    if (hit == 2) {
      hit = 0;
    } else {
      hit = hit + 1;
    }
      break;
    case 'steve':
      steve_damage.play();
      break;

    default:
      break;
  }
}

personaHover();