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
        }

    }

    const carreiras = {

        dev:{
            emoji:"💻",
            nome:"Desenvolvedor Full Stack",
            salario:"R$ 6.000 a R$ 15.000",
            descricao:"Você gosta de criar sistemas, sites e aplicativos. Seu perfil é criativo e voltado para resolver problemas através da programação.",
            tecnologias:"HTML • CSS • JavaScript • React • Node.js • SQL",
            certificacoes:"Oracle • Microsoft • AWS"
        },

        redes:{
            emoji:"🌐",
            nome:"Analista de Redes",
            salario:"R$ 4.500 a R$ 10.000",
            descricao:"Você possui perfil para infraestrutura, redes corporativas e servidores.",
            tecnologias:"Cisco • Mikrotik • Linux • Windows Server",
            certificacoes:"CCNA • Fortinet"
        },

        hardware:{
            emoji:"🛠️",
            nome:"Especialista em Hardware",
            salario:"R$ 3.000 a R$ 8.000",
            descricao:"Você gosta de manutenção, montagem e diagnóstico de computadores.",
            tecnologias:"Eletrônica • Redes • Manutenção",
            certificacoes:"CompTIA A+"
        },

        seguranca:{
            emoji:"🔒",
            nome:"Especialista em Segurança",
            salario:"R$ 8.000 a R$ 18.000",
            descricao:"Você possui perfil para proteger sistemas e combater ataques virtuais.",
            tecnologias:"Linux • Firewall • Pentest",
            certificacoes:"Security+ • CEH"
        },

        cloud:{
            emoji:"☁️",
            nome:"Engenheiro Cloud",
            salario:"R$ 9.000 a R$ 20.000",
            descricao:"Você demonstra interesse por computação em nuvem e infraestrutura moderna.",
            tecnologias:"AWS • Azure • Docker • Kubernetes",
            certificacoes:"AWS Cloud Practitioner"
        },

        dados:{
            emoji:"📊",
            nome:"Cientista de Dados",
            salario:"R$ 8.000 a R$ 18.000",
            descricao:"Você gosta de analisar dados e gerar informações para tomadas de decisão.",
            tecnologias:"Python • SQL • Power BI",
            certificacoes:"Google Data Analytics"
        },

        ia:{
            emoji:"🤖",
            nome:"Engenheiro de Inteligência Artificial",
            salario:"R$ 10.000 a R$ 25.000",
            descricao:"Você possui perfil para desenvolver soluções utilizando Inteligência Artificial.",
            tecnologias:"Python • TensorFlow • Machine Learning",
            certificacoes:"Microsoft AI Engineer"
        }

    };

   
