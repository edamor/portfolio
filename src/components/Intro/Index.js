import React from 'react';
import { Transition, animated } from 'react-spring/renderprops';


function Intro(props) {


   return (
      <React.Fragment>
         <div className="aniClass introWrap row mx-0" id="introID">
            <Transition
               items={props.sectionVisible.intro}
               from={{ opacity: 0, marginTop: 200}}
               enter={{ opacity: 1, marginTop: 0}}
               leave={{ opacity: 0, marginTop: -200}}
               config={{ mass: 1, tension: 50, friction: 23 }}
            >
               {show => show && (props => (
                  <animated.div style={props} className="introBox jumbotron col-10 col-md-6">
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
               ))}
            </Transition>
         </div>
      </React.Fragment>
   )
}

export default Intro;