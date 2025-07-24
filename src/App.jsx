import { lazy } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import Features from "./components/Features";
const CategoryGrid = lazy(() => import("./components/CategoryGrid"));

function App() {
  return (
    <div className="bg-zinc-800 text-white scroll-mb-0">
      <Nav />
      <Mainroutes />
      <CategoryGrid />
      <Features />
    </div>
  );
}

export default App;
