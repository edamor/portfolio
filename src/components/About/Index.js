import React from 'react';

function About() {

   return (
      <React.Fragment>
         <div className="aboutWrap row mx-0" id="about">
            <div className="container">
               <h2 className="sectionHead secondFont text-left m-0 w-100 pl-3">
                  About <span className="redFont firstFont">Me</span>
               </h2>
            </div>
            <div className="col-10 col-md-8 mx-auto">
               <div className="row mx-0">
                  <div className="col-12">
                     <p className="secondFont h5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default About;