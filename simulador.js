/* ==========================================================
   WHAY HELP
   SIMULADOR DE CARREIRA
   PARTE 1
==========================================================*/

const perguntas = [

{
    pergunta:"O que você mais gosta de fazer?",
    respostas:[
        {texto:"Criar sites e aplicativos",area:"dev"},
        {texto:"Montar computadores",area:"hardware"},
        {texto:"Configurar redes",area:"redes"},
        {texto:"Proteger sistemas",area:"seguranca"}
    ]
},

{
    pergunta:"Qual matéria você mais gosta?",
    respostas:[
        {texto:"Programação",area:"dev"},
        {texto:"Eletrônica",area:"hardware"},
        {texto:"Redes",area:"redes"},
        {texto:"Matemática",area:"dados"}
    ]
},

{
    pergunta:"Qual tecnologia chama mais sua atenção?",
    respostas:[
        {texto:"Inteligência Artificial",area:"ia"},
        {texto:"Cloud Computing",area:"cloud"},
        {texto:"Segurança Digital",area:"seguranca"},
        {texto:"Ciência de Dados",area:"dados"}
    ]
},

{
    pergunta:"Você prefere trabalhar...",
    respostas:[
        {texto:"Criando sistemas",area:"dev"},
        {texto:"Gerenciando servidores",area:"cloud"},
        {texto:"Analisando dados",area:"dados"},
        {texto:"Administrando redes",area:"redes"}
    ]
},

{
    pergunta:"Qual empresa você gostaria de trabalhar?",
    respostas:[
        {texto:"Google",area:"dev"},
        {texto:"Microsoft",area:"cloud"},
        {texto:"NVIDIA",area:"ia"},
        {texto:"Cisco",area:"redes"}
    ]
},

{
    pergunta:"O que você faria em um computador novo?",
    respostas:[
        {texto:"Programaria",area:"dev"},
        {texto:"Montaria as peças",area:"hardware"},
        {texto:"Configuraria a internet",area:"redes"},
        {texto:"Instalaria antivírus",area:"seguranca"}
    ]
},

{
    pergunta:"Qual dessas profissões mais chama sua atenção?",
    respostas:[
        {texto:"Desenvolvedor",area:"dev"},
        {texto:"Engenheiro Cloud",area:"cloud"},
        {texto:"Especialista em Segurança",area:"seguranca"},
        {texto:"Cientista de Dados",area:"dados"}
    ]
},

{
    pergunta:"Você prefere resolver problemas...",
    respostas:[
        {texto:"Com programação",area:"dev"},
        {texto:"Com servidores",area:"cloud"},
        {texto:"Com redes",area:"redes"},
        {texto:"Com hardware",area:"hardware"}
    ]
},

{
    pergunta:"Qual ambiente parece mais interessante?",
    respostas:[
        {texto:"Empresa de Software",area:"dev"},
        {texto:"Data Center",area:"cloud"},
        {texto:"Laboratório de IA",area:"ia"},
        {texto:"Centro de Segurança",area:"seguranca"}
    ]
},

{
    pergunta:"Qual profissão você escolheria hoje?",
    respostas:[
        {texto:"Desenvolvedor Full Stack",area:"dev"},
        {texto:"Engenheiro Cloud",area:"cloud"},
        {texto:"Especialista em IA",area:"ia"},
        {texto:"Especialista em Segurança",area:"seguranca"}
    ]
}];

const pontos = {

dev:0,
hardware:0,
redes:0,
seguranca:0,
cloud:0,
dados:0,
ia:0

};

let perguntaAtual = 0;

const areaPergunta = document.getElementById("areaPergunta");

const barra = document.getElementById("barraProgresso");

const numero = document.getElementById("numeroPergunta");

const btnAnterior = document.getElementById("btnAnterior");

const btnProximo = document.getElementById("btnProximo");

const resultado = document.getElementById("resultadoCarreira");

/* ==========================================================
   PARTE 2
   EXIBIR PERGUNTAS
========================================================== */

let respostasUsuario = [];

function mostrarPergunta(){

    const atual = perguntas[perguntaAtual];

    numero.textContent = perguntaAtual + 1;

    barra.style.width =
        ((perguntaAtual + 1) / perguntas.length) * 100 + "%";

    areaPergunta.innerHTML = "";

    const titulo = document.createElement("h3");
    titulo.textContent = atual.pergunta;

    areaPergunta.appendChild(titulo);

    atual.respostas.forEach((resposta, indice)=>{

        const botao = document.createElement("button");

        botao.className = "opcao";

        botao.textContent = resposta.texto;

        if(respostasUsuario[perguntaAtual] === indice){

            botao.classList.add("selecionada");

        }

        botao.onclick = ()=>{

            respostasUsuario[perguntaAtual] = indice;

            document
                .querySelectorAll(".opcao")
                .forEach(btn=>btn.classList.remove("selecionada"));

            botao.classList.add("selecionada");

        };

        areaPergunta.appendChild(botao);

    });

    btnAnterior.style.visibility =
        perguntaAtual === 0 ? "hidden" : "visible";

    if(perguntaAtual === perguntas.length-1){

        btnProximo.textContent = "Ver Resultado";

    }else{

        btnProximo.textContent = "Próxima →";

    }

}

