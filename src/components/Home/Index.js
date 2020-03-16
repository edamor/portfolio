import React, { useState } from 'react';
import Intro from '../Intro/Index';
// import Navbar from '../Navbar/Index';
import Skills from '../Skills/Index';
import Works from '../Works/Index';
import About from '../About/Index';
import Footer from '../Footer/Index';
import Navbar from '../Navbar/Index';



function Home(props) {
   


   // let [scrollPos, setScrollPos] = useState(0);
   
   

   // window.addEventListener("scroll", (e) => {
   //    let scroll = window.scrollY;
   //    let docWidth = window.innerWidth;
   //    let nav = document.querySelector("#navID");
   //    let firstSection = document.querySelector("#works");

   //    setScrollPos(document.documentElement.scrollTop);


   //    if (docWidth > 750) {
   //       if (scroll < 694.44) {
            
   //       } else {
   //          nav.style.top = "0px";
   //          nav.style.height = "43px";
   //          nav.style.position = "fixed";
   //          firstSection.style.paddingTop = "43px";
   //       }
   //    }
   // })

   let renderIntro = () => (
      <Intro />
   )
   let renderWorks = () => (
      <Works />
   )
   let renderSkills = () => (
      <Skills />
   )
   let renderAbout = () => (
      <About />  
   )
   
   


   // <Navbar 
   //    {...props}
   //    scrollPos={scrollPos}
   // />
   

   return (
      <React.Fragment>
         <div className="App">
            {renderIntro()}
            <Navbar {...props} />
            {renderWorks()}
            {renderSkills()}
            {renderAbout()}
            <Footer />
         </div>
      </React.Fragment>
   )
}


export default Home;