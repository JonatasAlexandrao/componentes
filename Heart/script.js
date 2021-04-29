
svg = document.querySelector("svg")
svg.addEventListener('click', function(){

  contorno = document.querySelector("svg path.st1").classList.toggle("-active")
  preenchimento = document.querySelector("svg path.st0").classList.toggle("-active")

})




console.log(svg)