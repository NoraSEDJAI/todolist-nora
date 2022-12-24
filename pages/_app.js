import "../styles/globals.css";
import { useState, createContext } from "react";

const context = createContext();

const App = ({ Component, pageProps }) => {
  const [todoLists, setTodoLists] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const [idSelected, setIdSelected] = useState(0);

  const startId = "digit";

  return (
    <context.Provider
      value={{
        todoLists,
        setTodoLists,
        currentId,
        setCurrentId,
        idSelected,
        setIdSelected,
        startId,
      }}
    >
      <Component {...pageProps} />
    </context.Provider>
  );
};

export default App;
export { context };
