import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';

const App = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = {enter: 300, exit: 200}
  return(    
      <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <div className="page-main-inner">
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
  )
}

export default withRouter(App);
