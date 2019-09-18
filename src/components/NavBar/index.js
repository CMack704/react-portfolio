import React, {Component} from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';

class Navbar extends Component {
  state = {
    collapsed: true
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const bgColor = {backgroundColor: '#42a5f5'}

    return(
      <div>        
          <header>
            <MDBNavbar style={bgColor} dark expand="md" scrolling fixed="top">
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem className='nav-link active' className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} onClick={this.toggleCollapse}>
                      <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className='nav-link' className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} onClick={this.toggleCollapse}>
                      <MDBNavLink to="/portfolio">Portfolio</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className='nav-link' className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"} onClick={this.toggleCollapse}>
                      <MDBNavLink to="/contact">Contact</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
      </div>
    );
  }
}

export default Navbar;