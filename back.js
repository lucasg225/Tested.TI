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
/* ==========================================================
   RESULTADO DO SIMULADOR
==========================================================*/

function mostrarResultado(){

    const resultado = document.getElementById("resultadoCarreira");

    let melhorArea = "";
    let maiorPontuacao = -1;

    for(const area in pontos){

        if(pontos[area] > maiorPontuacao){

            maiorPontuacao = pontos[area];
            melhorArea = area;

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

    const carreira = carreiras[melhorArea];

    resultado.style.display = "block";

    resultado.innerHTML = `

        <h2>${carreira.emoji} ${carreira.nome}</h2>

        <p>${carreira.descricao}</p>

        <br>

        <p><strong>💰 Salário Médio:</strong> ${carreira.salario}</p>

        <p><strong>🛠 Tecnologias:</strong> ${carreira.tecnologias}</p>

        <p><strong>🎓 Certificações:</strong> ${carreira.certificacoes}</p>

        <br>

        <h3>Ranking das Áreas</h3>

        <div class="ranking">

            ${Object.keys(pontos).map(area=>{

                const porcentagem=Math.round((pontos[area]/10)*100);

                return `

                <div class="ranking-item">

                    <span>${area.toUpperCase()} ${porcentagem}%</span>

                    <div class="barra-ranking">

                        <div style="width:${porcentagem}%"></div>

                    </div>

                </div>

                `;

            }).join("")}

        </div>

        <br>

        <button class="btn-principal"
                onclick="location.reload()">

            Refazer Simulador

        </button>

    `;

    document.querySelector(".navegacaoQuiz").style.display="none";

    resultado.scrollIntoView({
        behavior:"smooth"
    });

}
