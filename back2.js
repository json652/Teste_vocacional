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
  return res.status(200).json(listaUsuarios);
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
  try {
    console.log();
    const { btn1, btn2, btn3, btn4, btn5 } = req.body;
    console.log("Tangerina");
    if (btn1 && btn2 && btn3 && btn4 && btn5) {
      console.log("Abacate");
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials!" });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Erro ao salvar no banco" });
  }
});

//inicialização das rotas
app.listen(3000, () => {
  console.log("on air!");
});
