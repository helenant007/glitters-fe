import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfilePage from './Routes/ProfilePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route render={() => <ProfilePage />} path="/profile" />
      </Switch>
    </Router>
  );
}

export default App;
