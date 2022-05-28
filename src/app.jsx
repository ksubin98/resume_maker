import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={['/', '/home']}>
            <Login />
          </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App;
