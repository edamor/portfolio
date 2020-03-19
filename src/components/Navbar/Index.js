import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Transition, animated } from 'react-spring/renderprops';


function Navbar(props) {
   

   return (
      <React.Fragment>
         <Transition
            items={props.isVisible}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={{ mass: 1, tension: 150, friction: 23 }}
         >
            {show => show && (aniProps => (
               <animated.div style={aniProps} >
                  <div className="navWrap d-flex w-100 px-md-5 px-2" id="navID" >
                     <ul className="myNav py-2 m-0 firstFont">
                        <NavLink to="/#works" className="navLink" 
                           activeClassName={props.history.location.hash === "#works" ? "selected" : ""}
                        >
                           <li className="listItem mx-4">
                              Works
                           </li>
                        </NavLink>
                        <NavLink to="/#skills" className="navLink" 
                           activeClassName={props.history.location.hash === "#skills" ? "selected" : ""}
                        >
                           <li className="listItem mx-4">
                              Skills
                           </li>
                        </NavLink>
                        <NavLink to="/#about" className="navLink" 
                           activeClassName={props.history.location.hash === "#about" ? "selected" : ""}
                        >
                           <li className="listItem mx-4">
                              About
                           </li>
                        </NavLink>
                     </ul>
                  </div>
               </animated.div>
            ))}
         </Transition>
      </React.Fragment>
   )
}

export default Navbar;