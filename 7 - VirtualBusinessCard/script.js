

const $card = document.querySelector(".card")
const $imgFace = document.querySelector(".socialMedia .face")
const $imgInstagram = document.querySelector(".socialMedia .instagram")
const $imgWhatsapp = document.querySelector(".socialMedia .whatsapp")

const $btnMode = document.querySelector(".menu .btnMode")
//console.log($btnDarkMode)


$btnMode.addEventListener("click", () => {
  const darkMode = $btnMode.classList.contains("dark-mode")
  const lightMode = $btnMode.classList.contains("light-mode")
  if(darkMode){
    $btnMode.classList.replace("dark-mode", "light-mode")
    $card.classList.replace("-dark", "-light")
  }
  else if(lightMode){
    $btnMode.classList.replace("light-mode", "dark-mode")
    $card.classList.replace("-light", "-dark")
  }
})




const darkModeSocialIcons = $card.classList.contains("-dark")
if(darkModeSocialIcons){
  $imgFace.setAttribute("src", "./svg/Facebook_white.svg")
  $imgInstagram.setAttribute("src", "./svg/Instagram_white.svg")
  $imgWhatsapp.setAttribute("src", "./svg/WhatsApp_white.svg")
}




