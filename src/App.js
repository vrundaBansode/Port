// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { NavBar } from "./components/NavBar";
// import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Banner />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import NotFound from "./components/NotFound"; // Import the NotFound component

// Lazy load components with named exports
const Banner = lazy(() =>
  import("./components/Banner").then((module) => ({ default: module.Banner }))
);
const Skills = lazy(() =>
  import("./components/Skills").then((module) => ({ default: module.Skills }))
);
const Projects = lazy(() =>
  import("./components/Projects").then((module) => ({
    default: module.Projects,
  }))
);
const Contact = lazy(() =>
  import("./components/Contact").then((module) => ({ default: module.Contact }))
);
const Footer = lazy(() =>
  import("./components/Footer").then((module) => ({ default: module.Footer }))
);

function App() {
  return (
      <Suspense
        fallback={
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            Working hard… just like my last sprint!
          </div>
        }
      >
        <div className="App">
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </Suspense>
  );
}

export default App;
