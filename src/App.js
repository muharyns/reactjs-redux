import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useParams,
} from "react-router-dom";
import { Counter } from "./components/Counter";
import { SetCounter } from "./components/SetCounter";
import TodoList from "./pages/TodoList";
import { useSelector, useDispatch } from "react-redux";
import store from "./store";

function App() {
  // const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter);
  // const todos = useSelector((state) => state.todos);

  //console.log(todos);
  // Log the initial state
  // console.log("Initial state: ", store.getState());
  // const unsubscribe = store.subscribe(() =>
  //   //console.log("State after dispatch: ", store.getState())
  // );
  //store.dispatch({ type: "todos/todoAdded", payload: "Learn about actions" });

  //unsubscribe();
  //store.unsubscribe();
  //dispatch({ type: "todos/todoAdded", payload: "eee"});
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <SetCounter />
    //   </header>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
