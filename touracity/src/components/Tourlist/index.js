import React, { Component } from 'react'
import "./Tourlist.scss";
import Tour from "../Tour/Tour";
import {tourData} from "./tourData";

export default class Tourlist extends Component {
    state={
        tours: tourData
    };
  render() {
      const {tours} = this.state;
      console.log(this.state.tours);
   
    return (
     <section className="tourlist">
    {tours.map(tour =>{
        return <Tour key={tour.id} tour={tour} />
    })}
     </section>
    );
  }
}
