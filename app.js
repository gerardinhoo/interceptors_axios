import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Error from "./components/error/Error"; // import the error component into app.js


const App = props => {
  return (
    <Provider store={props.store}>
      <Router>
        <Switch>
            <Route
              path='/error'
              component= {Error}
            />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
