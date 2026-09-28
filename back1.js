import express from "express";
import cors from "cors";
//importando as funções de query
import { getUsuario, getUsuarios, createUsuario } from "./DB1.js";

const app = express();
//Middleware responsavel por interpretar o corpo das requisi;'oes no formato json
app.use(express.json());
//Middleware que processa as requisiçõoes no formato application/x-www-form-urlencoded.
app.use(cors());

//conectando o Banco de dados com o Backend
app.get("/Usuario/:id", async (req, res) => {
  const id = req.params.id;
  const user1 = await getUsuarios(id);
  res.send(user1);
});

app.get("/Usuario", async (req, res) => {
  const Usuario = await getUsuario();
  res.send(Usuario);
});

//criar uma lista e transformar ela em JSON para receber os dados do login
//criação da lista
let listaUsuarios = [
  {
    id: 1,
    cpf: "xxx.xxx.xxx-xx",
    nome: "Cleberson",
    telcel: "(12)34567-8999",
  },
];

//Retorna a lista
app.post("/cpf", async (req, res) => {
  return res.status(200).json(listaUsuarios);
});

//colocando os dados dentro da lista
app.post("/cpf/novo", async (req, res) => {
  //pega as variaveis do corpo da requisição
  const { cpf, nome, telcel } = req.body;

  //Adiciona elas no json
  listaUsuarios.push({
    id: listaUsuarios.length + 2,
    cpf: cpf,
    nome: nome,
    telcel: telcel,
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

//criação da rota verificação das variáveis e Conecta as variaveis ao db e manda elas pra tabela
app.post("/login", (req, res) => {
  try {
    const { cpf, nome, telcel } = req.body;
    console.log("Tangerina");
    if (cpf && nome && telcel) {
      const user2 = createUsuario(cpf, nome, telcel);
      res.status(201).send(user2);
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials!" });
    }
  } catch (err) {
    next(err); // forwards to your error middleware
  }
});

//inicialização das rotas
app.listen(3000, () => {
  console.log("on air!");
});
