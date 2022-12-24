const removeTodoList = (id, todoLists, startId) => {
  todoLists.splice(
    todoLists.findIndex((todoList) => Number(todoList.id) === id),
  );
  document.querySelector("#" + startId + String(id)).remove();
  return null;
};

export default removeTodoList;
