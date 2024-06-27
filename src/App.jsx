import "./App.css";
import TodoProvider from "./context/TodoContext";
import LayoutTodo from "./components/LayoutTodo";

function App() {
  return (
    <>
      <TodoProvider>
        <LayoutTodo />
      </TodoProvider>
    </>
  );
}

export default App;
