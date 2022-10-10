function comparaNumeros (numeroChute, numeroSecreto) {
    const elementoDica = document.querySelector('.dica');
    if (isNaN(parseInt(numeroChute))) {
        elementoDica.innerHTML = 'Não consegui escutar um número! Tente dizer novamente!';
        capturaVoz ();
    } else {
        if (parseInt(numeroChute) === numeroSecreto) {
            elementoDica.innerHTML = 'Parabéns, voce ACERTOU!!!';
        } else {
            if (parseInt(numeroChute) > numeroSecreto) {
                elementoDica.innerHTML = 'O número secreto é menor <i class="fa-solid fa-arrow-down"></i>';
                capturaVoz ();
            } else {
                elementoDica.innerHTML = 'O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i>';
                capturaVoz ();
            }    
        }
    }
    
}