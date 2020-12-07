import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import Resume from "./resume.json";

class App extends Component {
  componentDidMount() {
    document.title = [
      Resume.basics.name,
      Resume.basics.label,
      [Resume.basics.location.region, Resume.basics.location.country].join(", ")
    ].join(" | ");
  }

  render() {
    return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
              <Route path='/TermsAndConditions' component={TermsAndConditions} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
