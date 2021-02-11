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
import Books  from './screens/Books';
import Series  from './screens/Series';
import Gifts  from './screens/Gifts';
import EmptyCart  from './screens/EmptyCart';
import ViewCart  from './screens/ViewCart';
import KidsLife  from './screens/KidsLife';
import ScrollTop from './screens/ScrollTop';

import './App.css';

function App() {
  return (
   <Router>
    <div>
      <ScrollTop>
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
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/series">
            <Series />
          </Route>
          <Route path="/gifts">
            <Gifts />
          </Route>
          <Route path="/emptycart">
            <EmptyCart />
          </Route>
          <Route path="/viewcart">
            <ViewCart />
          </Route>
          <Route path="/kidslife">
            <KidsLife />
          </Route>
        </Switch>
        </ScrollTop>
    </div>
  </Router>
  );
}

export default App;
