const passwords = {
    passwordOne: document.getElementById('password-1'),
    passwordTwo: document.getElementById('password-2')
  };
  
  function compare() {
    const comparePassword1 = passwords.passwordOne.value
    const comparePassword2 = passwords.passwordTwo.value
  
    if(comparePassword1 === comparePassword2){
        alert("Tu contraseña es correcta")
    }else if(comparePassword1 !== comparePassword2){
        alert('tus credenciales no coinciden')
    }else if(comparePassword1 === '' && comparePassword2 === ''){
        alert('No pueden estar vacias')
    }
  }
  