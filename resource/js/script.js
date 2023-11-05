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