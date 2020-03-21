import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { useSpring, animated } from 'react-spring';


function Navbar(props) {

   let springNavProps = useSpring({
      to: { opacity: props.isVisible ? 1 : 0 , marginTop: props.isVisible ? "0px" : "43px" },
      config: { mass: 3, tension: 250, friction: 22, clamp: true }
   })
   
   
   return (
      <animated.div style={springNavProps} >
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
   )
   }

export default Navbar;