// =====================
// Projetos
// =====================
const projetos = [
  { nome: "CRUD em Flask", link: "#", img: "crud.png" },
  { nome: "To-do List em JS", link: "#", img: "todo.png" },
  { nome: "Landing Page Responsiva", link: "#", img: "landing.png" }
];

const lista = document.getElementById("listaProjetos");

projetos.forEach(p => {
  const li = document.createElement("li");
  li.innerHTML = `
    <img src="assets/${p.img}" alt="${p.nome}">
    <a href="${p.link}" target="_blank">${p.nome}</a>
  `;
  lista.appendChild(li);
});

// =====================
// Habilidades com modal
// =====================
function mostrarInfo(habilidade) {
  const titulo = document.getElementById("modalTitulo");
  const texto = document.getElementById("modalTexto");
  const icon = document.getElementById("modalIcon");
  const modal = document.getElementById("modal");

  const infos = {
    html: {
      titulo: "HTML5",
      texto: "HTML é a linguagem de marcação usada para estruturar páginas web.",
      icon: "assets/html.png"
    },
    css: {
      titulo: "CSS3",
      texto: "CSS é usado para estilizar páginas, definindo cores, layouts e responsividade.",
      icon: "assets/css.png"
    },
    js: {
      titulo: "JavaScript",
      texto: "JavaScript adiciona interatividade e lógica às páginas web.",
      icon: "assets/js.png"
    },
    python: {
      titulo: "Python",
      texto: "Python é uma linguagem versátil, ótima para back-end, ciência de dados e automação.",
      icon: "assets/python.png"
    },
    java: {
      titulo: "Java",
      texto: "Java é robusta e muito usada em sistemas corporativos, aplicações Android e grandes sistemas distribuídos.",
      icon: "assets/java.png"
    }
  };

  // Atualiza conteúdo do modal
  titulo.textContent = infos[habilidade].titulo;
  texto.textContent = infos[habilidade].texto;
  icon.src = infos[habilidade].icon;
  icon.alt = infos[habilidade].titulo;

  // Exibe modal
  modal.style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// Fechar modal clicando fora
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// =====================
// Alternar tema claro/escuro
// =====================
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") 
    ? "☀️ Alternar Tema" 
    : "🌙 Alternar Tema";
});
