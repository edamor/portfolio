import React, { useState, useLayoutEffect } from 'react';
import Intro from '../Intro/Index';
import Skills from '../Skills/Index';
import Works from '../Works/Index';
import About from '../About/Index';
import Footer from '../Footer/Index';
import Navbar from '../Navbar/Index';



function Home(histprops) {
   let [isVisible, setIsVisible] = useState(false);
   let [sectionVisible, setSectionVisible] = useState({
      intro: true,
      first: false,
      second: false,
      third: false
   });

   useLayoutEffect(() => {
      let offset = 0.5;
      let first = document.querySelector("#introID").scrollHeight;
      let a = document.querySelectorAll(".aniClass")[0].scrollHeight ? document.querySelectorAll(".aniClass")[0].scrollHeight : 0;
      let b = document.querySelectorAll(".aniClass")[1].scrollHeight ? document.querySelectorAll(".aniClass")[1].scrollHeight : 0;
      let c = document.querySelectorAll(".aniClass")[2].scrollHeight ? document.querySelectorAll(".aniClass")[2].scrollHeight : 0;

      let onScroll = () => {
         let scrollPos = window.scrollY;
         let w = window.innerWidth;

         if (w > 750) {
            if (scrollPos > (first * offset)) {
               setIsVisible(true)
               if (scrollPos < (a + b * offset)) {
                  setSectionVisible({ intro: false, first: true, second: false, third: false });
                  histprops.history.push("/#works");
               }
               if (scrollPos > (a + b * offset) && scrollPos < (a + b + c * offset)) {
                  setSectionVisible({ intro: false, first: false, second: true, third: false });
                  histprops.history.push("/#skills");
               }
                  if (scrollPos > (a + b + c * offset)) {
                     setSectionVisible({ intro: false,  first: false, second: false, third: true });
                     histprops.history.push("/#about");
                  }
               } else {
                  setSectionVisible({ intro: true, first: false, second: false, third: false  });
                  setIsVisible(false);
                  histprops.history.push("/");
               }
            } else {
               if (scrollPos > (first * offset)) {
                  setIsVisible(true);
               } else {
                  setIsVisible(false)
                  setSectionVisible({ intro: true, first: true, second: true, third: true })
               }
            }
            
      }

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   },[sectionVisible, histprops.history])
   
   let renderIntro = () => <Intro sectionVisible={sectionVisible} />;
   let renderWorks = () => <Works sectionVisible={sectionVisible}/>;
   let renderSkills = () => <Skills sectionVisible={sectionVisible}/>;
   let renderAbout = () => <About sectionVisible={sectionVisible}/>;  

   
   
   return (
      <React.Fragment>
         <div className="App">
            {renderIntro()}
            <Navbar {...histprops} isVisible={isVisible}/>
            {renderWorks()}
            {renderSkills()}
            {renderAbout()}
            <Footer />
         </div>
      </React.Fragment>
   )
}


export default Home;