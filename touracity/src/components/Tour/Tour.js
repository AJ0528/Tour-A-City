import React, { Component } from 'react';
import "./Tour.scss";

export default class Tour extends Component {
  render() {
    return <article className="tour">
    <div className="img-container">
    <img width="200"src="https://images.pexels.com/photos/2131801/pexels-photo-2131801.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
    alt=""
     />
     <span className="close-btn">
     <i className="fas fa-window-close"/>
     
     </span>
    
    
    </div>
    <div className="tour-info">
    <h3>City</h3>
    <h4>Name</h4>
    <h5>Info {" "}
        <span>
            <i className="fas fa-caret-square-down" />
        </span>
        </h5>
        <p>lorem </p>
    </div>

    </article>
  }
}
