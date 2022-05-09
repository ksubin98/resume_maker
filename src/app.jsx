import React from 'react';
import Login from './components/login/login';
import styles from './app.module.css';

function App({authService}) {
  return (
    <div className={styles.app}>
      <Login/>
    </div>
  )
}
export default App;
