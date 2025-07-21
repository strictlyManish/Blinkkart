import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";


const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Shop = lazy(() => import("../pages/Shop"));
const Contact = lazy(() => import("../pages/Contact"));
const Cart = lazy(() => import("../pages/Cart"));
const Login = lazy(() => import("../pages/Login"));

function Mainroutes() {
  return (
    <Suspense fallback={<div className="text-center py-10 text-white">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Suspense>
  );
}

export default Mainroutes;
