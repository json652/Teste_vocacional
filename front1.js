document
  .querySelector("#formularioLead")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Abacate");

    const cpf = document.querySelector("#cpf").value;
    const nome = document.querySelector("#nome").value;
    const telcel = document.querySelector("#telcel").value;
    console.log(cpf);
    console.log(nome);
    console.log(telcel);

    //Manda as variáveis para a rota de login do back-end para checagem
    const response = await fetch(`http://localhost:3000/login`, {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ cpf, nome, telcel }),
    });
    //Dá um retorno da condição da rota
    const data = await response.json();
  });
