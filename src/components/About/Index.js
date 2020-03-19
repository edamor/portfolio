import React from 'react';
import me from '../../images/me.png';
import { Transition, animated } from 'react-spring/renderprops';

function About(props) {

   
   return (
      <React.Fragment>
         <div className="aniClass aboutWrap row mx-0" id="about" >
            <Transition
               items={props.sectionVisible.third}
               from={{ opacity: 0 }}
               enter={{ opacity: 1 }}
               leave={{ opacity: 0 }}
               config={{ mass: 3, tension: 50, friction: 28 }}
            >
               {show => show && (aniProps => (
                  <animated.div style={aniProps}>
                     <div className="container">
                        <h2 className="sectionHead secondFont text-left m-0 w-100 pl-3">
                           About <span className="redFont firstFont">Me</span>
                        </h2>
                     </div>
                     <div className="col-10 col-md-8 mx-auto">
                        <div className="row mx-0">
                           <div className="container text-center mb-3">
                              <img src={me} alt="me" className="myPic" />
                           </div>
                           <div className="col-12">
                              <p className="secondFont">
                                 Greetings! I am Ed Louise Amor and I specialize in developing websites and websites
                                 applications. But before I became a web developer, I was working in a different field. My decision to shift careers came from my childhood.I was very interested in computers 
                                 since I was 7 years old. We used to own an internet cafe where I spent most of my time 
                                 after school and during vacation breaks. I remember my summer mornings to be surfing 
                                 the web while eating my breakfast. Eventually, circumstances distanced me from learning 
                                 how computers work. Fast forward to today, I have never been happier. I plan to do this for
                                 as long as I'm alive.
                              </p>
                              <p className="secondFont">
                                 The projects that I develop are responsive and mobile-friendly. My projects are 
                                 mainly created using React JS for frontend, Java Spring Boot for backend, and for 
                                 the database, MySql and MongoDB. I wish to share my skills in creating your dream
                                 website for you. Let us begin!
                              </p>
                           </div>
                        </div>
                     </div>
                  </animated.div>
               ))}
            </Transition>
         </div>
      </React.Fragment>
   )
}

export default About;