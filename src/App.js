import * as React from 'react';

import Home from './containers/Home';
import {
  Container,
  Image,
  Menu
} from 'semantic-ui-react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from "./containers/About";

const obj  = {
  name : "Cem"
}


function App() {
  return (
      <Router>
        <div>
          <Menu fixed="top" inverted={true}>
            <Container>
              <Menu.Item as="a"  header={true}>
                <Image size="mini" src="favicon.ico" style={{ marginRight: '1.5em' }} />
                React Starter
              </Menu.Item>
              <Link   to="/" className="item">Home</Link>
              <Link   to="/about" className="item">About</Link>
            </Container>
          </Menu>

          <Container text={true} style={{ marginTop: '7em' }} >
            <Route exact={true} path="/" component={() => <Home {...obj} />} />
            <Route  path="/about" component={() => <About />} />
          </Container>
        </div>
      </Router>
  );
}

export default App;
