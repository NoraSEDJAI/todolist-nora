import { useContext } from "react";
import { context } from "../pages/_app";
import modifyTodoList from "../components/modifyTodoList";
import addTodoList from "../components/addTodoList";
import createTask from "../components/createTask";
import removeTodoList from "../components/removeTodoList";
import Button from "../components/CreateButton";
import { useState } from "react";
import { Formik, Form, Field } from "formik";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [todoListModify, setTodoListModify] = useState(false);
  const [taskCreate, settaskCreate] = useState(false);

  const {
    todoLists,
    setTodoLists,
    setCurrentId,
    currentId,
    idSelected,
    setIdSelected,
    startId,
  } = useContext(context);

  const initialValues = {
    name: "",
  };

  const newId = (id) => {
    setIdSelected(id);
  };

  const handleSubmit = (values) => {
    addTodoList(String(values.name), setTodoLists, setCurrentId, currentId);
    setIsOpen(false);
  };

  const createTask = (values) => {
    createTask(idSelected, String(values.name), todoLists, setCurrentId, currentId);
    settaskCreate(false);
  }

  const modifyTodoLists = (values) => {
    modifyTodoList(idSelected, String(values.name), todoLists);
    setTodoListModify(false);
  };

  function setIsOpenValue(value) {
    setIsOpen(value);
  }

  const deleteTodoList = () => {
    removeTodoList(idSelected, todoLists, startId);
  };

  return (
    <>

      <header>
        <nav className="flex border  border-solid border-transparent border-b-gray-300 gap-2">
          <div className="flex">
            {todoLists.map((item) => (
              
              <button
                className="border rounded-t-xl px-3 py-2 border-solid border-gray-300 border-b-transparent"
                id={startId + `${+item.id}`}
                key={item.id}
                onClick={() => newId(item.id)}
              >{item.name}</button>
              
            ))}
          </div>
          <Button
            className="border rounded-t-xl px-3 py-2 border-solid border-gray-300 border-b-transparent"
            text="+"
            onClick={() => setIsOpenValue(true)}
          />
        </nav>
      </header>

      <nav className="flex justify-between border p-2 border-solid border-transparent border-b-gray-300 gap-2">
        <div className="flex justify-between">
          <button className="border rounded-xl px-3 py-2 border-solid border-gray-300"
          onClick={() => settaskCreate(true)}>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          </button>          
          <button
            className="border rounded-xl px-3 py-2 border-solid border-gray-300"
            onClick={() => setTodoListModify(true)}
          >
           <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
          </button>
          <button
            className="border rounded-xl px-3 py-2 border-solid border-gray-300"
            onClick={() => deleteTodoList()}
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </nav>

      <ul class="flex justify-between border p-2 border-solid border-transparent border-b-gray-300 gap-2">
        <li class="font-medium">Task </li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      </ul>
      <ul class="flex justify-between border p-2 border-solid border-transparent border-b-gray-300 gap-2">
        <li class="font-medium" type="checkbox">Task 2</li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      </ul>
      <ul class="flex justify-between border p-2 border-solid border-transparent border-b-gray-300 gap-2">
        <li class="font-medium">Task 3</li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      </ul>

      <div className={isOpen ? "visible" : "invisible"}>
        <div className="absolute bottom-0 h-screen w-screen bg-white rounded-xl">
          <div className="p-4">
              <div className="flex justify-between ml-3 mr-3">
                <h1 className="font-bold text-3xl mt-3">Create a new list</h1>
                <span className="cursor-pointer border-solid border-black-300" onClick={() => setIsOpenValue(false)}>X</span>
              </div>
            <p className="font-bold">Description</p>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <Field
                  type="text"
                  className="border border-solid border-blue-500 border-width-5 rounded"
                  name="name"
                />
              </Form>
            </Formik>
          </div>
          <div class="flex space-x-2 flex justify-end ">
            <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => setIsOpenValue(false)}>Cancel</button>
            <button type="button" class="inline-block px-6 pl-8 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => setIsOpenValue(true)}>Create</button>
          </div>
        </div>
      </div>

      <div className={todoListModify ? "visible" : "invisible"}>
        <div className="absolute bottom-0 h-screen w-screen bg-white rounded-xl">
          <div className="p-4">
            <header className="flex justify-between border border-solid border-transparent border-b-gray-300">
              <p className="font-bold text-xl">Update todo</p>
              <span className="cursor-pointer border-solid border-black-300" onClick={() => setTodoListModify(false)}>X</span>
            </header>
            <p className="font-bold">Description</p>
            <Formik initialValues={initialValues} onSubmit={modifyTodoLists}>
              <Form>
                <Field
                  type="text"
                  className="border border-solid border-gray-300 rounded"
                  name="name"
                />
                
          <div class="flex space-x-2 flex justify-end ">
            <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => setTodoListModify(false)}>Cancel</button>
            <button type="button" class="inline-block px-6 pl-8 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => setTodoListModify(true)}>Update</button>
          </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>

      <div className={taskCreate ? "visible" : "invisible"}>
        <div className="absolute bottom-0 h-screen w-screen bg-white rounded-xl">
          <div className="p-4">
            <header className="flex justify-between border border-solid border-transparent border-b-gray-300">
              <p className="font-bold text-xl">Add todo</p>
              <span className="cursor-pointer border-solid border-black-300" onClick={() => settaskCreate(false)}>X</span>
            </header>
            <p className="font-bold">Description</p>
            <Formik initialValues={initialValues} onSubmit={createTask}>
              <Form>
                <Field
                  type="text"
                  className="border border-solid border-gray-300 rounded"
                  name="name"
                />
              </Form>
            </Formik>
          </div>
          <div class="flex space-x-2 flex justify-end ">
            <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => settaskCreate(false)}>Cancel</button>
            <button type="button" class="inline-block px-6 pl-8 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => settaskCreate(true)}>Create</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
