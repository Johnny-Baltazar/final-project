import React from 'react';
import AppContext from '../lib/app-context';
export default class AppDrawer extends React.Component {
  render() {
    const { appDrawerStatus, drawerClick } = this.context;
    return (
      <div className={`app-drawer row ${appDrawerStatus} roboto-font text-black`}>
        <div className="col bg-white ">
          <div className="ms-4 mt-4 d-grid gap-3">
            <i className="mb-5 fa-sharp fa-solid fa-arrow-left fa-2x text-black" onClick={drawerClick}/>
            <h3><a href="#home" className="text-black fw-bold">Profile</a></h3>
            <h3><a href="#places" className="text-black fw-bold">Places</a></h3>
            <h3><a href="#posts" className="text-black fw-bold">Posts</a></h3>
            <h3><a href="#wish-list" className="text-black fw-bold">Create Travel List</a></h3>
            <h3><a href="#sign-in" className="text-black fw-bold">Sign Out</a></h3>
          </div>
        </div>
        <div className="px-0 col-9">
          <div className="shade " />
        </div>

      </div>
    );
  }
}

AppDrawer.contextType = AppContext;
