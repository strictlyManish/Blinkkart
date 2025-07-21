import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import "./index.css";
import { WrapperProvider } from "./context/WrapperProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WrapperProvider>
      <App />
      <ToastContainer position="top-right" />
    </WrapperProvider>
  </BrowserRouter>
);
