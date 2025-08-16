import { Routes, Route } from "react-router-dom";
import MyntraNavbar from "./components/screens/Navbar";
import HomePage from "./components/screens/HomePage";
import ProductList from "./components/screens/ProductList";
import ProductDetails from "./components/screens/ProductDetails";
import Footer from "./components/screens/Footer";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <MyntraNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/details/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
