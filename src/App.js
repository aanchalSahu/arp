import "./App.css";
import AnimatedCursor from "react-animated-cursor";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "@mui/material";
function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{
          border: "3px solid #000",
        }}
        innerStyle={{
          backgroundColor: "#000",
        }}
      />
      <h1>Welcome!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link href="/page2">Click me first..  {" "} </Link>{" "}
        <Link href="/page1">then me,{" "} </Link> 
        <Link href="/page3"> now obviously me!!</Link>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="page2" element={<Page1 />} />
          <Route path="page1" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
