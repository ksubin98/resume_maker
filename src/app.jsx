import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';
import Login from './pages/Login';
import Main from './pages/Main';

function App({auth}) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={['/', '/home']}>
            <Login auth={auth}/>
          </Route>
          <Route path="/Main">
            <Main />
          </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App;
