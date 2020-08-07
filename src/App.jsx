import React, { Component } from "react";
import Header from "./component/Header";
import MainSwitch from "./component/_MainSwitch";

class App extends Component {
  constructor() {
    super();
    this.state = { loaded: false };
  }

  componentDidMount = () => {
    this.timer = setInterval(() => this.setState({ loaded: true }), 720);
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  render() {
    return (
      <div>
        {this.state.loaded === false ? (
          <div className="lds-container">
            <div className="lds-ripple">
              <div />
              <div />
            </div>
          </div>
        ) : (
          <main>
            <Header />
            <MainSwitch />
            <div className="part" />
            <div className="part" />
            <div className="part" />
            <div className="part" />
            <div className="part" />
            <div className="part" />
            <div className="part" />
          </main>
        )}
      </div>
    );
  }
}

export default App;
