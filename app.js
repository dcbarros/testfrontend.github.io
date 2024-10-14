document.addEventListener('DOMContentLoaded', function() {
    const cadastroForm = document.getElementById('cadastroForm');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    cadastroForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmarSenha').value;

        // Verifica se as senhas coincidem
        if (senha !== confirmarSenha) {
            errorMessage.style.visibility = 'visible';
            successMessage.style.visibility = 'hidden';
        } else {
            errorMessage.style.visibility = 'hidden';
            successMessage.style.visibility = 'visible';
        }
    });
});
