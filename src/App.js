import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tamu from "./pages/Tamu";
import "animate.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tamu" element={<Tamu />} />
    </Routes>
  );
}

export default App;
