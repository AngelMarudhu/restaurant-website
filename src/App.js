import React from "react";
import "./index.css";
import "./App.css";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  Menu,
} from "./container/import";

import { Navbar } from "./components/import";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
