import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Ourmission from "./components/Ourmission";
import Partners from "./components/Partners";
import OurAlgo from "./components/OurAlgo";
import WhatWeDo from "./components/WhatWeDo";
import Howitworks from "./components/Howitworks";
import Meettheteam from "./components/Meettheteam";
import Roadmap from "./components/Roadmap";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  Aos.init();
  return (
    
    <>
      <Preloader />
      <div className="overflow-hidden">
        <div className="min_vh_100 d-flex flex-column justify-content-between ">
          <Nav />
          <Main />/
        </div>
        <Ourmission />
        <Partners />
        <OurAlgo />
        <WhatWeDo />
        <Howitworks />
        <Meettheteam />
        <Roadmap />
        <Faqs />
        <Footer />
      </div>
    </>
  );
}

export default App;
