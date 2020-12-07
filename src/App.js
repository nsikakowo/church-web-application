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
import WelcomeToChurch from './screens/WelcomeToChurch';
import NewHere from './screens/NewHere';
import NewLifeInChrist from './screens/NewLifeInChrist';
import HomeCellGroup from './screens/HomeCellGroup';
import Volunteer from './screens/Volunteer';

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
          <Route path="/welcomeToChurch">
            <WelcomeToChurch />
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
          <Route path="/newHere">
            <NewHere />
          </Route>
          <Route path="/newlifeinchrist">
            <NewLifeInChrist />
          </Route>
          <Route path="/homecellgroup">
            <HomeCellGroup />
          </Route>
          <Route path="/Volunteer">
            <Volunteer />
          </Route>
        </Switch>
     
    </div>
  </Router>
  );
}

export default App;
