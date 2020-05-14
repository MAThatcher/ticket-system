import React from "react";

class CreateAccount extends React.Component {
  constructor(){
    super()
    this.state = {
      passwordSame:true
    }
    this.updatePw = this.updatePw.bind(this)
}

updatePw(){
  
}

  render(){
    return (
      <div>
        <div>Create Account</div><br/>
        <div>Please fill out this form</div>
        <form className="form-signin">
          <input type="email" 
            id="inputEmail" 
            autoFocus 
            placeholder="Email"
            required></input><br/>

          {!this.state.passwordSame ? <p > Passwords Do Not Match</p> : <p></p>}

          <input type="password" 
            id="inputPassword1" 
            placeholder="Password"
            required></input><br/>

          <input type="password" 
            id="inputPassword2" 
            placeholder="Password"
            required></input><br/><br/>

          <input type="text" id="userName" placeholder="UserName" required></input><br/><br/>

          <button type="submit" className="btn  btn-primary ">Create Account</button>

        </form>
      </div>

    )
  }
}

export default CreateAccount;
