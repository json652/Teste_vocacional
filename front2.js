function FormSubmit() {
  document
    .querySelector("#formularioTeste")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      console.log("Abacate");

      const btn1 = document.querySelector("#1").value;
      const btn2 = document.querySelector("#2").value;
      const btn3 = document.querySelector("#3").value;
      const btn4 = document.querySelector("#4").value;
      const btn5 = document.querySelector("#5").value;

      console.log(btn1);
      console.log(btn2);
      console.log(btn3);
      console.log(btn4);
      console.log(btn5);

      //Manda as variáveis para a rota de login do back-end para checagem
      const response = await fetch(`http://localhost:3000/login`, {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({ cpf, nome, telcel }),
      });
      //Dá um retorno da condição da rota
      const data = await response.json();
    });
}
