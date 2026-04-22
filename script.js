function filtrar(cat) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(c => {
    if (cat === 'todas' || c.dataset.categoria === cat) {
      c.style.display = 'block';
    } else {
      c.style.display = 'none';
    }
  });
}

function abrirModal(t, d) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("titulo").innerText = t;
  document.getElementById("descricao").innerText = d;
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}
