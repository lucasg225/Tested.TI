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

    if (!header) return;

    const atual = window.scrollY;

    if (atual > ultimoScroll && atual > 100) {

        header.style.transform = "translate(-50%, -140%)";

    } else {

        header.style.transform = "translate(-50%, 0)";

    }

    ultimoScroll = atual;

});
/* ==========================================================
   SIMULADOR DE CARREIRA - PARTE 1
========================================================== */

const perguntas = document.querySelectorAll(".pergunta");
const opcoes = document.querySelectorAll(".opcao");

const btnProximo = document.getElementById("btnProximo");
const btnAnterior = document.getElementById("btnAnterior");

const barra = document.getElementById("barraProgresso");
const numeroPergunta = document.getElementById("numeroPergunta");

let perguntaAtual = 0;

const pontos = {
    dev:0,
    redes:0,
    hardware:0,
    seguranca:0,
    cloud:0,
    dados:0,
    ia:0
};

/* --------------------------
   Atualiza tela
-------------------------- */

function atualizarPergunta(){

    perguntas.forEach((pergunta,index)=>{

        pergunta.classList.remove("ativa");

        if(index===perguntaAtual){

            pergunta.classList.add("ativa");

        }

    });

    numeroPergunta.textContent = perguntaAtual + 1;

    barra.style.width=((perguntaAtual+1)/10)*100+"%";

    btnAnterior.disabled = perguntaAtual===0;

    if(perguntaAtual===9){

        btnProximo.textContent="Ver Resultado";

    }else{

        btnProximo.textContent="Próxima →";

    }

}

/* --------------------------
   Seleção das respostas
-------------------------- */

opcoes.forEach(opcao=>{

    opcao.addEventListener("click",()=>{

        const grupo=opcao.parentElement;

        grupo.querySelectorAll(".opcao").forEach(btn=>{

            btn.classList.remove("selecionada");

        });

        opcao.classList.add("selecionada");

        grupo.dataset.resposta=opcao.dataset.area;

    });

});

/* --------------------------
   Próxima
-------------------------- */

btnProximo.addEventListener("click",()=>{

    const pergunta=perguntas[perguntaAtual];

    if(!pergunta.dataset.resposta){

        alert("Escolha uma resposta.");

        return;

    }

    const area=pergunta.dataset.resposta;

    pontos[area]++;

    if(perguntaAtual<9){

        perguntaAtual++;

        atualizarPergunta();

    }else{

        mostrarResultado();

    }

});

/* --------------------------
   Voltar
-------------------------- */

btnAnterior.addEventListener("click",()=>{

    if(perguntaAtual>0){

        perguntaAtual--;

        atualizarPergunta();

    }

});

atualizarPergunta();
