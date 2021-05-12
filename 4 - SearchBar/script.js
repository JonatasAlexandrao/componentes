
$btnSearch = document.querySelector('.btnSearch')
$btnClear = document.querySelector('.btnClear')
$iconSearch = document.querySelector('.btnSearch > svg')
$iconX = document.querySelector('.btnClear > svg')
$input = document.querySelector('input')

$btnClear.addEventListener('click', function() {
 
  $input.value = ''
  $iconX.style.animation = 'flip .5s'
  setTimeout(() => { $iconX.style.animation = 'none' }, 500)
  $input.focus()
})

$btnSearch.addEventListener('click', function() {

  $btnClear.classList.toggle("-minimize")
  $input.classList.toggle("-minimize")

  $iconSearch.classList.toggle("-minimize")
  $iconX.classList.toggle("-minimize")


  //setTimeout(() => { $input.classList.toggle("-minimize") }, 300)
  //$input.classList.toggle("-minimize")
  //setTimeout(() => { $btnClear.classList.toggle("-minimize") }, 500)
  //setTimeout(() => { $btnSearch.classList.toggle("-minimize") }, 700)
  
  //$btnSearch.classList.toggle("-minimize")
})

