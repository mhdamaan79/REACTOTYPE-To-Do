import NavBar from "./components/NavBar";
import AddToDo from "./components/AddToDo";
import ToDos from "./components/ToDos";
import "./App.css";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <main>
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <h2>REACTOTYPE TO-DO</h2>
      </div>
      <NavBar />
      <AddToDo />
      <ToDos />
    </main>
  );
}

export default App;
