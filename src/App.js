import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfilePage from './Routes/ProfilePage';
import NotExist from './Routes/NotExist';

function App() {
  return (
    <Router>
      <Switch>
        <Route render={() => <ProfilePage />} path="/profile/:slug" />
        <Route render={() => <NotExist />} path="*" />
      </Switch>
    </Router>
  );
}

export default App;
