//REACT
import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';

//COMPONENTS
import MenuControlDesktop from './components/header';
import FooterControl from './components/footer';

//ROUTES
import HomePage from './pages/homepage';
import { Container } from 'semantic-ui-react';

const App = () => {
  
  return (
    <Container fluid className="page-wrapper">
      <MenuControlDesktop>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
      </MenuControlDesktop>
      <FooterControl/>
    </Container>
  );
}

export default withRouter(App);
