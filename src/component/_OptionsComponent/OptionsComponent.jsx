import React, { Component } from "react";

class OptionsComponent extends Component {
  render() {
    return (
      <div className={this.props.stilovi}>
        <div className="OC--image">
          <a href={this.props.links}>
            <img src={this.props.images} alt="" />
          </a>
        </div>
        <div className="OC--txt">
          <div className="OC--para">
            <h2>{this.props.naslov}</h2>
            <h4>{this.props.uloga}</h4>
          </div>
        </div>
        <div className="OC--back">
          <div className="part" />
          <div className="part" />
          <div className="part" />
          <div className="part" />
          <div className="part" />
          <div className="part" />
          <div className="part" />
        </div>
      </div>
    );
  }
}

export default OptionsComponent;
