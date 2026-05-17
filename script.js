function mostrarMensagem() {
  alert("Chame no WhatsApp para fazer seu orçamento!");
}

const imagens = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
];

let indice = 0;

function trocarImagem() {
  indice = (indice + 1) % imagens.length;
  document.getElementById("imagem").src = imagens[indice];
}