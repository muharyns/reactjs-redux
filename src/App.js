import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/Counter";
import { SetCounter } from "./components/SetCounter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <SetCounter />
      </header>
    </div>
  );
}

export default App;
