import React, { useState, useLayoutEffect, useRef } from 'react';
import Intro from '../Intro/Index';
import Skills from '../Skills/Index';
import Works from '../Works/Index';
import About from '../About/Index';
import Footer from '../Footer/Index';
import Navbar from '../Navbar/Index';



function Home(props) {

   let worksRef = useRef(null);
   let skillsRef = useRef(null);
   let aboutRef = useRef(null);
   let introRef = useRef(null)
   
   let [visibleNav, setVisibleNav] = useState(false);
   let [sectionVisible, setSectionVisible] = useState({
      intro: true,
      first: false,
      second: false,
      third: false
   });

   let height = ({
      intro: !introRef.current ? 0 : introRef.current.offsetHeight,
      first: !worksRef.current ? 0 : worksRef.current.offsetHeight,
      second: !skillsRef.current ? 0 : skillsRef.current.offsetHeight,
      third: !aboutRef.current ? 0 : aboutRef.current.offsetHeight
   });

   function toggleVisibility(scrollPos) {
      
      let offset = 0.5;
      let w = window.visualViewport.outerWidth;

      if (w <= 749) {
         console.log("mobile")
         setSectionVisible({ intro: true, first: true, second: true, third: true });
         if (scrollPos > (height.intro * 0.2)) {
            setVisibleNav(true);
         } else {
            setVisibleNav(false);
         }
      } 
      
      if (scrollPos > (height.intro * offset)) {
         setVisibleNav(true)
         if (scrollPos >= (height.intro * offset) && scrollPos < (height.intro + height.first * offset)) {
            setSectionVisible({ intro: false, first: true, second: false, third: false });
            props.history.push("/#works");
         }
         if (scrollPos < (height.intro + height.first + height.second * offset)
            && scrollPos >= (height.intro + height.first * offset)) {
            setSectionVisible({ intro: false, first: false, second: true, third: false });
            props.history.push("/#skills");
         }
         if (scrollPos >= (height.intro + height.first + height.second * offset)) {
            setSectionVisible({ intro: false, first: false, second: false, third: true });
            props.history.push("/#about");
         }
      } else {
         setSectionVisible({ intro: true, first: false, second: false, third: false });
         setVisibleNav(false);
         props.history.push("/");
      }
   }
   
   
   useLayoutEffect( () => {
      
      height.intro = (introRef.current.scrollHeight);
      height.first = (worksRef.current.scrollHeight);
      height.second = (skillsRef.current.scrollHeight);
      height.third = (aboutRef.current.scrollHeight)
      
      let handleScroll = (e) => {
         let scrollPos = Math.round(window.visualViewport.pageTop);
         toggleVisibility(scrollPos);
      } 
            
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   });
  

   return (
      
         <div className="App" >
            <Intro forwardedRef={introRef} isVisible={sectionVisible}/>
            <Navbar {...props} isVisible={visibleNav}/> 
            <Works forwardedRef={worksRef} isVisible={sectionVisible}/>
            <Skills forwardedRef={skillsRef} isVisible={sectionVisible}/>
            <About forwardedRef={aboutRef} isVisible={sectionVisible}/>
            <Footer /> 
         </div>
   )
}


export default Home;













// let [isVisible, setIsVisible] = useState(false);
   // let [sectionVisible, setSectionVisible] = useState({
   //    intro: true,
   //    first: false,
   //    second: false,
   //    third: false
   // });
   // useLayoutEffect(() => {
   //    let offsetMobile = 0.5;
   //    let first = document.querySelector("#introID").scrollHeight;
   //    let a = document.querySelectorAll(".aniClass")[0].scrollHeight ? document.querySelectorAll(".aniClass")[0].scrollHeight : 0;
   //    let b = document.querySelectorAll(".aniClass")[1].scrollHeight ? document.querySelectorAll(".aniClass")[1].scrollHeight : 0;
   //    let c = document.querySelectorAll(".aniClass")[2].scrollHeight ? document.querySelectorAll(".aniClass")[2].scrollHeight : 0;
      
   //    let onScroll = () => {
   //       let scrollPos = window.scrollY;
   //       let w = window.innerWidth;

   //       if (w > 750) {
   //          if (scrollPos > (first * offset)) {
   //             setIsVisible(true)
   //             if (scrollPos < (a + b * offset)) {
   //                setSectionVisible({ intro: false, first: true, second: false, third: false });
   //                histprops.history.push("/#works");
   //             }
   //             if (scrollPos > (a + b * offset) && scrollPos < (a + b + c * offset)) {
   //                setSectionVisible({ intro: false, first: false, second: true, third: false });
   //                histprops.history.push("/#skills");
   //             }
   //                if (scrollPos > (a + b + c * offset)) {
   //                   setSectionVisible({ intro: false,  first: false, second: false, third: true });
   //                   histprops.history.push("/#about");
   //                }
   //             } else {
   //                setSectionVisible({ intro: true, first: false, second: false, third: false  });
   //                setIsVisible(false);
   //                histprops.history.push("/");
   //             }
   //          } else {
   //             if (scrollPos > (first * offset)) {
   //                setIsVisible(true);
   //             } else {
   //                setIsVisible(false)
   //                setSectionVisible({ intro: true, first: true, second: true, third: true })
   //             }
   //          }
            
   //    }

   //    window.addEventListener("scroll", onScroll);
   //    return () => window.removeEventListener("scroll", onScroll);
   // },[sectionVisible, histprops.history])
   

   
   // let renderIntro = () => <Intro sectionVisible={sectionVisible} />;
   // let renderWorks = () => <Works sectionVisible={sectionVisible} childRef={sample}/>;
   // let renderSkills = () => <Skills sectionVisible={sectionVisible}/>;
   // let renderAbout = () => <About sectionVisible={sectionVisible}/>;  



   // <div className="App" >
   //          {renderIntro()}
   //          <Navbar {...histprops} isVisible={isVisible}/>
   //          {renderWorks()}
   //          {renderSkills()}
   //          {renderAbout()}
   //          <Footer />
   //       </div>