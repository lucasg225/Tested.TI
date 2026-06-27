/* ==========================================================
   QUIZ.JS
   WHAY HELP
==========================================================*/

const perguntas = [

{
    pergunta:"Qual é a principal função de um Sistema Operacional?",

    respostas:[
        "Editar imagens",
        "Gerenciar o hardware e o software",
        "Criar planilhas",
        "Programar jogos"
    ],

    correta:1
},

{
    pergunta:"O que significa a sigla CPU?",

    respostas:[
        "Central Processing Unit",
        "Computer Personal Unit",
        "Control Program User",
        "Central Program Utility"
    ],

    correta:0
},

{
    pergunta:"Qual linguagem é usada para estilizar páginas web?",

    respostas:[
        "Python",
        "Java",
        "CSS",
        "PHP"
    ],

    correta:2
},

{
    pergunta:"Qual equipamento conecta computadores em uma rede?",

    respostas:[
        "Monitor",
        "Switch",
        "Teclado",
        "Impressora"
    ],

    correta:1
},

{
    pergunta:"HTML é utilizado para:",

    respostas:[
        "Criar a estrutura da página",
        "Editar vídeos",
        "Criar banco de dados",
        "Montar computadores"
    ],

    correta:0
},

{
    pergunta:"Qual destas áreas trabalha com proteção de sistemas?",

    respostas:[
        "Design",
        "Marketing",
        "Cibersegurança",
        "Suporte Comercial"
    ],

    correta:2
},

{
    pergunta:"O que é um banco de dados?",

    respostas:[
        "Programa para editar fotos",
        "Sistema para armazenar informações",
        "Rede social",
        "Editor de texto"
    ],

    correta:1
},

{
    pergunta:"Qual empresa desenvolveu o Windows?",

    respostas:[
        "Apple",
        "Microsoft",
        "Google",
        "Intel"
    ],

    correta:1
},

{
    pergunta:"O que faz um Técnico em TI?",

    respostas:[
        "Realiza manutenção e suporte",
        "Vende computadores",
        "Projeta prédios",
        "Edita filmes"
    ],

    correta:0
},

{
    pergunta:"Qual destas profissões pertence à área de TI?",

    respostas:[
        "Enfermeiro",
        "Programador",
        "Advogado",
        "Arquiteto"
    ],

    correta:1
}

];

let indice = 0;
let pontos = 0;
let respostaSelecionada = null;
let tempo = 20;
let intervalo;

const pergunta = document.getElementById("pergunta");
const respostas = document.getElementById("respostas");
const contador = document.getElementById("contador");
const progresso = document.getElementById("progresso");

const btnComecar = document.getElementById("btnComecar");
const btnProxima = document.getElementById("btnProxima");

const resultado = document.getElementById("resultado");
const pontuacao = document.getElementById("pontuacao");
const mensagem = document.getElementById("mensagem");

const tempoElemento = document.getElementById("tempo");
const timer = document.querySelector(".timer");

btnComecar.addEventListener("click", iniciarQuiz);

btnProxima.addEventListener("click", proximaPergunta);

document.getElementById("ano").textContent =
new Date().getFullYear();

function iniciarQuiz(){

    btnComecar.style.display="none";

    mostrarPergunta();

}

function mostrarPergunta(){

    iniciarTempo();
   
    respostaSelecionada=null;

    btnProxima.style.display="none";

    const atual=perguntas[indice];

    pergunta.textContent=atual.pergunta;

    contador.textContent=`${indice+1} / ${perguntas.length}`;

    progresso.style.width=
`${((indice+1)/perguntas.length)*100}%`;

    respostas.innerHTML="";

    atual.respostas.forEach((texto,i)=>{

        const div=document.createElement("div");

        div.className="resposta";

        div.textContent=texto;

        div.onclick=()=>selecionar(div,i);

        respostas.appendChild(div);

    });

}

function selecionar(card,indiceResposta){

    document.querySelectorAll(".resposta")
    .forEach(r=>r.classList.remove("selecionada"));

    card.classList.add("selecionada");

    respostaSelecionada=indiceResposta;

    btnProxima.style.display="block";

}

function proximaPergunta(){

    clearInterval(intervalo);
   
    if(respostaSelecionada===null) return;

    if(respostaSelecionada===perguntas[indice].correta){

        pontos++;

    }

    indice++;

    if(indice<perguntas.length){

        mostrarPergunta();

    }

    else{

        finalizarQuiz();

    }

}

function finalizarQuiz(){

    document.querySelector(".quiz-area").style.display="none";

    resultado.style.display="block";

    pontuacao.textContent=`${pontos}/${perguntas.length}`;

    if(pontos===10){

        mensagem.textContent=
        "Excelente! Você domina muito bem os conceitos básicos de Tecnologia da Informação.";

    }

    else if(pontos>=8){

        mensagem.textContent=
        "Muito bom! Você possui um ótimo conhecimento em TI.";

    }

    else if(pontos>=5){

        mensagem.textContent=
        "Bom trabalho! Continue estudando para evoluir ainda mais.";

    }

    else{

        mensagem.textContent=
        "Continue estudando. A área de TI possui muito conteúdo interessante para aprender!";

    }

}
function iniciarTempo(){

    clearInterval(intervalo);

    tempo=20;

    tempoElemento.textContent=tempo;

    timer.classList.remove("amarelo","vermelho");

    intervalo=setInterval(()=>{

        tempo--;

        tempoElemento.textContent=tempo;

        if(tempo<=10){

            timer.classList.add("amarelo");

        }

        if(tempo<=5){

            timer.classList.remove("amarelo");

            timer.classList.add("vermelho");

        }

        if(tempo<=0){

            clearInterval(intervalo);

            respostaSelecionada=-1;

            proximaPergunta();

        }

    },1000);

}
