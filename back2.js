import express from "express";
import cors from "cors";

const app = express();
//Middleware responsavel por interpretar o corpo das requisi;'oes no formato json
app.use(express.json());
//Middleware que processa as requisiçõoes no formato application/x-www-form-urlencoded.
app.use(cors());

//criar uma lista e transformar ela em JSON para receber os dados do login
//criação da lista
let listaResposta = [
  {
    btn1: 1,
    btn2: 2,
    btn3: 3,
    btn4: 4,
    btn5: 5,
  },
];

//Retorna a lista
app.post("/cpf", async (req, res) => {
  return res.status(200).json(ListaPerguntas);
});

//colocando os dados dentro da lista
app.post("/cpf/novo", async (req, res) => {
  //pega as variaveis do corpo da requisição
  const { btn1, btn2, btn3, btn4, btn5 } = req.body;

  //Adiciona elas no json
  listaResposta.push({
    btn1: btn1,
    btn2: btn2,
    btn3: btn3,
    btn4: btn4,
    btn5: btn5,
  });

  return res.status(201).json("cadastrado");
});

/*
    Essa rota serve para ser usada para checar
    se a API esta ligada para iniciar os trabalhos.
 */
app.post("/info", (req, res) => {
  return res.status(200).json({
    status: "running",
    host: `${req.protocol}://${req.hostname}:3000`,
  });
});

//criação de rota e verificação das variáveis
app.post("/login", async (req, res) => {
  console.log();
  const { btn1, btn2, btn3, btn4, btn5 } = req.body;
  //Lista com todas as perguntas do teste
  let ListaPerguntas = [
    {
      id: 1,
      texto: "Eu gosto de consertar ou montar coisas.",
      area: "pratica",
    },
    {
      id: 2,
      texto: "Prefiro trabalhar ao ar livre do que em escritório.",
      area: "pratica",
    },
    {
      id: 3,
      texto: "Gosto de usar ferramentas e equipamentos.",
      area: "pratica",
    },
    {
      id: 4,
      texto: "Eu gosto de descobrir como as coisas funcionam.",
      area: "Investigativa",
    },
    {
      id: 5,
      texto: "Gosto de resolver problemas de lógica ou matemática.",
      area: "Investigativa",
    },
    {
      id: 6,
      texto: "Tenho curiosidade em pesquisar um assunto a fundo.",
      area: "Investigativa",
    },
    {
      id: 7,
      texto: "Eu gosto de desenhar, escrever, tocar ou criar algo novo.",
      area: "Artística",
    },
    {
      id: 8,
      texto: "Prefiro tarefas em que posso usar minha criatividade.",
      area: "Artística",
    },
    {
      id: 9,
      texto: "Me incomodo com regras muito rígidas no trabalho.",
      area: "Artística",
    },
    {
      id: 10,
      texto: "Eu me sinto bem quando ajudo alguém.",
      area: "Social",
    },
    {
      id: 11,
      texto: "Gosto de ensinar ou explicar coisas para outras pessoas.",
      area: "Social",
    },
    {
      id: 12,
      texto: "Tenho facilidade em ouvir e entender o que os outros sentem.",
      area: "Social",
    },
    {
      id: 13,
      texto: "Eu gosto de liderar um grupo.",
      area: "Empreendedora",
    },
    {
      id: 14,
      texto: "Consigo convencer pessoas com facilidade.",
      area: "Empreendedora",
    },
    {
      id: 15,
      texto: "Gosto de assumir riscos para alcançar um objetivo.",
      area: "Empreendedora",
    },
    {
      id: 16,
      texto: "Eu gosto de manter tudo organizado e planejado.",
      area: "Convencional",
    },
    {
      id: 17,
      texto: "Prefiro seguir um passo a passo bem definido.",
      area: "Convencional",
    },
    {
      id: 18,
      texto: "Me sinto bem trabalhando com números, planilhas ou documentos.",
      area: "Convencional",
    },
  ];
  try {
    //função que embaralha as perguntas pro usuário
    function embaralharPerguntas(ListaPerguntas) {
      //guarda o tamanho do array
      let arr = ListaPerguntas.length;
      let i;
      //Retorna antes de embaralhar
      console.log(ListaPerguntas.map((p) => `<p>${p.id}</p>`));
      //Algoritmo fisher-yates para embaralhar o array
      for (i = arr; i <= arr - 1; i--) {
        const j = i + Math.floor(Math.random() * (arr - i));
        [ListaPerguntas[i], ListaPerguntas[j]] = [
          ListaPerguntas[j],
          ListaPerguntas[i],
        ];
      }
      //Retorna depois de embaralhar
      return console.log(ListaPerguntas.map((p) => `<p>${p.id}</p>`));
    }

    console.log("Tangerina");
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Erro" });
  }
});

//inicialização das rotas
app.listen(3000, () => {
  console.log("on air!");
});
