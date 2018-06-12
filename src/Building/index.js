import React, { Component } from "react";
import "./style.css";

class Building extends Component {
  render() {
    return (
      <div className="Building">
        <div className="image-wrapper">
          <img src={this.props.image} />
        </div>
        <div className="building-details">
          <p>{this.props.name}</p>
          <p>{this.props.year_built}</p>
          <p>{this.props.city}</p>
          <p>{this.props.architect}</p>
          <p>{this.props.style}</p>
        </div>
      </div>
    );
  }
}

export default Building;


