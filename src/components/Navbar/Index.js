import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';


function Navbar() {

   
   return (
      <React.Fragment>
         <div className="navWrap d-flex w-100 px-md-5 px-2" id="navID" >
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