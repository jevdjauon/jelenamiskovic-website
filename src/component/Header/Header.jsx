import React from "react";
import { logo, menu, close } from "../../assets/svg";
import InlineSVG from "svg-inline-react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { face, insta } from "../../assets/svg";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      menuVisible: false,
      sirina: null,
      path: window.location.pathname
    };
  }
  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowDimensions);
  };

  updateWindowDimensions = () => {
    this.setState({
      sirina: window.screen.width
    });
  };

  openMenu = e => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  closeMenu = e => {
    this.setState({ menuVisible: false });
  };

  render() {
    return (
      <header className="header">
        <ReactCSSTransitionGroup
          transitionName="testA"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          transitionAppear={true}
          transitionAppearTimeout={1000}
        >
          <div className="header--left">
            <div className="header--icon">
              <a href="/">
                <InlineSVG src={logo} />
              </a>
            </div>
          </div>
        </ReactCSSTransitionGroup>
        <div className="header--menu">
          <p
            onClick={this.openMenu}
            className={
              this.state.path === "/"
                ? "header--button"
                : "header--button testCCC"
            }
          >
            {this.state.menuVisible ? (
              <InlineSVG src={close} />
            ) : (
              <InlineSVG src={menu} />
            )}
          </p>
          {this.state.menuVisible ? (
            <ReactCSSTransitionGroup
              transitionName="menuAnime"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              transitionAppear={true}
              transitionAppearTimeout={500}
              className="header--anime"
            >
              <div className="header--container">
                <div className="header--list">
                  <a onClick={this.closeMenu} href="/">
                    {/* eslint-disable-next-line */}
                    <a>početna</a>
                  </a>
                  <a onClick={this.closeMenu} href="/usluge" className="one">
                    {/* eslint-disable-next-line */}
                    <a>usluge</a>
                  </a>
                  <a onClick={this.closeMenu} href="/options">
                    {/* eslint-disable-next-line */}
                    <a>portfolio</a>
                  </a>
                  <a onClick={this.closeMenu} href="/omeni" className="one">
                    {/* eslint-disable-next-line */}
                    <a>o meni</a>
                  </a>
                </div>
                <div className="header--kontakt">
                  <p>kontakt</p>
                  <a href="tel:382-67-254-844">+382 67 / 254 - 844</a>
                  <a href="mailto:arhmiskovic@gmail.com">
                    arhmiskovic@gmail.com
                  </a>
                  <div className="header--social">
                    <a
                      href="https://www.facebook.com/jelena.miskovic.50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>
                        <InlineSVG src={face} />
                      </button>
                    </a>
                    <a
                      href="https://www.instagram.com/arh_jm/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>
                        <InlineSVG src={insta} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </ReactCSSTransitionGroup>
          ) : null}
          {this.state.sirina < 600 ? (
            this.state.menuVisible ? (
              <div id="overlay" />
            ) : null
          ) : null}
        </div>
      </header>
    );
  }
}

export default Header;
