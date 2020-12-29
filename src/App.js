import React, {useEffect} from "react";
import "./styles/App.scss";
import Header from "./styles/components/header";
import Banner from "./styles/components/banner";

function App() {
  
  useEffect(() => {
    let vh = window.innerHeight * 0.1;
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }, []);

  return (
    <div className='App'>
      <Header />
      <Banner />
    </div>
  );
};

export default App;