/* ==========================================================
   BOTÃO PRÓXIMO
========================================================== */

btnProximo.addEventListener("click",()=>{

    if(respostasUsuario[perguntaAtual] == null){

        alert("Escolha uma resposta antes de continuar.");

        return;

    }

    if(perguntaAtual < perguntas.length-1){

        perguntaAtual++;

        mostrarPergunta();

    }else{

        calcularResultado();

    }

});

/* ==========================================================
   BOTÃO ANTERIOR
========================================================== */

btnAnterior.addEventListener("click",()=>{

    if(perguntaAtual > 0){

        perguntaAtual--;

        mostrarPergunta();

    }

});

mostrarPergunta();
/* ==========================================================
   PARTE 3
   RESULTADO FINAL
========================================================== */

const carreiras = {

    dev:{
        nome:"💻 Desenvolvedor Full Stack",
        salario:"R$ 6.000 a R$ 15.000",
        descricao:"Você gosta de criar soluções, programar e desenvolver aplicações.",
        estudar:"HTML • CSS • JavaScript • React • Node.js",
        certificacao:"AWS • Oracle Java • Microsoft"
    },

    hardware:{
        nome:"🛠 Técnico em Hardware",
        salario:"R$ 2.500 a R$ 6.000",
        descricao:"Seu perfil é voltado para manutenção, montagem e suporte.",
        estudar:"Eletrônica • Redes • Linux • Windows",
        certificacao:"CompTIA A+"
    },

    redes:{
        nome:"🌐 Analista de Redes",
        salario:"R$ 4.000 a R$ 9.000",
        descricao:"Você gosta de infraestrutura e comunicação entre computadores.",
        estudar:"Cisco • Mikrotik • Linux",
        certificacao:"CCNA"
    },

    seguranca:{
        nome:"🔒 Especialista em Segurança",
        salario:"R$ 8.000 a R$ 18.000",
        descricao:"Seu perfil é proteger sistemas e combater ataques digitais.",
        estudar:"Linux • Pentest • Firewalls",
        certificacao:"Security+ • CEH"
    },

    cloud:{
        nome:"☁ Engenheiro Cloud",
        salario:"R$ 9.000 a R$ 20.000",
        descricao:"Você gosta de servidores e computação em nuvem.",
        estudar:"AWS • Azure • Docker • Kubernetes",
        certificacao:"AWS Cloud Practitioner"
    },

    dados:{
        nome:"📊 Cientista de Dados",
        salario:"R$ 8.000 a R$ 18.000",
        descricao:"Você gosta de analisar informações e gerar conhecimento.",
        estudar:"Python • SQL • Power BI",
        certificacao:"Google Data Analytics"
    },

    ia:{
        nome:"🤖 Engenheiro de IA",
        salario:"R$ 10.000 a R$ 25.000",
        descricao:"Você gosta de Inteligência Artificial e Machine Learning.",
        estudar:"Python • TensorFlow • IA Generativa",
        certificacao:"Microsoft AI Engineer"
    }

};

function calcularResultado(){

    // Zera a pontuação
    Object.keys(pontos).forEach(area => pontos[area] = 0);

    // Soma as respostas
    respostasUsuario.forEach((indice, i)=>{

        const area = perguntas[i].respostas[indice].area;

        pontos[area]++;

    });

    // Ordena do maior para o menor
    const ranking = Object.entries(pontos)
        .sort((a,b)=>b[1]-a[1]);

    const melhor = ranking[0][0];

    const dados = carreiras[melhor];

    const porcentagem =
        Math.round((ranking[0][1]/perguntas.length)*100);

    resultado.style.display="block";

    resultado.innerHTML=`

<h2>${dados.nome}</h2>

<p>${dados.descricao}</p>

<br>

<h3>Compatibilidade: ${porcentagem}%</h3>

<div class="barra-ranking">

<div style="width:${porcentagem}%"></div>

</div>

<br>

<p><strong>💰 Salário Médio</strong></p>

<p>${dados.salario}</p>

<br>

<p><strong>📚 O que estudar</strong></p>

<p>${dados.estudar}</p>

<br>

<p><strong>🎓 Certificações</strong></p>

<p>${dados.certificacao}</p>

<br>

<h3>Ranking das áreas</h3>

${ranking.map(item=>{

const nome = carreiras[item[0]].nome;

const valor =
Math.round((item[1]/perguntas.length)*100);

return `

<div class="ranking-item">

<span>

${nome}

${valor}%

</span>

<div class="barra-ranking">

<div style="width:${valor}%"></div>

</div>

</div>

`;

}).join("")}

<br>

<button
class="btn-principal"
onclick="location.reload()">

Refazer Teste

</button>

`;

    document.querySelector(".navegacaoQuiz").style.display="none";

    areaPergunta.style.display="none";

    resultado.scrollIntoView({
        behavior:"smooth"
    });

}
