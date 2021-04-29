
$body = document.querySelector('body')

$home = document.querySelector('.home')
$titleHome = document.querySelector('.home > .title')
$checkHome = document.querySelector('#checkHome')
$iconHome = document.querySelector('.icon.-home')

$user = document.querySelector('.user')
$titleUser = document.querySelector('.user > .title')
$checkUser = document.querySelector('#checkUser')
$iconUser = document.querySelector('.icon.-user')

$contact = document.querySelector('.contact')
$titleContact = document.querySelector('.contact > .title')
$checkContact = document.querySelector('#checkContact')
$iconContact = document.querySelector('.icon.-contact')

$help = document.querySelector('.help')
$titleHelp = document.querySelector('.help > .title')
$checkHelp = document.querySelector('#checkHelp')
$iconHelp = document.querySelector('.icon.-help')

$settings = document.querySelector('.settings')
$titleSettings = document.querySelector('.settings > .title')
$checkSettings = document.querySelector('#checkSettings')
$iconSettings = document.querySelector('.icon.-settings')


$home.addEventListener('click', function() {
  clearTitles()
  $checkHome.checked = true
  $home.classList.add('-active')
  $iconHome.classList.add('-active')
  $body.style.backgroundColor = 'rgb(0, 134, 78)'

})

$user.addEventListener('click', function() {
  clearTitles()
  $checkUser.checked = true
  $user.classList.add('-active')
  $iconUser.classList.add('-active')
  $body.style.backgroundColor = 'rgb(194, 94, 0)'
})

$contact.addEventListener('click', function() {
  clearTitles()
  $checkContact.checked = true
  $contact.classList.add('-active')
  $iconContact.classList.add('-active')
  $body.style.backgroundColor = 'rgb(0, 74, 134)'
})

$help.addEventListener('click', function() {
  clearTitles()
  $checkHelp.checked = true
  $help.classList.add('-active')
  $iconHelp.classList.add('-active')
  $body.style.backgroundColor = 'rgb(96, 0, 134)'
})

$settings.addEventListener('click', function() {
  clearTitles()
  $checkSettings.checked = true
  $settings.classList.add('-active')
  $iconSettings.classList.add('-active')
  $body.style.backgroundColor = 'rgb(134, 0, 40)'
})


// =========================================

function clearTitles() {
  $home.classList.remove('-active')
  $iconHome.classList.remove('-active')
  $user.classList.remove('-active')
  $iconUser.classList.remove('-active')
  $contact.classList.remove('-active')
  $iconContact.classList.remove('-active')
  $help.classList.remove('-active')
  $iconHelp.classList.remove('-active')
  $settings.classList.remove('-active')
  $iconSettings.classList.remove('-active')
}
