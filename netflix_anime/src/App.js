import {Button} from 'rsuite'
import './App.css';
import Layout from './Components/Layout'
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'

import 'rsuite/dist/styles/rsuite-default.css';

import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>

      <div className="App">
        {/* <NavLink activeClassName='active' to='/SignUp'>XYZ</NavLink> */}
          {/* <NavLink activeClassName='active' to='/LogIn'/> */}
          <NavLink exact activeClassName='active' to='/'></NavLink>
        
          <Switch>
            <Route exact path = '/' component={Layout}/> 
            <Route path='/Signup' component={SignUp}/>
            <Route path='/Login' component={LogIn}/>
          </Switch>
          {/* <Layout/> */}
          {/* <LogIn /> */}
          {/* <SignUp /> */}
      </div>

    </Router>
  );
}

export default App;