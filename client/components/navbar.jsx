import React from 'react';
import AppContext from '../lib/app-context';
import AppDrawer from './app-drawer';

export default class Navbar extends React.Component {

  render() {
    const { user, route } = this.context;
    const loginOrRegister = route.path === 'sign-up'
      ? 'Login'
      : 'Register';
    return (
      <nav className="navbar">
        <AppDrawer />
        <h3>
          My Travel Log
        </h3>
        <div>
          { user === null &&
            <a href="#sign-in" >
              <i>
                {loginOrRegister}
              </i>
            </a>
          }
        </div>
      </nav>
    );
  }
}

Navbar.contextType = AppContext;
