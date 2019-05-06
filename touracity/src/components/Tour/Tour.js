import React, { Component } from 'react';
import "./Tour.scss";

export default class Tour extends Component {
  render() {
    return (
        <article className="tour">
    <div className="img-container">
    <img src="https://images.pexels.com/photos/2113558/pexels-photo-2113558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
     <span className="close-btn">
     <i className="fas fa-window-close"/>
        </span>
     </div>
    <div className="tour-info">
    <h3>City</h3>
    <h4>Name</h4>
    <h5>info {" "}
        <span>
            <i className="fas fa-caret-square-down" />
        </span>
        </h5>
        <p>Lorem Ipsum is simply dummy text of the printing</p>
       </div> 
    </article>
  
    );
  }
}