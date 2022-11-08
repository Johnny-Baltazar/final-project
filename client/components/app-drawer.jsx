import React from 'react';
import AppContext from '../lib/app-context';
export default class AppDrawer extends React.Component {
  render() {
    const { appDrawerStatus, drawerClick } = this.context;
    return (
      <div className={`app-drawer row ${appDrawerStatus}`}>
        <div className="col bg-white">
          <i className="fa-sharp fa-solid fa-arrow-left fa-2x" onClick={drawerClick}/>
          <h3 ><a href="#home" >Profile</a></h3>
          <h3 ><a href="#places" >Places</a></h3>
          <h3 ><a href="#posts" >Posts</a></h3>
          <h3 ><a href="#wish-list" >Create Travel List</a></h3>
          <h3 ><a href="#sign-in" >Sign Out</a></h3>
        </div>
        <div className="px-0">
          <div className="shade " />
        </div>

      </div>
    );
  }
}

AppDrawer.contextType = AppContext;
