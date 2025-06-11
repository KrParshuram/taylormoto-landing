import react,{useState} from 'react';
import './App.css'
import Hero from "./component/Hero";
import Header from "./component/Header"
import Products from "./component/Products";
import ParallaxHeroWrapper from "./component/ParallaxHeroWrapper";
import engineBg from "./assets/3d-metal-gear.png";
import AboutWrapper from "./component/About/AboutWrapper";
import ExportMap from "./component/About/ExportMap";
import ExportChart from "./component/Chart/ExportChart";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer";
import ImageCarousel from "./component/ImageCarousal";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/> 
        <ParallaxHeroWrapper bgImage={engineBg}>
          <Hero/>
        </ParallaxHeroWrapper>
        <ImageCarousel />
        <Products />
        <AboutWrapper/>
        <ExportMap />
        <ExportChart />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App;
