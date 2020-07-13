import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import Home from './components/Home/Index';
// import Redirect from './components/Redirect/Redirect';




function App() {

  useEffect(() => {
    let url = "https://edamor.github.io/portfolio2";
    window.location.replace(url);
  })

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/" render={() => (<div>...</div>)} />
    </BrowserRouter>
    
  );
}

export default App;
