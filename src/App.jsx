import "./App.scss";
import { NavBar } from "./components/NavBar/Navbar";
import { Footer } from "./pages/Footer/Footer";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer/>
    </>
  );
}

export default App;
