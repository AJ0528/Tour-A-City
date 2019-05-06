import React, {Component} from 'react';
import Navbar from"./components/Navbar/Navbar";
import './App.scss';
import Tourlist from "./components/Tourlist";

class App extends Component {
  render () {
    return (
      <main>
       <Navbar />
       <Tourlist/>
    </main>
    )
  }
  
}

export default App;
