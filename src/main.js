
const database = [{
    'paleta_de_cores': {
        "azul_escuro": '5c5bff',
        "azul_claro": '5bacff',
    },
    'imagens': {
        "personagem": "../images/personagem.jpg",
        "personagem2": "../images/personagem-pixel-art.png",
        "eu_ghibli": "url",
        "minecraft": "url",
        "greninja": "url"
    },
    'sound': {
      "pig": ["../sounds/Pig_idle1.ogg","../sounds/Pig_idle2.oga","../sounds/Pig_death.oga"],
    },
    'certificados': [
      {
        'empresa': "Curso em Vídeo",
        'nome': "Hardawe",
        'hora': "20h",
        'imagem_pdf': "./images/Ruan-Amorim-De-Mendonca-Hardware-20-Horas-Certificado-Curso-em-Video-1.jpg",
        'logo': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWA7znkFQhQHjz5rdJD0pfSzEnmYdezaqxQ&s",
        "pdf": "../pdf/Ruan-Amorim-De-Mendonca-Hardware-20-Horas-Certificado-Curso-em-Video.pdf",
      },
      {
        'empresa': "Curso em Vídeo",
        'nome': "Bases Numéricas",
        'hora': "20h",
        'imagem_pdf': "./images/Ruan-Amorim-De-Mendonca-Bases-Numericas-20-Horas-Certificado-Curso-em-Video-1.jpg",
        'logo': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWA7znkFQhQHjz5rdJD0pfSzEnmYdezaqxQ&s",
        "pdf": "../pdf/Ruan-Amorim-De-Mendonca-Bases-Numericas-20-Horas-Certificado-Curso-em-Video.pdf",
      },
      {
        'empresa': "Curso em Vídeo",
        'nome': "Algoritimos e logíca de progamação",
        'hora': "40h",
        'imagem_pdf': "./images/Ruan-Amorim-De-Mendonca-Algoritmos-e-Logica-de-Programacao-40-Horas-Certificado-Curso-em-Video-1.jpg",
        'logo': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWA7znkFQhQHjz5rdJD0pfSzEnmYdezaqxQ&s",
        "pdf": "../pdf/Ruan-Amorim-De-Mendonca-Algoritmos-e-Logica-de-Programacao-40-Horas-Certificado-Curso-em-Video.pdf",
      },
      {
        'empresa': "Curso em Vídeo",
        'nome': "Javascript",
        'hora': "40h",
        'imagem_pdf': "./images/Ruan-Amorim-De-Mendonca-Javascript-40-Horas-Certificado-Curso-em-Video-1.jpg",
        'logo': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWA7znkFQhQHjz5rdJD0pfSzEnmYdezaqxQ&s",
        "pdf": "../pdf/Ruan-Amorim-De-Mendonca-Javascript-40-Horas-Certificado-Curso-em-Video.pdf",
      },
      {
        'empresa': "Curso em Vídeo",
        'nome': "Wordpress",
        'hora': "40h",
        'imagem_pdf': "./images/Ruan-Amorim-De-Mendonca-WordPress-Modulo-1-8211-Criando-um-site-do-zero-40-Horas-Certificado-Curso-e-1.jpg",
        'logo': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWA7znkFQhQHjz5rdJD0pfSzEnmYdezaqxQ&s",
        "pdf": "../pdf/Ruan-Amorim-De-Mendonca-WordPress-Modulo-1-8211-Criando-um-site-do-zero-40-Horas-Certificado-Curso-em-Video.pdf",
      },
      {
        'empresa': "Curso em Vídeo",
        'nome': "HTML5 e CSS3",
        'hora': "40h",
        'imagem_pdf': "./images/Ruan-Amorim-De-Mendonca-Curso-HTML5-e-CSS3-modulo-3-de-5-40-HORAS-Certificado-Curso-em-Video-1.jpg",
        'logo': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWA7znkFQhQHjz5rdJD0pfSzEnmYdezaqxQ&s",
        "pdf": "../pdf/Ruan-Amorim-De-Mendonca-Curso-HTML5-e-CSS3-modulo-3-de-5-40-HORAS-Certificado-Curso-em-Video.pdf",
      },
      {
        'empresa': "Fundação Bradesco",
        'nome': "Python Básico",
        'hora': "18h",
        'imagem_pdf': "./images/Python básico-1.jpg",
        'logo': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-cDGahqJYzDNfOU3dvHnyc31cGgzqdJX32o_eOKma1A&s",
        "pdf": "../pdf/Python básico.pdf",
      },
      {
        'empresa': "Fundação Bradesco",
        'nome': "Fundamentos do Design Gráfico",
        'hora': "06h",
        'imagem_pdf': "./images/Fundamentos do design gráfico-1.jpg",
        'logo': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-cDGahqJYzDNfOU3dvHnyc31cGgzqdJX32o_eOKma1A&s",
        "pdf": "../pdf/Fundamentos do design gráfico.pdf",
      },
      {
        'empresa': "Fundação Bradesco",
        'nome': "Desenvolvimento orientado a objetos",
        'hora': "10h",
        'imagem_pdf': "./images/Desenvolvimento orientado a objetos utilizando a linguagem python-1.jpg",
        'logo': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-cDGahqJYzDNfOU3dvHnyc31cGgzqdJX32o_eOKma1A&s",
        "pdf": "../pdf/Desenvolvimento orientado a objetos utilizando a linguagem python.pdf",
      },
      {
        'empresa': "Fundação Bradesco",
        'nome': "Python e estrutura de dados",
        'hora': "10h",
        'imagem_pdf': "./images/Desenvolvendo um projeto compleyo python com estruturas de dados-1.jpg",
        'logo': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-cDGahqJYzDNfOU3dvHnyc31cGgzqdJX32o_eOKma1A&s",
        "pdf": "../pdf/Desenvolvendo um projeto compleyo python com estruturas de dados.pdf",
      },
    ],
}];

