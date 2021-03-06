import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { url, urlName } from './url';

import Wappen from '../components/images/logos/kappel.png';
import Feu from '../components/images/logos/fh-logo.png';

import DropDown from './dropDown.js';

export class Navigation extends Component {
  state = {
    width: window.outerWidth,
    open: false,
  }
  componentDidMount() {
    this.size();
    window.addEventListener("resize", this.size);
  }

  handleClick = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }))
  }

  size = () => {
    var w = window.innerWidth;
    setTimeout(() => {
      this.setState({
        width: w,
      })
    },500);
  }

  render() {
    return(
      <div className="nav">
        {this.renderHelper()}
      </div>
    )
  }

  renderHelper = () => {
    if(this.state.width < 1224) {
      return(
        <>
        <div className="mobile row">
          <div className="column col-s-10">
            <div className="flexbox flex-align-center">
              <img className="logo-icon" src={Wappen} />
              <img className="logo-icon" src={Feu} />
              <h4 className="regular">FF-Kappel</h4>
            </div>

          </div>
          <div
            className="column col-s-2 flex-algin-center justify-center nop"
            onClick={this.handleClick}
          >
            <div className="nav-icon"></div>
          </div>
        </div>
        <div className={"nav-menü " + this.state.open}>
          <div className="nav-item">
            <NavLink exact to='/' onClick={this.handleClick} activeClassName="activeLink">
              <p>Home</p>
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink exact to='/neuigkeiten' onClick={this.handleClick} activeClassName="activeLink">
              <p>Neuigkeiten</p>
            </NavLink>
          </div>
          <div className="nav-item">
            <DropDown
              data={["Mannschaft", "Fahrzeuge", "Geschichte"]}
              goTo={["/mannschaft", "/fahrzeuge", "/geschichte"]}
              function={this.handleClick}
            />
          </div>
          <div className="nav-item">
            <DropDown
              data={["Einsätze", "Statistik", "Einsatzgebiet"]}
              goTo={["/einsaetze", "/statistic", "/einsatzgebiet"]}
              function={this.handleClick}
            />
          </div>
          <div className="nav-item">
            <NavLink exact to='/termine' onClick={this.handleClick} activeClassName="activeLink">
              <p>Termine</p>
            </NavLink>
          </div>
          <div className="nav-item">
            <DropDown
              data={["Kontakt", "Notruf"]}
              goTo={["/kontakt", "/notruf"]}
              function={this.handleClick}
            />
          </div>
          <div className="nav-item">
            <NavLink exact to='/impressum' onClick={this.handleClick} activeClassName="activeLink">
              <p>Impressum</p>
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink exact to='/datenschutz' onClick={this.handleClick} activeClassName="activeLink">
              <p>Datenschutz</p>
            </NavLink>
          </div>
        </div>
        </>

      )
    } else {
      return(
        <>
        <div className="desktop shadow row">
          <div className="column col-md-3">
            <div className="flexbox flex-align-center">
              <img className="logo-icon" src={Wappen} />
              <img className="logo-icon" src={Feu} />
              <h4 className="regular">FF-Kappel</h4>
            </div>
          </div>
          <div className="column col-md-9 justify-center">
            <div className="row flex-align-space-between">
              <div className="column test">
                <NavLink exact to='/' onClick={this.handleClick} activeClassName="activeLink">
                  <p>Home</p>
                </NavLink>
              </div>
              <div className="column test">
                <NavLink exact to='/neuigkeiten' onClick={this.handleClick} activeClassName="activeLink">
                  <p>Neuigkeiten</p>
                </NavLink>
              </div>
              <div className="column test">
                <div className="desktopDown">
                  <NavLink exact to='/mannschaft' onClick={this.handleClick} activeClassName="activeLink">
                    <p>Mannschaft</p>
                  </NavLink>
                  <div className="d-hidden shadow-big">
                    <NavLink exact to='/fahrzeuge' onClick={this.handleClick} activeClassName="activeLink">
                      <p>Fahrzeuge</p>
                    </NavLink>
                    <NavLink exact to='/geschichte' onClick={this.handleClick} activeClassName="activeLink">
                      <p>Geschichte</p>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="column test">
                <div className="desktopDown">
                  <NavLink exact to='/einsaetze' onClick={this.handleClick} activeClassName="activeLink">
                    <p>Einsätze</p>
                  </NavLink>
                  <div className="d-hidden shadow-big">
                    <NavLink exact to='/statistic' onClick={this.handleClick} activeClassName="activeLink">
                      <p>Statistik</p>
                    </NavLink>
                    <NavLink exact to='/einsatzgebiet' onClick={this.handleClick} activeClassName="activeLink">
                      <p>Einsatzgebiet</p>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="column test">
                <NavLink exact to='/termine' onClick={this.handleClick} activeClassName="activeLink">
                  <p>Termine</p>
                </NavLink>
              </div>
              <div className="column test">
                <div className="desktopDown">
                  <NavLink exact to='/kontakt' onClick={this.handleClick} activeClassName="activeLink">
                    <p>Kontakt</p>
                  </NavLink>
                  <div className="d-hidden shadow-big">
                    <NavLink exact to='/notruf' onClick={this.handleClick} activeClassName="activeLink">
                      <p>Notruf</p>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="column test">
                <NavLink exact to='/impressum' onClick={this.handleClick} activeClassName="activeLink">
                  <p>Impressum</p>
                </NavLink>
              </div>
              <div className="column test">
                <NavLink exact to='/datenschutz' onClick={this.handleClick} activeClassName="activeLink">
                  <p>Datenschutz</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        </>
      )
    }
  }
}
