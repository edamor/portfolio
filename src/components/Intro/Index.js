import React from 'react';


function Intro() {


   return (
      <React.Fragment>
         <div className="introWrap row mx-0">
            <div className="introBox jumbotron col-10 col-md-6 mx-auto my-auto">
               <h1 className="secondFont introText">
                  <div>
                     Hello! I'm <span className="redFont firstFont">Ed Amor</span>, 
                  </div>
                  <div>
                     a passionate <span className="redFont firstFont"> Web Developer</span>
                  </div>
                  <div>
                     based in Metro Manila, PH.
                  </div>
               </h1>
            </div>
         </div>
      </React.Fragment>
   )
}

export default Intro;