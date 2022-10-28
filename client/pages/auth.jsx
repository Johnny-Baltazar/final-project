import React from 'react';
import Redirect from '../components/redirect';
import RegForm from '../components/reg-form';
import AppContext from '../lib/app-context';

export default class AuthPage extends React.Component {
  render() {

    const { user, route } = this.context;

    if (user) return <Redirect to="" />;

    const welcomeMessage = route.path === 'sign-in'
      ? 'Login'
      : 'Register';
    return (
      <div>
        <div>
          <h2>
            {welcomeMessage}
          </h2>
        </div>
        <div>
          {welcomeMessage === 'Register' &&
            <RegForm />
          }
          {welcomeMessage === 'Login' &&
            <h2>Login Page Under Construction</h2>
          }
        </div>
      </div>
    );
  }
}

AuthPage.contextType = AppContext;
