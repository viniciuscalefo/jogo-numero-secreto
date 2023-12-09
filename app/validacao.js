function verificarValidade(chute){
  const numero = +chute

  if (chute.toLowerCase() == 'game over') {
    document.body.innerHTML = `
    <h2>Game Over!</h2>
    <h3>O jogo terminou.</h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
    document.body.classList.add("game-over");
    return;
}

  if (chuteInvalido(numero)){
    elementoChute.innerHTML += '<div> Valor Inválido </div>'
    console.log(numero)
    return
  }
  if(numeroMaiorOuMenor(numero)){
    elementoChute.innerHTML += `<div> Valor inválido : o numero secreto precisa estra entre ${menorValor} e ${maiorValor}</div>`
    return

  }else if (numero > numeroSecreto){
    elementoChute.innerHTML += `<div> O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
  }else{
    elementoChute.innerHTML += `<div> O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
  }

  if(numero==numeroSecreto){
    document.body.innerHTML =`
    <h2>Você acertou</h2>
    <h3>O número secreto era ${numeroSecreto} </h3>
    
    <button id = 'jogar-novamente' class='btn-jogar'>Jogar Novamente</button>`
  }
 
}

function chuteInvalido(numero){
  return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero){
  return numero > maiorValor || numero < menorValor
}

function gameOver(){
  `
    <h2>GAME OVER </h2>
    
    <button id = 'jogar-novamente' class='btn-jogar'>Jogar Novamente</button>`
  
}

document.body.addEventListener('click', e =>{
  if(e.target.id == 'jogar-novamente'){
    window.location.reload()
  }
})

