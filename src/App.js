import {
  BrowserRouter as Router,
  
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './screens/HomePage';
import Connect from './screens/Connect';
import SermonPage from './screens/SermonPage';
import AboutPage from './screens/AboutPage';
import ServiceTimes from './screens/ServiceTimes';
import EventsPage from './screens/EventsPage';
import Store from './screens/Store';
import GivePage from './screens/GivePage';
import SignIn from './screens/SignIn';
import Register from './screens/Register';

import './App.css';

function App() {
  return (
   <Router>
    <div>
    <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/aboutPage">
            <AboutPage />
          </Route>
          <Route path="/serviceTimes">
            <ServiceTimes />
          </Route>
          <Route path="/eventsPage">
            <EventsPage />
          </Route>
          <Route path="/sermonPage">
            <SermonPage />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/connect">
            <Connect />
          </Route>
          <Route path="/givePage">
            <GivePage />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
     
    </div>
  </Router>
  );
}

export default App;
