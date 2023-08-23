import React from 'react';
import '../css/sidenav.css';
import sideNavConstantStrings from '../constants/constants.js';
import React, { Component } from 'react'

class SideNav extends Component {
  
  render() {
  return (
    <div className="sidenav">
      <SideNavLink name="new clients" href="#newclients"/>
      <SideNavLink name="returning clients" href="#returningclients" />
      <SideNavLink name="mobile" href="#mobile" />
      <SideNavLink name="group/event" href="#group" />
    </div>
  );
  }
};
export default SideNav;

class SideNavLink extends Component {

  state = {
    text: ""
  }
  
  changeText = (text) => {
  
    this.setState({ text }); 
  } 

  render() {
    const { text } = this.state //destucture state
    return (
      <div className={[this.state.text, "link"].join(' ')}
      onClick={ () => { this.changeText("active")}  } >
        <a href={this.props.href}>{this.props.name}</a>
      </div>
    )
  }
}

const redraw = (props) => {
  
}




