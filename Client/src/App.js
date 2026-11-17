import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import './App.css';
import { useState } from "react";
import Loader from "./components/Loader";

function App() {
   const [loading, setLoading] = useState(true);
  return (
    <>
    {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && ( 
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contacts />
      <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="top-btn"
>
  ↑
</button>
    </div>

      )}
    </> 
  );
}


export default App;
