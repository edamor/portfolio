import React from 'react';
import igIcon from '../../images/footIcon-ig.png';
import liIcon from '../../images/footIcon-linkedin.png';


function Footer() {
            
   let d = new Date().getFullYear();


   return (
      <React.Fragment>
         <footer>
            <div className="row mx-0 h-100">
               <div className="col-10 col-md-3 mx-auto my-auto">
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