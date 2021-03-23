import "./App.css";
import Nav from "./components/nav/Nav";
import {Switch, Route} from 'react-router-dom'
import AllStaff from './components/AllStaff'
import ViewReports from './components/ViewReports'
import Home from './components/Home'
import Login from './components/Login'
import CreateStaff from './components/CreateStaff'


const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path = '/allstaff' component = {AllStaff}>

        </Route>
        <Route exact path = '/viewreports' component = {ViewReports}>

        </Route>
        <Route exact path = '/login' component = {Login}>

        </Route>
        <Route exact path = '/' component = {Home}>

        </Route>
        <Route exact path = '/addstaff' component = {CreateStaff}>

        </Route>
      </Switch>
     
    </div>
  );
};

export default App;
