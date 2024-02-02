let saudacao = "";
const horas = pegaHora();
const paragrafoSaudacao = document.getElementById("saudacao");

function pegaHora() {
  const data = new Date();
  const horas = data.getHours();
  return horas;
}

function criaSaudacao(horas) {
  if (horas <= 12) {
    saudacao = "Bom dia";
  } else if (horas <= 18) {
    saudacao = "Boa tarde";
  } else {
    saudacao = "Boa noite";
  }
  return saudacao;
}
criaSaudacao(horas);
paragrafoSaudacao.innerText = saudacao;
