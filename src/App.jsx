import Navbar from "./components/layout/Navbar"

import { Route, Routes } from "react-router";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Product from "./components/pages/Product";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

function App() {
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
