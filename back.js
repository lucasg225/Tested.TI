/* ==========================================================
   PROJETO TI V5
   BACK.JS
==========================================================*/

/* ===========================
   MENU LATERAL
=========================== */

const menu = document.getElementById("menu");

function abrirMenu() {

    if (menu) {
        menu.classList.add("ativo");
    }

}

function fecharMenu() {

    if (menu) {
        menu.classList.remove("ativo");
    }

}

/* ===========================
   FECHAR MENU AO CLICAR
=========================== */

document.querySelectorAll(".menu-links a").forEach(link => {

    link.addEventListener("click", () => {

        fecharMenu();

    });

});

/* ===========================
   ANIMAÇÃO AO ROLAR
=========================== */

const elementosFade = document.querySelectorAll(".fade");

function revelarElementos() {

    const pontoTela = window.innerHeight * 0.85;

    elementosFade.forEach(elemento => {

        const topo = elemento.getBoundingClientRect().top;

        if (topo < pontoTela) {

            elemento.classList.add("ativo");

        }

    });

}

window.addEventListener("scroll", revelarElementos);

window.addEventListener("load", revelarElementos);

/* ===========================
   BOTÃO TOPO
=========================== */

const botaoTopo = document.querySelector(".topo");

function controlarBotaoTopo() {

    if (!botaoTopo) return;

    if (window.scrollY > 300) {

        botaoTopo.style.opacity = "1";
        botaoTopo.style.pointerEvents = "all";

    } else {

        botaoTopo.style.opacity = "0";
        botaoTopo.style.pointerEvents = "none";

    }

}

window.addEventListener("scroll", controlarBotaoTopo);

window.addEventListener("load", controlarBotaoTopo);

/* ===========================
   HEADER
=========================== */

const header = document.querySelector(".header-apple");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 60) {

        header.style.background = "rgba(5,18,32,.90)";
        header.style.boxShadow = "0 20px 45px rgba(0,0,0,.45)";

    } else {

        header.style.background = "rgba(8,22,35,.72)";
        header.style.boxShadow = "0 20px 40px rgba(0,0,0,.35)";

    }

});

/* ===========================
   EFEITO NOS CARDS
=========================== */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".35s";

    });

});

/* ===========================
   SCROLL SUAVE LINKS
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (!destino) return;

        e.preventDefault();

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ===========================
   ANO AUTOMÁTICO
=========================== */

const ano = document.getElementById("ano");

if (ano) {

    ano.textContent = new Date().getFullYear();

}

console.log("Projeto TI V5 carregado com sucesso.");

/* ===========================
   HEADER INTELIGENTE
=========================== */

let ultimoScroll = 0;

window.addEventListener("scroll", () => {

    const atual = window.pageYOffset;

    if (atual > ultimoScroll && atual > 100) {
        // Descendo a página
        header.style.transform = "translateY(-100%)";
    } else {
        // Subindo a página
        header.style.transform = "translateY(0)";
    }

    ultimoScroll = atual;

});
