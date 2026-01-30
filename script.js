function togglePassword() {
    console.log('clicou no icone');

    const inputPassword = document.getElementById('password')
    const eyeIcon = document.getElementById('eyeIcon')
    
    inputPassword.type = 'text'
    eyeIcon.classList.remove('bi-eye')
    eyeIcon.classList.add('bi-eye-slash')
}