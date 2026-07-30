// =============================
// MENU MOBILE
// =============================

const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="ri-close-line"></i>';
    } else {
        menuBtn.innerHTML = '<i class="ri-menu-line"></i>';
    }
});

// Fecha o menu ao clicar em um link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.innerHTML = '<i class="ri-menu-line"></i>';

    });

});

// =============================
// BOTÃO VOLTAR AO TOPO
// =============================

const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        toTop.classList.add("active");

    } else {

        toTop.classList.remove("active");

    }

});

toTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =============================
// HEADER
// =============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(10,10,10,.95)";
        header.style.boxShadow = "0 5px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(10,10,10,.65)";
        header.style.boxShadow = "none";

    }

});

// =============================
// ANIMAÇÃO AO SCROLL
// =============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("fade-up");

    observer.observe(section);

});

// =============================
// EFEITO PARALLAX NA IMAGEM
// =============================

const heroImage = document.querySelector(".image-box");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 45;

    const y = (window.innerHeight / 2 - e.clientY) / 45;

    heroImage.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;

});

// =============================
// EFEITO NOS CARDS
// =============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(155,92,255,.18),
            rgba(255,255,255,.03))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.03)";

    });

});

// =============================
// TEXTO DIGITANDO
// =============================

const title = document.querySelector(".mini-title");

const words = [

    "BACKEND • FULL STACK • APIs REST",

    "NODE.JS • EXPRESS • MYSQL",

    "PRISMA ORM • JAVASCRIPT"

];

let index = 0;

setInterval(() => {

    index++;

    if (index >= words.length) index = 0;

    title.style.opacity = 0;

    setTimeout(() => {

        title.innerText = words[index];

        title.style.opacity = 1;

    }, 300);

}, 3000);