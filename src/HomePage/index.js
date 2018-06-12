import React, { Component } from "react";
import "./style.css";
import Building from '../Building';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: []
    };
  }

  componentDidMount() {
    fetch('/buildings.json')
      .then(response => response.json())
      .then(buildings => {
        this.setState({
          buildings: buildings
        });
      });
  }

  render() {
    return (
      <div className="HomePage">
        {this.state.buildings.map(building => {
          return <Building
            image={building.image}
            name={building.name}
            year={building.year_built}
            city = {building.city}
            architect = {building.architect}
            style = {building.style}

          />
        })}
      </div>
    );
  }
}

export default HomePage;
