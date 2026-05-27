import { useRef } from "react";
import Header from "./Components/common/Header";
import Home from "./Components/pages/Home";

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header scrollToAbout={scrollToAbout} />
      <Home aboutRef={aboutRef} />
    </div>
  );
}

export default App;
