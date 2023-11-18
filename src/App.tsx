import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import FindUs from "./pages/FindUs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <CartProvider>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/find-us" element={<FindUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};
