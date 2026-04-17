
database = [{
    'paleta_de_cores': {
        "azul_escuro": '5c5bff',
        "azul_claro": '5bacff',
    },
    'imagens': {
        "eu_ghibli": "url",
        "minecraft": "url",
        "greninja": "url",
    },
}];

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