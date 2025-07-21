import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";

function App() {
  return (
    <div className="bg-zinc-800 text-white scroll-mb-0">
      <Nav />
      <Mainroutes />
    </div>
  );
}

export default App;
