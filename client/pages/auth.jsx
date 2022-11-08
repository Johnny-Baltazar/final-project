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
      <div className="row d-flex justify-content-center mt-5">
        <div>
          <h2 className="text-center fw-bold">
            {welcomeMessage}
          </h2>
        </div>
        <div className="col-md-6">
          {welcomeMessage === 'Register' &&
            <div>
              <RegForm />
              <p className="fw-bold text-center pt-5">Already have an account?
                <a className="text-decoration-none" href="#sign-in"> Sign in.</a>
              </p>
            </div>
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
