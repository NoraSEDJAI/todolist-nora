import increaseID from "./increaseId";

const createTask = (name, setTodoLists, setCurrentId, currentId) => {
  setTodoLists((todo) => [
    ...todo,
    { id: currentId, name: String(name)},
  ]);
  increaseID(currentId, setCurrentId);
};


export default createTask;
