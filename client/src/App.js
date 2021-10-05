import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PopularProducts from './Components/PopularProducts/PopularProducts';
//import { CSSTransition } from 'react-transition-group'



function App() {
 
  return (
   <Router>
       <Route path='/' exact component={PopularProducts}/>
   </Router>

  )

}

export default App;



