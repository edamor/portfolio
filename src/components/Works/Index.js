import React from 'react';
import cs1 from '../../images/CS1-thumbnail.png';
import os1 from '../../images/OnlineStore-thumbnail.png';


function Works() {
   

   


   return (
      <React.Fragment>
         <div className="worksWrap row mx-0" id="works" > 
            <div className="container">
               <h2 className="sectionHead secondFont text-left m-0 w-100 pl-3">
                  My <span className="redFont firstFont">Works</span>
               </h2>
            </div>
            <div className="col-10 col-md-8 mx-auto my-auto">
               <div className="row mx-0">
                  <div className="col-12 col-md-5 mx-md-auto">
                     <div className="workDescription">
                        <p className="secondFont">
                           <a href="https://edamor.github.io/capstone-1/" className="anchorTag" target="_blank" rel="noopener noreferrer">
                              <span className="workTitle firstFont h5">
                                 Sining Online Gallery
                              </span>
                              <img src={cs1} alt="capstone 1 thumbnail" className="workThumbnail mx-auto mt-3" />
                           </a>
                        </p>
                        <ul className="secondFont">
                           <li>
                              A simple online art gallery.
                        </li>
                           <li>
                              The design is modern and responsive for screens of all sizes.
                        </li>
                           <li>
                              Environment: Linux, Apache, HTML, CSS, JavaScript, Bootstrap, Jquery
                        </li>
                        </ul> 
                     </div>
                  </div>
                  <div className="col-12 col-md-5 mx-md-auto">
                     <div className="workDescription">
                        <p className="secondFont">
                           <a href="https://cuemultitrade.com/" className="anchorTag" target="_blank" rel="noopener noreferrer">
                              <span className="workTitle firstFont h5">
                                 Cue MTC Corp Online Store
                              </span>
                              <img src={os1} alt="online store 1 thumbnail" className="workThumbnail mx-auto mt-3" />
                           </a>
                        </p>
                        <ul className="secondFont">
                           <li>
                              The digital branch of Cue Multitrade Comm. Corp.
                        </li>
                           <li>
                              Responsive design for all screen sizes in phones, tablets, or PCs.
                        </li>
                           <li>
                              Shopify was used as a tool for the development and deployment of this website.
                              Website hosting and CDN hosting are included with the service.
                        </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default Works;