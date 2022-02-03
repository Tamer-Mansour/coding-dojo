import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";
// import Fetch from "./APIs/Fetch";

function App() {
  return (
    <div className="con">
      <div>
        <NavBar />
        <Footer />
        {/* <Fetch /> */}
      </div>
    </div>
  );
}

export default App;
