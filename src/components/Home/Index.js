import React, { useState } from 'react';
import Intro from '../Intro/Index';
// import Navbar from '../Navbar/Index';
import Skills from '../Skills/Index';
import Works from '../Works/Index';
import About from '../About/Index';
import Footer from '../Footer/Index';
import Navbar from '../Navbar/Index';
import { Transition, animated } from 'react-spring/renderprops';



function Home(props) {
   
   let [isVisible, setIsVisible] = useState(false);

   let toggler = (e) => setIsVisible(e)
   
   let renderIntro = () => (
      <Intro 
         toggler={toggler} 
      />
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
   

   return (
      <React.Fragment>
         <div className="App">
            {renderIntro()}
            <Transition
               items={isVisible}
               from={{ opacity: 0}}
               enter={{ opacity: 1}}
               leave={{ opacity: 0}}
               config={{ mass: 1, tension: 250, friction: 18 }}
            >
               {show => show && (props => (
                  <animated.div style={props} >
                     <Navbar />
                  </animated.div>
               ))}
            </Transition>
            {renderWorks()}
            {renderSkills()}
            {renderAbout()}
            <Footer />
         </div>
      </React.Fragment>
   )
}


export default Home;