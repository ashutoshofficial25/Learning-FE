// const headerTitle = document.getElementById("header-title");
// headerTitle.innerText = "Todo title";

// //classes
// const listItems = document.getElementsByClassName("list-group-item");
// console.log(listItems); //array

//get elementby tag name

const li = document.getElementsByTagName("li");

let todos = [];

const todo = document.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = document.getElementById("todo").value;

  if (data == "") {
    let err = document.getElementById("errormsg");
    err.textContent = "Please enter some value";
  } else {
    todos.push(data);

    console.log(todos);

    let list = document.getElementById("todos");

    let todolist = document.createElement("li");
    todolist.setAttribute(
      "class",
      "list-group-item mb-2 d-flex justify-content-between"
    );
    todolist.appendChild(document.createTextNode(data));

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.setAttribute("class", "btn btn-danger btn-sm");
    todolist.appendChild(button);
    list.appendChild(todolist);
  }
});

console.log(todos);
