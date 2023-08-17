const botaoAlteraTema = document.getElementById("botao-altera-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlteraTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-dark");

  body.classList.toggle("modo-dark");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "src/img/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "src/img/moon.png");
  }
});