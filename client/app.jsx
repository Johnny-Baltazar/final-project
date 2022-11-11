import React from 'react';
import parseRoute from './lib/parse-route';
import Navbar from './components/navbar';
import Auth from './pages/auth';
import AppContext from './lib/app-context';
import PageContainer from './components/page-container';
import AppDrawer from './components/app-drawer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      route: parseRoute(window.location.hash),
      appDrawerStatus: 'd-none',
      appDrawerOpen: ''
    };
    this.drawerClick = this.drawerClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  renderPage() {
    const { path } = this.state.route;
    if (path === 'sign-in' || path === 'sign-up') {
      return <Auth />;
    }
  }

  drawerClick() {
    if (this.state.appDrawerStatus === 'd-none') {
      this.setState({
        appDrawerStatus: ''
      });
    } else {
      this.setState({
        appDrawerStatus: 'd-none'
      });
    }
  }

  render() {
    const { user, route, appDrawerStatus, appDrawerOpen } = this.state;
    const { drawerClick } = this;
    const contextValue = { user, route, appDrawerStatus, drawerClick, appDrawerOpen };
    return (
      <AppContext.Provider value={contextValue} >
        <Navbar />

        <PageContainer>
          <AppDrawer />
          {this.renderPage()}
        </PageContainer>
      </AppContext.Provider>

    );
  }
}
