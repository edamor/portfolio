import React, { useRef, useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';

function Navbar(props) {

   // let workSelector = () => {
   //    if (props.scrollPos >= 518 && props.scrollPos <= 1148) {
   //       return "selected"; 
   //    }
   //    else return ""; 
   // }
   // let skillSelector = () => {
   //    if (props.scrollPos > 1148 && props.scrollPos <= 1888) {
   //       return "selected";
   //    }
   //    else return "";
   // }
   // let aboutSelector = () => {
   //    if (props.scrollPos > 1888) {
   //       return "selected";
   //    }
   //    else return "";
   // }

   let navRef = useRef(null);
   let [navPos, setNavPos] = useState(!navRef ? 0 : 1);

   useLayoutEffect(() => {
      
      let onScroll = () => {
         setNavPos(navRef.current.getBoundingClientRect().top);
         let scrollPosition = window.scrollY + window.innerHeight;
         if (navPos >= 0) {
            console.log("eureka!");
            console.log(navPos);
            console.log(navRef);
            navRef.current.style.position = "relative";
            navRef.current.style.height = "43px";
            // firstSection.style.paddingTop = "0px";

         } 
         if (navPos < 0) {
            navRef.current.style.height = "43px";
            navRef.current.style.position = "fixed";
         }
      }

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, [])


   return (
      <React.Fragment>
         <div className="navWrap d-flex w-100 px-md-5 px-2" id="navID" ref={navRef}>
            <ul className="myNav py-2 m-0 firstFont">
               <NavLink to="/#works"  className="navLink">
                  <li className="listItem mx-4">
                     Works
                  </li>
               </NavLink>
               <NavLink to="/#skills"  className="navLink">
                  <li className="listItem mx-4">
                     Skills
                  </li>
               </NavLink>
               <NavLink to="/#about"  className="navLink">
                  <li className="listItem mx-4">
                     About
                  </li>
               </NavLink>
            </ul>
         </div>
      </React.Fragment>
   )
}

export default Navbar;