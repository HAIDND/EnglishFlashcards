import { useState } from "react";
import Header from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Header />
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
