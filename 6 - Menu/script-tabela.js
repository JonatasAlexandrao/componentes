const $container = document.querySelector('.container')


const $newProduct = document.createElement('div')
$newProduct.classList.add('product')

const $title = document.createElement('h2')
$title.classList.add('productTitle')
const textTitle = document.createTextNode('title')
$title.appendChild(textTitle)


const $info = document.createElement('p')
const textInfo = document.createTextNode('(ifno asdfasd  asdasd ddf )')
$info.appendChild(textInfo)



$container.appendChild($newProduct)
$newProduct.appendChild($title)
$newProduct.appendChild($info)





fetch("tabela.json")
  .then(response => response.json())
  .then(data => {
    //console.log(data)
    /*const product =  data.map(element => {
      //console.log(element)
       return element.produto
     });*/
     //console.log(product.length)

     //console.log(data.produto)
     tabela(data)
    /*data.redulce()*/

    /*const $p = document.createElement('p')
    const texP = document.createTextNode('xxx')
    $p.appendChild(texP)*/
    
  })

  function tabela(product) {
    const $table = document.createElement('table')
    const $thead = document.createElement('thead')
    const $tbody = document.createElement('tbody')

    $newProduct.appendChild($table)
    $table.appendChild($thead)
    $table.appendChild($tbody)

    const $trHead = document.createElement('tr')   
    $thead.appendChild($trHead)

    const header = Object.keys(...product)

    header.forEach(item => {
      if(item == 'produto') {
        item = ''
      }       
      const $th = document.createElement('th')
      const text = document.createTextNode(item)
      $th.appendChild(text)
      $trHead.appendChild($th)
    })

    product.forEach(prod => {

      const value = Object.values(prod)
      
      const $tr = document.createElement('tr')   
      $tbody.appendChild($tr)

     value.forEach(item => {
       const $td = document.createElement('td')
       const text = document.createTextNode(item)
       $td.appendChild(text)
       $tr.appendChild($td)
     })


      


    });
  }



  
/*
const $tr = document.createElement('tr')
const $td = document.createElement('td')
$td.appendChild(document.createTextNode('Bolinha de queijo'))
const $td1 = document.createElement('td')
$td1.appendChild(document.createTextNode('18,00'))
const $td2 = document.createElement('td')
$td2.appendChild(document.createTextNode('130,00'))




$newProduct.appendChild($table)
$table.appendChild($tbody)
$tbody.appendChild($tr)
$tr1.appendChild($td)
$tr1.appendChild($td1)
$tr1.appendChild($td2)*/