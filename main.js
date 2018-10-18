//Select the title input
var titleFld = $("#title");
//console.log(titleFld);
//Select todo list
var todos = $("#todos");

//Select the add button
var addBtn = $("#addBtn");
addBtn.click(addTodo);

// add todo
function addTodo() {
  console.log("Hello");
  //Get user input value for title
  var title = titleFld.val();
  //console.log(title);
  var note = $("<li>").append(title);
  note.addClass("list-group-item");
  //Create delete button
  var deleteBtn = $("<btn>")
    .addClass("btn btn-danger float-right")
    .click(deleteTodo);
  var deleteIcon = $("<i>").addClass("fas fa-trash");
  deleteBtn.append(deleteIcon);

  note.append(deleteBtn);
  todos.append(note);
  console.log(note);
}

//Delete list
function deleteTodo(e) {
  var todo = $(e.currentTarget).parent();
  todo.remove();
}
