import React from "react";
import userData from "../UserData"

class CreateAccount extends React.Component {
  constructor(){
    super()
    this.state = {
      users:userData,
      email:"",
      username:"",
      pw1:"",
      pw2:"",
      pwSame:true,
      emailExists:false
    }
    this.createAccount = this.createAccount.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updateUsername = this.updateUsername.bind(this)
    this.updatePw1 = this.updatePw1.bind(this)
    this.updatePw2 = this.updatePw2.bind(this)
}

  createAccount(){
    console.log("createAccount")
    if(this.state.pw1 !== this.state.pw2){
      this.setState({pwSame:false})
    }
    else{
      this.setState({pwSame:true})
      const existingEmail = this.state.users.filter(loginInfo => loginInfo.userId === this.state.email)
      if (existingEmail.length === 1){
        console.log("User Exists all ready")
        this.setState({emailExists:true})
      }
      else if (existingEmail.length === 0){
        //add user to database
      }
    }
    console.log(this.state)
  }
  updateEmail(e){
    this.setState({email: e.target.value})
  }

  updateUsername(e){
    this.setState({username: e.target.value})
  }

  updatePw1(e){
    this.setState({pw1: e.target.value})
  }

  updatePw2(e){
    this.setState({pw2: e.target.value})
  }

  render(){
    return (
      <div className="bg-transparent text-center text-white" >
        <div>Create Account</div><br/>
        <div>Please fill out this form</div>
        <form className="form-signin">

          {this.state.emailExists ? <div>Email Taken</div>:<div/> }
          {this.state.pwSame ? <div/> : <div>Passwords Do Not Match</div>}
          
          <input type="email" 
            id="inputEmail" 
            autoFocus 
            placeholder="Email"
            required
            value={this.state.email}
            onChange={this.updateEmail}>
          </input><br/>

          <input type="text" 
            id="userName" 
            placeholder="UserName" 
            required
            minLength="6"
            value={this.state.username}
            onChange={this.updateUsername}>
          </input><br/><br/>

          <input type="password" 
            id="inputpassword1" 
            placeholder="Password"
            required
            minLength="8"
            value={this.state.pw1}
            onChange={this.updatePw1}> 
          </input><br/>

          <input type="password" 
            id="inputpassword2" 
            placeholder="Confirm Password"
            required
            minLength="8"
            value={this.state.pw2}
            onChange={this.updatePw2}>
          </input><br/><br/>

          <button type="submit" className="btn  btn-primary" onMouseOver={this.createAccount}>Create Account</button>

        </form>
      </div>

    )
  }
}

export default CreateAccount;
