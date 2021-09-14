import React, { useEffect, useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Error404 from './components/Error404';


export default function App(props) {
  const [logged, setLogged] = useState(false)
  return (

    <div>
      <Router>

        <nav id="nav">
          <ul className="list">
            <li className="btn-nav">
              <Link to="/" >Home</Link>
            </li>
            <li className="btn-nav">
              <Link to="/login" >Login</Link>
            </li>
          
          </ul>
        </nav>

        <Switch>

          <Route exact path="/" ><Home/></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="*" component={Error404}></Route>


        </Switch>

      </Router>
    </div>
  );
}


