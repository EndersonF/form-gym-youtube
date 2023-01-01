const togglePasswordVisibility = (inputPasswordId, eyeIconId) => {
  // Obter referências para os elementos de entrada de senha e ícone de olho
  const inputPassword = document.getElementById(inputPasswordId),
    eyeIcon = document.getElementById(eyeIconId);

  // Adicionar um manipulador de evento de clique ao ícone de olho
  eyeIcon.addEventListener('click', () => {
    // Alternar o tipo de senha para texto e vice-versa
    inputPassword.type =
      inputPassword.type === 'password' ? 'text' : 'password';

    // Adicionar ou remover a classe visibilidade do ícone de olho
    eyeIcon.classList.toggle('ri-eye-off-line');
  });
};

// Chamar a função com os IDs dos elementos de entrada de senha e ícone de olho
togglePasswordVisibility('inputPasswordId', 'eyeIconId');
