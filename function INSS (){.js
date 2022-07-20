function INSS (){
   
    var salario = prompt("Digite o salário:")
    var contribuicao = 0
    var resultado = []
    
    console.log(salario)
      
    if (salario > 6101.06){
      salario = 6101.06
    }
  
    if (salario <= 1045 && salario >= 0){
      contribuicao = salario * 0.075
    }else if (salario >= 1045.01 && salario <= 2089.60){
      contribuicao = salario * 0.09
    } else if (salario >= 2089.61 && salario <= 3134.40){
      contribuicao = salario * 0.12
    } else if (salario >= 3134.41 && salario <= 6101.06){
      contribuicao = salario * 0.14
    } else {
      console.log("Salário inválido!")
    }
  
    resultado.push(contribuicao.toFixed(2))
    resultado.push(contribuicao.toFixed(2)*13.3)
    resultado.push(Math.round(salario/contribuicao))
  
    /*
    console.log("Valor da Contribuição ao INSS mensal | Valor da contribuição ao INSS anual | Questão C \n",resultado)
  */
    
    console.log("Valor da Contribuição ao INSS mensal\n",resultado[0])
    console.log("Valor da Contribuição ao INSS anual\n",resultado[1])
    console.log("Questão C\n",resultado[2])
  }
  
  INSS()