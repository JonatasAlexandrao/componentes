
$menu = document.querySelector('.menu')
$hamburgerMenu = document.querySelector('.hamburgerMenu')

$hamburgerMenu.addEventListener('click', () => {
  $menu.classList.toggle('-active')
  $hamburgerMenu.classList.toggle('-close')
})