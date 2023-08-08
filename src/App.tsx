import NavBar from "./components/NavBar";
import AddToDo from "./components/AddToDo";
import ToDos from "./components/ToDos";
import "./App.css";

function App() {
  return (
    <main>
      <h1>REACTOTYPE TODO</h1>
      <NavBar />
      <AddToDo />
      <ToDos />
    </main>
  );
}

export default App;
