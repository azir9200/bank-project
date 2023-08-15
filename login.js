document.getElementById('btn-submit').addEventListener('click', function () {
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  const userPassword = document.getElementById('user-password');
  const password = userPassword.value;
  if (email === 'araf@mail.com' && password === 'secret') {
    window.location.href = 'deposit.html';
  }
  else {
    alert('tui tor bapeer sele')
  }
  console.log(email, password);


})