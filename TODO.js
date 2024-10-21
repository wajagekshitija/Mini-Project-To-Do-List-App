//let todoList = [];

let todoList = [];
showList();

function addTODO()
{
  //select that element
  let inputElement = document.querySelector('#todo-input');
  let inputDate = document.querySelector('#todo-date');
  //find out values in that tags and add it into that variables
  let todoItem = inputElement.value;
  let todoDate = inputDate.value;
  //todoList.push(todoItem);
  //push that element into the todoList array with item name and due date with the halp od push element
  todoList.push({item: todoItem,dueDate: todoDate});
  //empty that input box after adding element in that
  inputElement.value = '';
  inputDate.value = '';
  showList();
}

function showList()
{
  let displayElement = document.querySelector('.todo-container');
  let newHtml = '';
 // displayElement.innerText = '';
  for(i=0; i<todoList.length; i++){
    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    let {item , dueDate } = todoList[i];
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button  class = "button-delete" onClick="todoList.splice(${i}, 1); showList() ">Delete</button>
    `;
    
   // displayElement.innerText = displayElement.innerText + '\n' + todoList[i];
    }

  displayElement.innerHTML = newHtml;
}