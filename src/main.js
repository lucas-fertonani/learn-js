// Nullish Coalescing Operator
//    || -> eh o 'or' do Javascript porem conta todos os valores nao validos
//    ?? -> eh o 'or' do Javascript, porem conta valores significativos entao: null, undefined
// 0, '', [], false, undefined, null == falsy, valores nao validos

// const nome = 'null';

// document.body.innerText = 'Seu nome eh: ' + (nome || 'Not found')
// document.body.innerText = 'Seu nome eh: ' + (nome ?? 'Not found')

// Objects
//   Objects sao conjuntos de dados guardando um conjunto de informacoes
//   E possivel colocar objetos dentro de objetos

//const dado_bancario = {
//  nome: "Lucas",
//  saldo: 1500.4,
//  profissao: "Programador",
//  cartoes: {
//    cartao_nubank: 'Valido',
//    cartao_pagseguro: 'Nao valido',
//  },
//};

// Desestruturação
// const nome = dado_bancario.nome
// const saldo = dado_bancario.saldo

//const { nome, saldo, profissao, senha = '123456a' } = dado_bancario

// Outros metodos de objects:

// in: e para verificar se tem alguma coisa que voce deseja dentro de objetos:
// true = que tem essa coisa,  false = que nao tem essa coisa

// keys: possivel verificar quais sao as chaves dentro dos objetos
// values: retornar todos valores das chaves do objeto
// JSON.stringfy: retornar todos os valores dos objetos dentro dos objetos
// entries: retornar cada valor e chave dentro de uma lista

// document.body.innerText = JSON.stringify(Object.entries(dado_bancario))
// document.body.innerText = JSON.stringify(Object.values(dado_bancario))
// document.body.innerText = "saldo" in dado_bancario;
// document.body.innerText = "name" in dado_bancario;
// document.body.innerText = Object.keys(dado_bancario)
// document.body.innerText = Object.values(dado_bancario)

// Rest operator

// Rest é usado como .. para pegar o resto das chaves e deixar um ou mais valores da variavel

// const jogos_1 = {
//   jogo_1: 'Minecraft',
//   jogo_2: 'Call of duty',
//   jogo_3: 'Grand Theft Auto 5',
//   jogo_4: 'Red Dead Redemption 2',
// }

//const {jogo_2, ...jogo_1} = jogos_1
//console.log((jogo_1))

// Pegar elementos de listas:
//const lista = [1,2,3,4,5,6,7,8,9,10]
//const first_number = lista[0]
//const last_number = lista[9]

//console.log(first_number)
//console.log(last_number)

// Short Syntax

// Short Syntax ele serve para voce dar const em variaveis e dentro do objeto,
// Voce nao precisa colocar o valor dentro dele so a chave

//const casa = '202'
//const rua = 'Rua cantagalo Maria spot'

//const informacoes_privadas = {
//  casa,
//  rua,
//}

//console.log(informacoes_privadas)

// Optional Chaining

//const dado_bancario = {
//  nome: "Lucas",
//  saldo: 1500.4,
//  profissao: "Programador",
//  cartoes: {
//    cartao_nubank: 'Valido',
//    cartao_pagseguro: 'Nao valido',
//  },
//};

//console.log(dado_bancario.cartoes?.cartao_nubank ?? 'Not found')

// Métodos de Arrays
const names = ["Lucas", "Leo", "Joao", "Matheus", "Rodrigo"];
const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Metodo 1 de Array:
for (const name of names) {
  console.log(name);
}

// Metodo 2 de Array:
names.forEach((name) => {
  // foreach: Nao consigo dar return
  console.log(name);
});

//Metodo 3 de Array:
const numbers_2 = numbers.map((numbers_1) => {
  // map: Consigo dar return
  return numbers_1 * 2;
});
console.log(numbers_2);

// Metodo 4 de Array:

function somar(num1, num2) {
  return num1 + num2;
}

console.log(somar(2, 5));

const numbers_3 = numbers.map((num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
// console.log(numbers_3)

// Os comandos mais importantes: map, filter, every, some, find, findindex, reduce

//Filter:
const market = [1000, 542, 343, 561, 992, 778, 847, 1];
const result = market.filter((elem) => {
  return elem % 2 == 0;
});
console.log(result);


//every
// every sempre retorna um numero booleano true ou false se eu coloco alguma condição
// vai retornar true ou false. 

const num = [30,31,32,33,34,35,36,37,38,39,40,'br']
const result_1 = num.every((account) => {
  return typeof account === 'number'})
console.log(result_1)


//some
//some eh igual ao every porem ele nao verifica todos os items ele verifica pelo 
// primeiro item se e igual a condição que eu coloco

const some = num.some( (fun) => {
  return fun == 31
})

console.log(some)
console.log(`Includes: ${num.includes(20)}`)


// find and findindex
//find: Encontra o primeiro item que entra na condição que eu coloco,
//findindex: Mesma função do find porem encontra o primeiro indice que se encaixa
//dentro da minha condição

const impar = num.find((encontra_impar) => encontra_impar % 3 === 1)
console.log(impar)

const impar_index = num.findIndex((encontra_impar_index) => encontra_impar_index % 3 === 1)
console.log(impar_index)


// reduce
// reduce: posso criar uma nova estrutura dentro do array


console.log('==========')

const lista = [5,4,3,2,1]
const resultado = lista.reduce(
  (acc, item) => {
    console.log(acc,item)
    return acc + item
  },
  0
)

console.log(resultado)



// Templates Literals

const num_cartao = 543279326534
console.log(`o numero do seu cartao eh: ${num_cartao}`)



// Promises
// Promises ve se o codigo vai dar reject ou uma response 
// entao ficara assim:

// .then => response
// .catch => reject
// fetch => localizar a informacao da string
// finally => vai ser executado indepedente se response ou reject
const multiplicacao_1 = (a, b) => new Promise((response, reject) => {
  setTimeout(() => {
    response(a * b)
  }, 2000);
})

console.log(multiplicacao(5, 2))
  // .then(result => {
  //   console.log(result)
  // })

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
      response.json().then(body => {
      console.log(body);
    })
  })
  
  .catch(reject => {
    console.log(reject)
  })

  .finally(
    console.log('Status code: 201')
  )


// Exportation and Importation in node.js

import { multiplicacao } from "../modules/modules";
console.log(multiplicacao(4 , 5))

import { divisao } from "../modules/modules";
console.log(divisao(10 , 2))

// Default Exportation
// Import uma funcao de um unico pacote

import potencia from "./unic_module/unique_module";
console.log(potencia(3,3))

// Import all modules
import * as modules from '../modules/modules';
console.log(modules)

// Rename a module
import { multiplicacao as multiplication } from "../modules/modules";
console.log(multiplication(3, 2))