import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "@mui/material";
import lightTheme from "./theme";
import darkTheme from "./theme";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import FindUs from "./pages/FindUs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <CartProvider>
      <Header></Header>
      <div style={{ marginBottom: "150px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/find-us" element={<FindUs />} />
        </Routes>
      </div>

      <Footer></Footer>
    </CartProvider>
  );
};
