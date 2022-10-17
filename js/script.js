//formula para calcular a cifra de CESAR: ("".charCodeAt(0)-65 + 7) % 26
const btn = document.querySelector('#codbotao1');
const btn2 = document.querySelector('#codbotao2');
var strConcatenada = '';
var strConcatenada2 = '';
var incremento;

function valoresSelect() {
  incremento = parseInt(document.querySelector("#incremento").value);
  //pegando o incremento que irá usar no deslocamento das letras.

}

btn.addEventListener("click", function (e) {

  const strRecebida = document.querySelector('#message') //recebendo dados do colaborador
  const valor = strRecebida.value.toUpperCase(); //deixando todas em maiuscula para facilitar o tratamento em um unico tamanho.

  var strNum;
  strConcatenada = '';
  // console.log(valor.length);
  // console.log(valorIncremento)


  for (var i = 0; i < valor.length; i++) {

    strNum = (valor.charCodeAt(i) - 65 + incremento) % 26 + 65
    //Este bloco percorre cada caracter da string e subtrai 65 para que possa estar da maneira mais entendida as posições de 0 a 25 de cada letra do alfabeto. a variável incremento faz com que desloque para outra posição codificando a palavra. O "%26" seria o 'mod' onde ele faz com que possamos percorrer e voltar ao inicio do alfabeto ou seja, caso possua resto, este será contado a partir da posícição inicial e soma-se 65 para voltar ao codigo ASC.

    strConcatenada += (String.fromCharCode(strNum));
    //concatenando a string para poder montar a palavra cifrada.

  } document.querySelector('#resultado').innerText = strConcatenada;
  //Colocamos a string no input.

  e.preventDefault();

});

btn2.addEventListener("click", function (e) {

  var strDecod = '';


  for (var i = 0; i < strConcatenada.length; i++) {
    //Como as opções de incremento vão até 7 no html, vai ter um momento em os numeros das posições até 7 não conseguirão fazer o processo reverso de percorrer ao contrário. Ou seja, a poição 0 = A para voltar 7 posiçoes até a letra T =19 por exemplo, teria que ser feito uma soma do total 26 + (-7) ou seja, posição 19. 
    if (strConcatenada.charCodeAt(i) - 65 - incremento >= 0) {
      strConcatenada2 = ((strConcatenada.charCodeAt(i) - 65 - incremento) % 26 + 65)
    } else {
      strConcatenada2 = strConcatenada.charCodeAt(i) - 65 - incremento + 26 + 65;
    } strDecod += String.fromCharCode(strConcatenada2);
    document.querySelector('#resultado2').innerText = strDecod;

  }
  e.preventDefault();
})
//abacate
//0123456
//HIHJHAL
//6

//26 - incremento = 19
//19 = T
//"T".charCodeAt = 84
//19 + 65 = 84