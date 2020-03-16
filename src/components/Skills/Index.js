import React from 'react';
import html from 'programming-languages-logos/src/html/html.svg';
import css from 'programming-languages-logos/src/css/css.svg';
import javascript from 'programming-languages-logos/src/javascript/javascript.svg';
import java from 'programming-languages-logos/src/java/java.svg';

function Skills() {

   return (

      <React.Fragment>
         <div className="skillsWrap row mx-0" id="skills">
            <div className="container">
               <h2 className="sectionHead secondFont text-right m-0 w-100 pr-3">
                  Technical <span className="redFont firstFont">Skills</span>
               </h2>
            </div>
            <div className="col-10 col-md-8 mx-auto">
               <div className="row mx-0">
                  <div className="col-12 text-center secondFont pb-4">
                     <p className="iconLabel mx-4">
                        <img src={html} alt="html icon" className="myIcons mb-2" />
                        HTML5
                     </p>
                     <p className="iconLabel mx-4">
                        <img src={css} alt="css icon" className="myIcons mb-2" />
                        CSS3
                     </p>
                     <p className="iconLabel mx-4">
                        <img src={javascript} alt="javascript icon" className="myIcons mb-2" />
                        JavaScript
                     </p>
                     <p className="iconLabel mx-4">
                        <img src={java} alt="java icon" className="myIcons mb-2" />
                        Java
                     </p>
                  </div>
                  <div className="col-12 text-center secondFont">
                     <p className="iconLabel mx-4">
                        <i className="devicon-react-original-wordmark deviconIcon mb-2"></i>
                        React JS
                     </p>
                     <p className="iconLabel mx-4">
                        <i className="devicon-gradle-plain colored deviconIcon mb-2"></i>
                        Gradle
                     </p>
                     <p className="iconLabel mx-4">
                        <i className="devicon-bootstrap-plain-wordmark colored deviconIcon mb-2"></i>
                        Bootstrap
                     </p>
                     <p className="iconLabel mx-4">
                        <i className="devicon-mysql-plain-wordmark colored deviconIcon mb-2"></i>
                        MySQL
                     </p>
                     <p className="iconLabel mx-4">
                        <i className="devicon-mongodb-plain-wordmark colored deviconIcon mb-2"></i>
                        MongoDB
                     </p>
                  </div>
                  <div className="col-12 text-center secondFont">
                     <p className="iconLabel mx-4">
                        <i className="devicon-heroku-original-wordmark colored deviconIcon mb-2"></i>
                        Heroku
                     </p>
                     <p className="iconLabel mx-4">
                        <i className="devicon-github-plain-wordmark colored deviconIcon mb-2"></i>
                        GitHub
                     </p>
                     <p className="iconLabel mx-4">
                        <i className="devicon-git-plain-wordmark colored deviconIcon mb-2"></i>
                        Git
                     </p>
                     <p className="iconLabel mx-4">
                        <i className="devicon-gitlab-plain-wordmark colored deviconIcon mb-2"></i>
                        GitLab
                     </p>
                     <p className="iconLabel mx-4">
                        <i className="devicon-gimp-plain colored deviconIcon mb-2"></i>
                        GIMP
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default Skills;