import NavBar from "./components/NavBar";
import AddToDo from "./components/AddToDo";
import ToDos from "./components/ToDos";

function App() {
  return (
    <div>
      <h1>REACTOTYPE TODO</h1>
      <NavBar />
      <AddToDo />
      <ToDos />
    </div>
  );
}

export default App;
