import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import Home from './components/Home/Index';
import Redirect from './components/Redirect/Redirect';




function App() {



  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/" component={Redirect} />
    </BrowserRouter>
    
  );
}

export default App;
