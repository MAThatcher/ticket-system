import React from 'react';
import {BrowserRouter,Route}  from 'react-router-dom'
import LoginPage from "./components/LoginPage"
import UserLanding from "./components/UserLanding"
import AdminLanding from "./components/AdminLanding"
import ForgotPassowrd from "./components/ForgotPassword"
import CreateAccount from "./components/CreateAccount"
import Nav from "./components/Navbar"
import  './style.css'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        
          <Route path="/" component={Nav} />
          <Route path="/" exact component={LoginPage} />
          <Route path="/User" exact component={UserLanding} />
          <Route path="/Admin" exact component={AdminLanding} />
          <Route path="/ForgotPassword" exact component={ForgotPassowrd} />
          <Route path="/CreateAccount" exact component={CreateAccount} />
        
      </BrowserRouter>
    )
  }
}

export default App;
