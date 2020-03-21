import React from 'react';
import { animated, useSpring } from 'react-spring';


function Intro(props) {

   let springIntroProps = useSpring({
      to: { 
         opacity: props.isVisible.intro ? 1 : 0, 
         marginTop: props.isVisible.intro ? 0 : -200
      },
      config: { mass: 1, tension: 150, friction: 23, clamp: true }
   })


   return (
      <div className="aniClass introWrap row mx-0" id="introID" ref={props.forwardedRef} >
         <animated.div style={springIntroProps} className="introBox jumbotron col-10 col-md-6">
            <h1 className="secondFont introText">
               <div className="animatedDiv">
                  Hello! I'm <span className="redFont firstFont">Ed Amor</span>, 
               </div>
               <div className="animatedDiv">
                  a passionate <span className="redFont firstFont"> Web Developer</span>
               </div>
               <div className="animatedDiv">
                  based in Metro Manila, PH.
               </div>
            </h1>
         </animated.div>
      </div>
   )
   
}

export default Intro;