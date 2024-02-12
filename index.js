//um array de objetos (Banco de perguntas)
const Perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de estilização web",
        "Uma linguagem de programação de back-end",
        "Uma linguagem de programação de front-end",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes é um tipo de dado em JavaScript?",
      respostas: [
        "Number",
        "Double",
        "Float",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um operador ternário em JavaScript?",
      respostas: [
        "Um operador que atua em três variáveis",
        "Um operador que retorna um valor baseado em uma condição",
        "Um operador usado apenas em loops",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'getElementById()' em JavaScript?",
      respostas: [
        "Retorna todos os elementos de um determinado tipo",
        "Retorna um elemento pelo seu ID",
        "Define o estilo de um elemento",
      ],
      correta: 1
    },
    {
      pergunta: "O que significa 'DOM' em JavaScript?",
      respostas: [
        "Data Object Model",
        "Document Object Model",
        "Dynamic Object Model",
      ],
      correta: 1
    },
    {
      pergunta: "Como você comentaria uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "' Este é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para exibir uma caixa de diálogo com uma mensagem?",
      respostas: [
        "alert()",
        "messageBox()",
        "prompt()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'push()' faz em JavaScript?",
      respostas: [
        "Remove o último elemento de um array",
        "Adiciona um elemento ao início de um array",
        "Adiciona um elemento ao final de um array",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
      respostas: [
        "Arredonda um número para o inteiro mais próximo",
        "Analisa uma string e retorna um número inteiro",
        "Converte um número em uma string",
      ],
      correta: 1
    }
  ];
  const corretas = new Set ()
  const totalDePerguntas = Perguntas.lenght
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  
  
  //laço de repetição
  for(const item of Perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3'). textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      //cada pergunta um indice
      dt.querySelector('input').setAttribute('name', 'pergunta-' + Perguntas.indexOf(item))
      //selecionar o indice entre as respostas de cada pergunta 
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if (estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
       
      }
   
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  };