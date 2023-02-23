import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Cards />
    </div>
  );
}

export default App;
