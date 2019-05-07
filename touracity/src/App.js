import React, {Component} from 'react';
import Navbar from"./components/Navbar/Navbar";
import './App.scss';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from "./components/Home";
import About from './components/About';
// eslint-disable-next-line 
import { tourData } from './components/Tourlist/tourData';
// eslint-disable-next-line 
import Tour from './components/Tour/Tour';
import Tourlist from "./components/Tourlist";

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <main> 
        <Navbar />
      <Route path='/home' component={Home} />
       <Route path='/about' component={About} />
       <Tourlist/>
            </main>
   
 
       
      
         </BrowserRouter>
       
    
      
     

    )
  }
  
}

export default App;
