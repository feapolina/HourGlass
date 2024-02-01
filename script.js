window.onload = function () {
  changeBackground();

  /* Trocando background dinamicamente */
  function changeBackground() {
    const randomNumber = Math.floor(Math.random() * 4);
    const body = document.body;
    body.style.background = `url("./assets/icons/${randomNumber}.gif") no-repeat`;
    body.style.backgroundSize = "cover";
  }

  /* Pegando a hora em javascript */
  const hour = document.getElementById("hour");
  atualizarHora();

  function atualizarHora() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    hour.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    setTimeout(atualizarHora, 1000);
  }
};
