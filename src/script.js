let criarTarefa = document.querySelector('#criar-tarefa');
let inputText = document.querySelector('#texto-tarefa');
let olList = document.querySelector('#lista-tarefas');


// Adicionar lista
function CreateLi(){
  let criarLista = document.createElement('li');
  criarLista.innerText = inputText.value;
  criarLista.className = 'liColor';
  olList.appendChild(criarLista);
  inputText.value = ''
}
criarTarefa.addEventListener('click', CreateLi);

// Seleciona e remove a classe selected que contem a color grey
function selectedBackgroundItem(event) {
  const liColor = document.querySelectorAll('.liColor');

  if (liColor) {

    for (let index = 0; index < liColor.length; index += 1) {
      liColor[index].classList.remove('selected');
    }

    if (event.target.classList.contains('liColor')) {
      event.target.classList.add('selected');
    }
  }
}
olList.addEventListener('click', selectedBackgroundItem);

// Cria e remove o textDecoration
function textDecoration(event) {
  const liColor = document.querySelectorAll('.liColor');

  if (liColor) {

    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed')
    } 
    
    else if (event.target.classList.contains('liColor')) {
      event.target.classList.add('completed')
    }
  }
}
olList.addEventListener('dblclick', textDecoration)

// Botão limpar lista
const cleanList = document.querySelector('#apaga-tudo');

function cleanListButton() {
  const liColor = document.querySelectorAll('.liColor');

  for (let index = 0; index < liColor.length; index += 1) {

    liColor[index].remove()
    liColor[index].remove(saveTarefa())
  }
}
cleanList.addEventListener('click', cleanListButton)

// clicar no botão para remover todos que estão marcados
const removeAllDone = document.querySelector('#remover-finalizados');

function removeAllTextDecorations() {
  const liColor = document.querySelectorAll('.liColor');

  for (let index = 0; index < liColor.length; index++) {

    if(liColor[index].classList.contains('completed')) {
      liColor[index].remove()
    }
  }
}
removeAllDone.addEventListener('click', removeAllTextDecorations)

// salvar no localStorage
const saveLocal = document.querySelector('#salvar-tarefas');
function saveTarefa() {
  localStorage.setItem('items', JSON.stringify(olList.innerHTML))
}
saveLocal.addEventListener('click', saveTarefa)

// Mostrar na tela os salvos
window.onload = function getTarefa() {
  const items = JSON.parse(localStorage.getItem('items'));

  if (items) {
    olList.innerHTML = items
  }
};