/* HOUVER DA IMAGEM NA HOME */
const personaHover = () => {
  let personagem = document.getElementById("circle_home2");
  let mensagem = document.getElementById("hello_image");
  let circle_persona = document.getElementById("circle_home3");

  circle_persona.addEventListener("mouseenter", () => {
  
    personagem.style.backgroundImage = `url(${database[0].imagens.personagem2})`;
    mensagem.style.opacity = 1;
  })
  circle_persona.addEventListener("mouseleave", () => {
  
    personagem.style.backgroundImage = `url(${database[0].imagens.personagem})`;
    mensagem.style.opacity = 0;
  })
}

const arrowHover = () => {
  let arrowIconLeft = document.getElementById("arrowIconLeft");
  let backIconLeft = document.getElementById("arrow_left");
  
  let arrowIconRight = document.getElementById("arrowIconRight");
  let backIconRight = document.getElementById("arrow_right");

  arrowIconLeft.addEventListener("mouseenter", () => {
    arrowIconLeft.style.color = "black";
    backIconLeft.style.background = "transparent";
    backIconLeft.style.border = "solid 1px #5BACFF";
  });
  arrowIconLeft.addEventListener("mouseleave", () => {
    arrowIconLeft.style.color = "whitesmoke";
    backIconLeft.style.background = "linear-gradient(to left, #5BACFF, #5697DA)";
    backIconLeft.style.border = "none";
  });

  arrowIconRight.addEventListener("mouseenter", () => {
    arrowIconRight.style.color = "black";
    backIconRight.style.background = "transparent";
    backIconRight.style.border = "solid 1px #5BACFF";
  });
  arrowIconRight.addEventListener("mouseleave", () => {
    arrowIconRight.style.color = "whitesmoke";
    backIconRight.style.background = "linear-gradient(to left, #5BACFF, #5697DA)";
    backIconRight.style.border = "none";
  });
}
const arrowScroll = (direcao) => {
  const container = document.getElementById("container_lista_certificados");
  let dive = document.getElementById("dive");

  const inicio = container.scrollLeft;
  const distancia = dive.offsetWidth; // tamanho do "page"
  const fim = direcao === 0 
    ? inicio + distancia 
    : inicio - distancia;

  const duracao = 600;
  let start = null;

  function animar(tempo) {
    if (!start) start = tempo;

    const progresso = Math.min((tempo - start) / duracao, 1);

    // mesmo easing que você já usa
    const ease = 1 - Math.pow(1 - progresso, 3);

    container.scrollLeft = inicio + (fim - inicio) * ease;

    if (progresso < 1) {
      requestAnimationFrame(animar);
    }
  }

  requestAnimationFrame(animar);
};
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
  const alturaTela = visualViewport.height;
  const navbar = document.getElementById("navbar");
  const ul = document.getElementById("list_ul");

  if (vetorAtual < alturaTela) {
    iconUpdate(1);
    ul.style.flexDirection = "unset";
    navbar.style.width = "45%";
    navbar.style.height = "3vh";
    navbar.style.left = "50%";
    navbar.style.top = "3%",
    navbar.style.transform = "translate(-50%)";
    navbar.style.backgroundColor = "rgba(236, 236, 236, 0.19)";
  } else if (vetorAtual >= alturaTela * 3) {
    iconUpdate(5);
    ul.style.flexDirection = "column";
    navbar.style.width = "3vw";
    navbar.style.height = "60vh";
    navbar.style.left = "1%";
    navbar.style.top = "50%",
    navbar.style.transform = "translate(0,-50%)";
    navbar.style.backgroundColor = "whitesmoke";
  } else if (vetorAtual >= alturaTela * 2) {
    iconUpdate(3);
    ul.style.flexDirection = "unset";
    navbar.style.width = "28%";
    navbar.style.height = "3vh";
    navbar.style.left = "1%";
    navbar.style.top = "3%",
    navbar.style.transform = "translate(0)";
    navbar.style.backgroundColor = "whitesmoke";
  } else if (vetorAtual >= alturaTela) {
    iconUpdate(2);
    ul.style.flexDirection = "unset";
    navbar.style.width = "45%";
    navbar.style.height = "3vh";
    navbar.style.left = "50%";
    navbar.style.top = "3%",
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
  const lugar = document.getElementById(idLugar);

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

/* LOADING CERTIFICADOS */

var counterTypePast = 0;
const typePast = ["pasta", "green_pasta", "orange_pasta"];

function showCertificado() {
  const listSize = database[0].certificados.length;

    if (listSize / 6 <= 1) {
      loadingCertificado(0,listSize);
    } else if (listSize / 6 <= 2) {
      loadingCertificado(0,listSize);
      loadingCertificado(6,listSize);
    } else if (listSize / 6 <= 3) {
      loadingCertificado(0,listSize);
      loadingCertificado(6,listSize);
      loadingCertificado(13,listSize);
    } else {
      loadingCertificado(0,listSize);
      loadingCertificado(6,listSize);
      loadingCertificado(12,listSize);
      loadingCertificado(17,listSize);
    }

}

const loadingCertificado = (min, max) => {
  let container_lista_certificados = document.getElementById("container_lista_certificados");
  let div = document.createElement("div");
  div.id = "dive"
  div.style.display = "grid";
  div.style.gridTemplateColumns = "repeat(3, 1fr)";
  div.style.gridTemplateRows = "repeat(2, auto)";
  div.style.gap = "auto";

  for (let x = min; x < Math.min(min + 6, max); x++) {
    let pasta = document.createElement("div");
    let pasta_parte_one = document.createElement("div");
    let pasta_parte_two = document.createElement("div");
    let pasta_parte_tree = document.createElement("div");

    let logo_empresa = document.createElement("img");
    let nome_empresa = document.createElement("p");

    let image_pdf = document.createElement("img");
    let container_info_certidicado = document.createElement("div");
    let titulo_curso = document.createElement("h3");
    let carga_horaria = document.createElement("p");

    let botao_certificado = document.createElement("div");
    botao_certificado.id = `code${x}`;
    botao_certificado.addEventListener("click", () => {
      window.open(`${database[0].certificados[x].pdf}`, "_blank")
    });
    
    pasta.className = `pasta ${CounterTypePast(database[0].certificados[x].empresa)}`;
    pasta_parte_one.className = "pasta_parte_one";
    pasta_parte_two.className = "pasta_parte_two";
    pasta_parte_tree.className = "pasta_parte_tree";
    // parte one
    logo_empresa.src = database[0].certificados[x].logo;
    logo_empresa.alt = `logo da empresa ${database[0].certificados[x].empresa}`;
    nome_empresa.innerText = database[0].certificados[x].empresa;
    // parte two
    image_pdf.className = "image_pdf";
    image_pdf.src = database[0].certificados[x].imagem_pdf;
    container_info_certidicado.className = "container_info_certidicado";
    titulo_curso.className = "titulo_curso";
    titulo_curso.innerText = database[0].certificados[x].nome;
    carga_horaria.className = "carga_horaria";
    carga_horaria.innerText = `Carga Horária: ${database[0].certificados[x].hora}`;

    //parte três
    botao_certificado.className = "botao_certificado";
    // Adicionando aos containers
    pasta_parte_one.append(logo_empresa, nome_empresa);

    container_info_certidicado.append(titulo_curso,carga_horaria);
    pasta_parte_two.append(image_pdf, container_info_certidicado);

    pasta_parte_tree.append(botao_certificado);
    pasta.append(pasta_parte_one, pasta_parte_two, pasta_parte_tree)
    div.appendChild(pasta);
  }
  container_lista_certificados.appendChild(div);
}
// Essa função conta os tipos de pastas mudando o padrão de cores de forma linear
const CounterTypePast = (empresa) => {
  if (empresa == "Curso em Vídeo") {
    counterTypePast = counterTypePast + 1;
    return typePast[0];
  } else if (empresa == "Fundação Bradesco") {
    counterTypePast = counterTypePast + 1;
    return typePast[2];
  } else {
    counterTypePast = 0;
    return typePast[1];
  }
}

personaHover();
arrowHover();
showCertificado();