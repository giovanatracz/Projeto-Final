const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está lendo sobre figuras influentes do século XX e se depara com Billy Graham, um famoso evangelista. Qual a sua reação inicial?",
        alternativas: [
            {
                texto: "Nunca ouvi falar dele, mas estou curioso para saber mais.",
                afirmacao: "Decidiu pesquisar mais sobre Billy Graham e sua influência na evangelização global."
            },
            {
                texto: "Já ouvi falar dele antes, especialmente sobre suas cruzadas e discursos.",
                afirmacao: "Sentiu que a influência de Billy Graham já é um tema conhecido e decidiu aprofundar seu conhecimento sobre suas estratégias e impacto."
            }
        ]
    },
    {
        enunciado: "Você descobre que Billy Graham organizou uma grande cruzada em sua cidade. Qual seria sua atitude?",
        alternativas: [
            {
                texto: "Participaria da cruzada para conhecer o evento e entender o impacto na comunidade.",
                afirmacao: "Participar da cruzada ajudou a perceber a importância de eventos evangelísticos para unir e inspirar as pessoas."
            },
            {
                texto: "Preferiria assistir à cruzada pela televisão para entender como ele transmite sua mensagem para uma audiência maior.",
                afirmacao: "Assistir pela TV proporcionou uma visão sobre como Billy Graham usava os meios de comunicação para alcançar milhões."
            }
        ]
    },
    {
        enunciado: "Durante uma palestra sobre a vida de Billy Graham, você é convidado a discutir como seu trabalho impactou a sociedade. Como você se posiciona?",
        alternativas: [
            {
                texto: "Acredito que o trabalho de Billy Graham ajudou a moldar a religião moderna e trouxe uma nova abordagem ao evangelismo.",
                afirmacao: "Reconhece que Billy Graham desempenhou um papel crucial na modernização e globalização da mensagem cristã."
            },
            {
                texto: "Preocupo-me com a forma como sua popularidade pode ter criado uma imagem de evangelismo como um espetáculo.",
                afirmacao: "Sua preocupação gerou debates sobre a autenticidade e a forma como o evangelismo é percebido na mídia."
            }
        ]
    },
    {
        enunciado: "Você precisa criar um projeto sobre a influência de Billy Graham no cristianismo moderno. Como você aborda isso?",
        alternativas: [
            {
                texto: "Utiliza ferramentas de design para criar gráficos e infográficos sobre a carreira e as cruzadas de Billy Graham.",
                afirmacao: "Criar gráficos ajudou a visualizar e comunicar o impacto de Billy Graham de forma clara e educativa."
            },
            {
                texto: "Usa uma plataforma de geração de conteúdo para criar uma apresentação visual sobre seus discursos e livros.",
                afirmacao: "A utilização de plataformas de geração de conteúdo acelerou a criação de uma apresentação atraente e informativa sobre Billy Graham."
            }
        ]
    },
    {
        enunciado: "Você está colaborando em um projeto de pesquisa sobre Billy Graham e descobre que um colega copiou informações de uma fonte não confiável. O que você faz?",
        alternativas: [
            {
                texto: "Acredita que copiar de uma fonte rápida pode ser aceitável e não vê problema em usar o material do colega.",
                afirmacao: "Sentiu que a dependência de fontes não confiáveis afetou a qualidade da pesquisa e agora busca fontes mais confiáveis e diversificadas."
            },
            {
                texto: "Revisa o material e contribui com informações precisas e verificadas para garantir a qualidade da pesquisa.",
                afirmacao: "Percebeu a importância de garantir a integridade e a precisão das informações e decidiu promover boas práticas na pesquisa acadêmica."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O impacto de Billy Graham em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
