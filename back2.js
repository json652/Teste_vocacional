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
app.post("/perguntas", async (req, res) => {
  console.log("Frango a passarinho");
  const { btn1, btn2, btn3, btn4, btn5 } = req.body;

  try {
    //função que embaralha as perguntas pro usuário
    function embaralharPerguntas() {
      //guarda o tamanho do array
      let arr = ListaPerguntas.length;
      let i;
      //Retorna antes de embaralhar
      console.log(ListaPerguntas.map((p) => p.texto));
      //Algoritmo fisher-yates para embaralhar o array
      for (i = 0; i < arr - 1; i++) {
        //pega uma posição aleatória depois do índice i para o indice j embaralhar
        const j = i + Math.floor(Math.random() * (arr - i));
        //Faz o embaralhamento
        [ListaPerguntas[i], ListaPerguntas[j]] = [
          ListaPerguntas[j],
          ListaPerguntas[i],
        ];
      }
    }
    //
    //Chamada de função que mostra o resultado no formato json
    const Result = embaralharPerguntas(ListaPerguntas);
    console.log(Result.map((p) => p.texto));
    res.json(Result);

    let mostrarPerguntas = () => {};

    //Log de teste para ver se a rota está funcionando
    console.log("Tangerina");
    //
    res.sendStatus(200);
  } catch (err) {
    //
    console.error(err);
    res.status(500).json({ success: false, message: "Erro" });
    //
  }
});

//inicialização das rotas
app.listen(3000, () => {
  console.log("on air!");
});
