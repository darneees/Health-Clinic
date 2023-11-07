// scroll reveal

ScrollReveal().reveal('.title', {
  delay: 400,
  distance: '50px',
  origin: 'left',
  duration: 700,
  reset: true
});

ScrollReveal().reveal('.person', {
  delay: 500,
  distance: '50px',
  origin: 'left',
  duration: 700,
  reset: true
});

ScrollReveal().reveal('.person_adress', {
  delay: 600,
  distance: '50px',
  origin: 'left',
  duration: 700,
  reset: true
});

// adress modal

const section = document.querySelector('section'),
  overlay = document.querySelector('.adress_overlay'),
  showBtn = document.querySelectorAll('.adress_btn'),
  closeBtn = document.querySelector('.close_btn');

showBtn.forEach(showBtn => {
  showBtn.addEventListener("click", () => section.classList.add("active"));
});

overlay.addEventListener("click", () => section.classList.remove("active"));
closeBtn.addEventListener("click", () => section.classList.remove("active"));



// clock

function atualizarRelogio() {
  const relogio = document.getElementById('clock');
  const data = new Date();
  const hora = data.getHours();
  const minutos = data.getMinutes();
  const segundos = data.getSeconds();

  const horaFormatada = hora.toString().padStart(2, '0');
  const minutosFormatados = minutos.toString().padStart(2, '0');
  const segundosFormatados = segundos.toString().padStart(2, '0');

  relogio.textContent = `${horaFormatada}:${minutosFormatados}:${segundosFormatados}`;
}

setInterval(atualizarRelogio, 1000);


// modal permission

const btnVideo = document.querySelectorAll('.btn');
const popup = document.getElementById('popup');
const overlayVideo = document.getElementById('overlayVideo');
const permitirCamera = document.getElementById('allowCamera');
const negarCamera = document.getElementById('denyCamera');

btnVideo.forEach((btn) => {
  btn.addEventListener('click', () => {
    popup.style.display = 'block';
    overlayVideo.style.display = 'block';
  });
});

permitirCamera.addEventListener('click', () => {
  popup.style.display = 'none';
  overlayVideo.style.display = 'none';
});

negarCamera.addEventListener('click', () => {
  popup.style.display = 'none';
  overlayVideo.style.display = 'none';
});


// load pages

function loadPage(pageName) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main_container").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "resource/pages/" + pageName, true);
  xhttp.send();
}
