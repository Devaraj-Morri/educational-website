import React, { useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Tittle from "./Components/Tittle/Tittle";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Foooter/Footer";
import VideoPlayer from "./Components/VideooPlayer/VideoPlayer";

const App = () => {
  const [playState,setPlayState]=useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Tittle subTitle="OUR PROGRAM" Title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Tittle subTitle="GALLERY" Title="Campus Photos" />
        <Campus />
        <Tittle subTitle="TESTIMONIALS" Title="What Student Says" />
        <Testimonials />
        <Tittle subTitle="CONTACT US" Title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
