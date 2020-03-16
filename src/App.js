import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Index';




function App() {



  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" component={Home} />
    </BrowserRouter>
    
  );
}

export default App;
