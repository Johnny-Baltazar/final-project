import React from 'react';
import AppContext from '../lib/app-context';
export default class Navbar extends React.Component {
  render() {
    const { user, route, drawerClick } = this.context;

    const loginOrRegister = route.path === 'sign-up' && user === null
      ? 'Login'
      : 'Register';
    const navAnc = route.path === 'sign-up'
      ? '#sign-in'
      : '#sign-up';
    return (
      <nav className="navbar ">
        <div className="container-fluid justify-content-start nav-font">
          <div className="">
            <a className="fa-solid fa-bars fa-2x text-white me-3 ms-2" onClick={drawerClick} />
          </div>
          <div>
            <a className="fs-4 fw-bold nav-link navbar-brand text-black" href="#">
              My Travel Log
            </a>
          </div>
          <div className="col align-self-end text-end me-5 ">
            <a className="nav-link" href={navAnc} >
              <i className="nav-font fw-bold">
                {loginOrRegister}
              </i>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.contextType = AppContext;
