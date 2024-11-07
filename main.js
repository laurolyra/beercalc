import './style.css'

const beerForm = document.getElementById('beer-form');

const quant1 = document.getElementById('beer1')
const price1 = document.getElementById('price1')

const quant2 = document.getElementById('beer2')
const price2 = document.getElementById('price2')

const results = document.getElementById('results');

quant1.addEventListener('keydown', clearResult)
price1.addEventListener('keydown', clearResult)
quant2.addEventListener('keydown', clearResult)
price2.addEventListener('keydown', clearResult)

results.style.display = 'none'

export function buttonClick(event) {
  event.preventDefault()
  console.log('click')
  if(results.style.display === 'none'){
    return results.style.display = 'block'
  }
  return results.style.display = 'none'
}

function calc (quant, price){
  if (isNaN(parseFloat(quant))){
    return null
  }
  return parseFloat(quant.replace(',', '.')) / parseFloat(price.replace(',', '.'))
}

function clearResult () {
  return results.style.display = 'none'
}

beerForm.addEventListener('submit', function(event) {
  buttonClick(event);

  console.log('primeira cerveja:', quant1.value, 'preço:', price1.value)
  console.log('segunda cerveja:', quant2.value, 'preço:', price2.value)

  const calc1 = calc(quant1.value, price1.value)
  const calc2 = calc(quant2.value, price2.value)

  if (calc1 === null || calc2 === null){
    return results.innerHTML = 'reveja os dados inseridos.'
  }

  if (calc1 > calc2){
    return results.innerHTML = 'A cerveja 1 tá mais em conta'
  }

  if (calc2 > calc1){
    return results.innerHTML = 'A cerveja 2 tá mais em conta'
  }

  return results.innerHTML = 'Tanto faz! pega a mais gelada!'


});

