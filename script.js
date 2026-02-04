function togglePassword() {
    console.log('clicou no icone');

    const inputPassword = document.getElementById('password')
    const eyeIcon = document.getElementById('eyeIcon')

    //    if (inputPassword.type === 'password') {
    //     inputPassword.type = 'text'
    //     eyeIcon.classList.remove('bi-eye')
    //     eyeIcon.classList.add('bi-eye-slash')
    // } else {
    //     inputPassword.type = 'password'
    //     eyeIcon.classList.remove('bi-eye-slash')
    //     eyeIcon.classList.add('bi-eye')
    // }
    // }

    // OBS: O código acima funciona perfeitamente, mas podemos deixá-lo mais compacto/limpo e mais profissional.


    // A forma a seguir é uma forma mais compacta de escrever o código acima:

    const isPassword = inputPassword.type === 'password';
    // Aqui criamos uma variável Booleana (verdadeiro ou falso).

    inputPassword.type = isPassword ? 'text' : 'password';
    // O sinal de ? e : funciona como um if/else compacto:

    eyeIcon.classList.toggle('bi-eye', !isPassword);
    // Se isPassword era falso (ou seja, o campo virou senha agora), o !isPassword vira verdadeiro e ele adiciona o ícone do olho aberto.

    eyeIcon.classList.toggle('bi-eye-slash', isPassword);
    // Se isPassword era verdadeiro (o campo virou texto agora), ele adiciona o olho cortado.
}