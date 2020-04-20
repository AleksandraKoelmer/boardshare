import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'



import './App.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import EventDetails from './components/events/EventDetails';
import CreateEvent from './components/events/CreateEvent';
import Sidebar from './components/layout/Sidebar';
import UserProfile from './components/user/UserProfile';
import UserEvents from './components/user/UserEvents';
import Chat from './chat/Chat'
import UpdateEvent from './components/events/UpdateEvent';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/event/:id' component={EventDetails} />
          <Route path='/create' component={CreateEvent} />
          <Route path='/user/:id' component={UserProfile} />
          <Route path='/userevents/:id' component={UserEvents}></Route>
          <Route path='/chat/:id' component={Chat}></Route>
          <Route path='/update/:id' component={UpdateEvent}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
