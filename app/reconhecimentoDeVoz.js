window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
var numeroChute = 0;

function capturaVoz () {
    const recognition = new SpeechRecognition();
    recognition.lang = "pt-BR";
 
    
    recognition.start();

    recognition.addEventListener ('result', onSpeak);
}

function onSpeak (e) {
    const numeroFalado = e.results[0][0].transcript;
    exibeNumeroNaTela(numeroFalado);
}

function exibeNumeroNaTela (a) {
    const elementoTela = document.querySelector('.box');
    document.querySelector('.mensagem').classList.remove('esconde')
    elementoTela.innerHTML = a;
    numeroChute = a;
    comparaNumeros (numeroChute, numeroSecreto);
}

capturaVoz ();