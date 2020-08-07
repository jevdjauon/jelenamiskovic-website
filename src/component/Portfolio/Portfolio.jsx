import React, { Component } from "react";
import Galerija from "./Galerija";
import InlineSVG from "svg-inline-react";
import { arrow } from "../../assets/svg";

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      sirina: null
    };
  }

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  updateWindowDimensions = () => {
    this.setState({
      sirina: window.screen.width
    });
  };

  render() {
    return (
      <div className="portfolio">
        <div className="portfolio--whitespace" />
        <div className="portfolio--back">
          <img src={this.props.back} alt="" />
        </div>
        <div className="portfolio--naslov">
          <div className="portfolio--button">
            <a href="/options">
              <InlineSVG src={arrow} />
              <p>nazad</p>
            </a>
          </div>
          <h1>{this.props.heading}</h1>
          <h4>{this.props.position}</h4>
        </div>
        <div className="portfolio--txt">
          <p>{this.props.text}</p>
        </div>
        <div className="portfolio--images">
          <Galerija
            columns={this.state.sirina > 770 ? 4 : 2}
            photos={this.props.pictures}
          />
        </div>
      </div>
    );
  }
}
