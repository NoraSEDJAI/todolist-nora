const modifyTodoList = (id, newname, todoLists) => {
  console.log(newname);
  console.log(
    todoLists
      .filter((todoList) => Number(todoList.id) === id)
      .map((todoList) => (todoList.name = newname))
  );
};

export default modifyTodoList;
