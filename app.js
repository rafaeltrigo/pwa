// Armazenar referência à lista de tarefas
const todoList = document.getElementById('todoList');

// Função para adicionar uma nova tarefa
function addTask() {
  const newTaskInput = document.getElementById('newTask');
  const taskText = newTaskInput.value.trim();

  // Verificar se o campo de entrada não está vazio
  if (taskText !== '') {
    // Criar um novo item de lista
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Adicionar o item à lista
    todoList.appendChild(taskItem);

    // Limpar o campo de entrada
    newTaskInput.value = '';
  }
}

// Registrar o Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(registration => {
      console.log('Service Worker registrado com sucesso:', registration);
    })
    .catch(error => {
      console.log('Falha ao registrar o Service Worker:', error);
    });
}
