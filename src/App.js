import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <h4>Hello, Welcome to My Blog</h4>
        <Container />
      </div>
      <Footer />
    </div>
  );
}

export default App;
