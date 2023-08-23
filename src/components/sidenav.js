import React from 'react';
import '../css/sidenav.css';
import React, { Component } from 'react'

const SideNav = (props) => {
  return (
    <div className="sidenav">
      <SideNavLink name="new clients" href="#newclients" />
      <SideNavLink name="returning clients" href="#clients" />
      <SideNavLink name="mobile" href="#appointments" />
      <SideNavLink name="group/event" href="#inventory" />
    </div>
  );
};
export default SideNav;

class SideNavLink extends Component {

  constructor(props) {
    super(props);
    this.state.selected = '';
  }

  state = {
    selected: ""
 }

 toggleActive() {
    if(this.state.selected == "selected") this.state.selected = ""
    if(this.state.selected == "") this.state.selected = "selected"
 }

  render() {
    return (
      <div className={[this.state.selected, "link"].join(' ')} onClick={() => redraw(this.toggleActive())}>
        <a href={this.props.href}>{this.props.name}</a>
      </div>
    )
  }
}

const redraw = (props) => {
  
}




