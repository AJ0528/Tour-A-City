import React, { Component } from 'react'
import "./Tourlist.scss";
import Tour from "../Tour/Tour";

export default class Tourlist extends Component {
  render() {
    return (
     <section className="tour-list">
         <Tour />
     </section>
    )
  }
}
