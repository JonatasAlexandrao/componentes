

const $iconFace = document.querySelector(".icon-socialMedia.-face")
const $iconInsta = document.querySelector(".icon-socialMedia.-instagram")
const $iconWhatsapp = document.querySelector(".icon-socialMedia.-whatsapp")

//console.log($iconFace)
$iconFace.addEventListener("click", () => {
  $iconFace.classList.toggle("-color")
})

$iconInsta.addEventListener("click", () => {
  $iconInsta.classList.toggle("-color")
})

$iconWhatsapp.addEventListener("click", () => {
  $iconWhatsapp.classList.toggle("-color")
})

