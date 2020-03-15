import React from 'react';
import igIcon from '../../images/footIcon-ig.png';
import liIcon from '../../images/footIcon-linkedin.png';


function Footer() {
               // <div className="col-3 mx-auto my-auto">
               //    <p className="footLinkLabel footerContent pb-0 mb-0 firstFont redFont">
               //       Quick Links
               //    </p>
               //    <ul className="footerContent footLinkList secondFont">
               //       <NavLink to="/#works" className="footLinks">
               //          <li>
               //             Works
               //          </li>
               //       </NavLink>
               //       <NavLink to="/#skills" className="footLinks">
               //          <li>
               //             Skills
               //          </li>
               //       </NavLink>
               //       <NavLink to="/#about" className="footLinks">
               //          <li>
               //             About
               //          </li>
               //       </NavLink>
               //    </ul>
               // </div>

               // <div className="col-3 mx-auto">
               //    <p className="footerContent">
               //       asdasdasdad
               //    </p>
               // </div>

   let d = new Date().getFullYear();


   return (
      <React.Fragment>
         <footer>
            <div className="row mx-0 h-100">
               <div className="col-3 mx-auto my-auto">
                  <p className="footerContent firstFont redFont footerName h5">
                     Ed Louise Amor
                  </p>
                  <p className="footerContent secondFont h6 emailAdd">
                     amor.edlouise@gmail.com
                  </p>
                  <p className="footerContent firstFont pb-0 mb-0  footLinkLabel h6">
                     Social Media
                  </p>
                  <ul className="footerContent footLinkList mb-0">
                     <li className="footLinks">
                        <img src={igIcon} alt="instagram" className="footLinkIcon"/>
                     </li>
                     <li className="footLinks">
                        <img src={liIcon} alt="linkedIn" className="footLinkIcon"/>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="copyright text-center">
               <small>Copyright &copy; {d} Ed Louise P. Amor</small>
            </div>
         </footer>
      </React.Fragment>
   )
}

export default Footer;