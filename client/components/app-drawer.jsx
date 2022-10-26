import React from 'react';
// import AppContext from '../lib/app-context';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 'hidden',
      shadeStatus: 'hidden',
      icon: 'fa-solid fa-bars fa-3x'
      // menuSelection: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMenuChange = this.handleMenuChange.bind(this);
    // this.accordionRoutes = this.accordionRoutes.bind(this);
  }

  handleChange(event) {
    this.setState({
      icon: 'hidden',
      menu: '',
      shadeStatus: 'shade'
    });
  }

  handleMenuChange(event) {
    this.setState({
      icon: 'fa-solid fa-bars fa-3x',
      menu: 'hidden',
      shadeStatus: 'hidden'
    });
  }

  // accordionRoutes(event) {
  //   const { menuSelection, value } = event.target.textContent;
  //   this.setState({
  //     [menuSelection]: value
  //   });
  // }

  render() {
    const iconClass = this.state.icon;
    const menuClass = this.state.menu;
    const shadeStatus = this.state.shadeStatus;
    return (
      <div>
        <div className="app-drawer">
          <div>
            <i className={`${iconClass}`} onClick={this.handleChange} />
          </div>
          <div className={`${menuClass}`}>
            <i className="fa-sharp fa-solid fa-arrow-left fa-2x" onClick={this.handleMenuChange} />
            <h3 ><a href="#home" onClick={this.handleMenuChange} >Profile</a></h3>
            <h3 ><a href="#places" onClick={this.handleMenuChange} >Places</a></h3>
            <h3 ><a href="#posts" onClick={this.handleMenuChange} >Posts</a></h3>
            <h3 ><a href="#wish-list" onClick={this.handleMenuChange} >Create Travel List</a></h3>
            <h3 ><a href="#sign-in" onClick={this.handleMenuChange} >Sign Out</a></h3>
          </div>
        </div>
        <div className={`${shadeStatus}`} onClick={this.handleMenuChange} />
      </div>
    );
  }
}
