import React from 'react';
import {BrowserRouter,Route}  from 'react-router-dom'
import LoginPage from "./components/LoginPage"
import UserLanding from "./components/UserLanding"
import ForgotPassowrd from "./components/ForgotPassword"
import CreateAccount from "./components/CreateAccount"
import Nav from "./components/Navbar"

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        
          <Route path="/" component={Nav} />
          <Route path="/" exact component={LoginPage} />
          <Route path="/Home" exact component={UserLanding} />
          <Route path="/ForgotPassword" exact component={ForgotPassowrd} />
          <Route path="/CreateAccount" exact component={CreateAccount} />
        
      </BrowserRouter>
    )
  }
}

export default App;
