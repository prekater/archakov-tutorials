const inputEL = document.getElementById('my-input');

let tasks = ['Я хочу сделать список задач'];

const addBtn = document.getElementById('my-btn');
let content = document.querySelector('.content-wrapper');

let ul = document.createElement('ul');

ul.className = 'todo-list';

content.prepend(ul);

let ulEl = document.querySelector('ul');

function render() {
  ulEl.innerHTML = '';
  tasks.forEach((task, index) => {
    if (task) {
      ulEl.insertAdjacentHTML(
        'beforeend',
        `<li class="todo-item"><span class="item-text">${task}</span><button class="del-btn" id="del-btn-${index}" data-index=${index}>Х</button></li>`
      );
    }
  });
}

function handleClickAdd() {
  inputEL.value && tasks.push(inputEL.value);
  inputEL.value = '';
  render();
}

addBtn.onclick = handleClickAdd;

window.onload = render;

ulEl.onclick = function (event) {
  let target = event.target;

  if (target.className !== 'del-btn') return;

  handleClickRemove(target);
};

function handleClickRemove(param) {
  tasks.splice(++param.dataset.index, 1);
  render();
}
