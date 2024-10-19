// Alternar modo de contraste alto
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    document.querySelector('header').classList.toggle('high-contrast');
    document.querySelectorAll('nav ul li a, nav ul li button').forEach(function(el) {
        el.classList.toggle('high-contrast');
    });
}
// Aumentar tamaño del texto
function increaseTextSize() {
    document.body.classList.toggle('large-text');
}
// Leer en voz alta
function readText(elementId) {
    let text = document.getElementById(elementId).innerText;
    let speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}
// Modo lector simplificado (placeholder, puede expandirse)
function toggleReaderMode() {
    alert('Modo lector activado');
}
