
$btnCadastrar = document.querySelector('.btnCadastrar')
$popup = document.querySelector('.popupBox')
$iconClose = document.querySelector('.iconClose')
$btnSignUp = document.querySelector('.signUp')
$inputEmail = document.querySelector('.inputEmail')



$btnCadastrar.addEventListener('click', function() {
  $popup.style.display = 'block'
  $btnCadastrar.style.display = 'none'
  $inputEmail.focus()
})

$iconClose.addEventListener('click', function() {
  $popup.style.display = 'none'
  $btnCadastrar.style.display = 'block'
  $inputEmail.value = ''
})

$btnSignUp.addEventListener('click', function() { 

  if($inputEmail.value === '') {
    $inputEmail.focus()
  }
  else {
    alert('Obrigado por se inscrever!')
    $popup.style.display = 'none'
    $btnCadastrar.style.display = 'block'
    $inputEmail.value = ''
  }
  
})

