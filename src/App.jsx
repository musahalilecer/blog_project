import "./App.css";
import Card from "./components/molecules/card";
import Home from "./components/pages/home";
import About from "./components/pages/about"
import Images from "./components/pages/images";
import Navbar from "./components/organisms/Navbar";
import Login from "./components/templates/Login"
import Detail from "./components/pages/detail"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element= {<Home />}/>
          <Route path="/about" element= {<About />}/>
          <Route path="/image" element= {<Images />}/>
          <Route path="/" element= {<Login />}/>
          <Route path="detail/:id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
