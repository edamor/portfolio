import React, { useEffect } from 'react';
import './style.css';


export default function Redirect() {

   useEffect(() => {
      let newPortfolio = "https://edamor.github.io/portfolio2";
      window.location = newPortfolio;
   })

   return (
      <div className="redirect">
         
      </div>
   )
}