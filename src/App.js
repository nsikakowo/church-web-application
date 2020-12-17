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
import Missions from './screens/Missions';
import EventsSingle  from './screens/EventsSingle';
import Payment  from './screens/Payment';
import ServiceRegistration  from './screens/ServiceRegistration';
import NewMemberResource  from './screens/NewMemberResource';
import NewMemberResourceSingle  from './screens/NewMemberResourceSingle';
import ContactUs  from './screens/ContactUs';
import GetDirections  from './screens/GetDirections';

import './App.css';

function App() {
  return (
   <Router>
    <div>
    <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/aboutpage">
            <AboutPage />
          </Route>
          <Route path="/servicetimes">
            <ServiceTimes />
          </Route>
          <Route path="/eventspage">
            <EventsPage />
          </Route>
          <Route path="/sermonpage">
            <SermonPage />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/connect">
            <Connect />
          </Route>
          <Route path="/welcometochurch">
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
          <Route path="/volunteer">
            <Volunteer />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/eventssingle">
            <EventsSingle />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/serviceregistration">
            <ServiceRegistration />
          </Route>
          <Route path="/newmemberresource">
            <NewMemberResource />
          </Route>
          <Route path="/newmemberresourcesingle">
            <NewMemberResourceSingle />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/getdirections">
            <GetDirections />
          </Route>
        </Switch>
     
    </div>
  </Router>
  );
}

export default App;
