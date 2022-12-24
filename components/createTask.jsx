import increaseID from "./increaseId";

const createTask = (name, setTodoLists, setCurrentId, currentId) => {
  setTodoLists((todoList) => [
    ...todoList,
    { id: currentId, name: String(name), todos: [] },
  ]);
  increaseID(currentId, setCurrentId);
};


export default createTask;
