import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

function Navbar(props) {

   let workSelector = () => {
      if (props.scrollPos >= 694 && props.scrollPos <= 1398) {
         return "selected"; 
      }
      else return "";
   }
   let skillSelector = () => {
      if (props.scrollPos > 1398 && props.scrollPos <= 2088) {
         return "selected";
      }
      else return "";
   }
   let aboutSelector = () => {
      if (props.scrollPos > 2088) {
         return "selected";
      }
      else return "";
   }

   console.log(props.scrollPos)


   return (
      <React.Fragment>
         <div className="navWrap d-flex w-100 px-md-5 px-2" id="navID">
            <ul className="myNav py-2 m-0 firstFont">
               <NavLink to="/#works" activeClassName={workSelector()} className="navLink">
                  <li className="listItem mx-4">
                     Works
                  </li>
               </NavLink>
               <NavLink to="/#skills" activeClassName={skillSelector()} className="navLink">
                  <li className="listItem mx-4">
                     Skills
                  </li>
               </NavLink>
               <NavLink to="/#about" activeClassName={aboutSelector()} className="navLink">
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