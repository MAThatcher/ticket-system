import React from 'react';
import Login from './components/LoginPage.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <Login />
        <Footer />


      </div>
    )
  }
}

export default App;
