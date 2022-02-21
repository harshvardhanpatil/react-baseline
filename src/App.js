// import './App.css';
import Loading from './components/Loading';
import Panel from './components/Panel'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Documentation from './components/Domentation';
import Page404 from './components/Page404';
import { Navbar, Container, Nav } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{color:"#fd43a1",fontWeight:'bolder'}} href="/home">react-component-framework</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/react-coponent-framework/home">Home</Nav.Link>
              <Nav.Link href="/react-coponent-framework/documentation">Documentation</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='app-container'>
        <Switch>
          <Route path='/react-coponent-framework' exact component={Home} />
          <Route path='/react-coponent-framework/home' exact component={Home} />
          <Route path='/react-coponent-framework/documentation' component={Documentation} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
