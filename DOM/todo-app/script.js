// const headerTitle = document.getElementById("header-title");
// headerTitle.innerText = "Todo title";

// //classes
// const listItems = document.getElementsByClassName("list-group-item");
// console.log(listItems); //array

//get elementby tag name

// const li = document.getElementsByTagName("li");

// let todos = [];

// const todo = document.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const data = document.getElementById("todo").value;

//   if (data == "") {
//     let err = document.getElementById("errormsg");
//     err.textContent = "Please enter some value";
//   } else {
//     todos.push(data);

//     console.log(todos);

//     let list = document.getElementById("todos");

//     let todolist = document.createElement("li");
//     todolist.setAttribute(
//       "class",
//       "list-group-item mb-2 d-flex justify-content-between"
//     );
//     todolist.appendChild(document.createTextNode(data));

//     const button = document.createElement("button");
//     button.textContent = "Delete";
//     button.setAttribute("class", "btn btn-danger btn-sm");
//     todolist.appendChild(button);
//     list.appendChild(todolist);
//   }
// });

// console.log(todos);

//

//variables
const form = getElement("addForm");
const todoList = getElement("todos");
const todo = getElement("todo");
const filter = getElement("filter");

const liItems = document.getElementsByTagName("li");

//eventsListeners

//form submit
form.addEventListener("submit", addTodo);

//click event on delete

todoList.addEventListener("click", deleteTodo);

//key up  event on search

filter.addEventListener("keyup", filterTodos);

//functions

function getElement(id) {
  return document.getElementById(id);
}

//add todo
function addTodo(event) {
  event.preventDefault();

  if (todo.value == "") {
    alert("todo should not be empty");
    return;
  }

  let newTodo = todo.value;

  //create a new li element

  const li = document.createElement("li");
  //add class

  // li.setAttribute(
  //   "class",
  //   "list-group-item mb-2 d-flex justify-content-between"
  // )
  li.className = "list-group-item mb-2 ";

  //set todo name
  li.innerText = newTodo;

  //cretate delete btn

  let deleteBtn = document.createElement("button");

  deleteBtn.innerText = "delete";

  deleteBtn.className = "btn btn-danger btn-sm delete";

  //append btn in list
  li.appendChild(deleteBtn);

  //append listitem to list
  todoList.appendChild(li);

  //after submit empty input field

  todo.value = "";
}

//delete todo
function deleteTodo(event) {
  if (event.target.classList.contains("delete")) {
    let result = confirm("Are you sure");
    if (result) {
      let li = event.target.parentElement;
      todoList.removeChild(li);
    }
  }
}

//filter todo
function filterTodos(event) {
  //convert to lowercase
  let searchedText = event.target.value.toLowerCase();

  Array.from(liItems).forEach((item) => {
    let todoName = item.firstChild.textContent;

    if (todoName.toLowerCase().indexOf(searchedText) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
