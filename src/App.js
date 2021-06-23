//import logo from './logo.svg';
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import Accordion from "./Components/Accordion/Accordion";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      

      <Accordion />

      <Footer />
    </div>
  );
}

export default App;
