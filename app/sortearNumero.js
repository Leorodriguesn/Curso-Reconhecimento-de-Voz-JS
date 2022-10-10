const maiorValor = 1000;
const menorValor = 1;
defineLimites();
const numeroSecreto = sorteiaNumeroSecreto ();

console.log(numeroSecreto)

function sorteiaNumeroSecreto() {
    
    
    
    return Math.round(Math.random() * (maiorValor - menorValor) + menorValor);
}

function defineLimites () {
    const elementoMaiorValor = document.getElementById('maior-valor');
    const elementoMenorValor = document.getElementById('menor-valor');

    elementoMaiorValor.innerHTML = maiorValor;
    elementoMenorValor.innerHTML = menorValor;

}

