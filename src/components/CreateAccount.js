import React from "react";
import Axios from 'axios'
class CreateAccount extends React.Component {
  constructor(){
    super()
    this.state = {
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

  createAccount(event){
    console.log("createAccount")
    if(this.state.pw1 !== this.state.pw2){
      this.setState({pwSame:false})
      this.setState({emailExists:false})
    }
    else{
      this.setState({pwSame:true})
      const email = this.state.email
      const pw = this.state.pw1
      const userName = this.state.username
      Axios.post("http://localhost:5000/api/createAccount", {email:email,pw:pw,userName:userName} ).then((res)=>{ 
          if(res.data.exists===true){
            this.setState({emailExists:true})
          }
          else{
            this.setState({emailExists:false})
            alert("Account Created")
          }
        })
    }
    event.preventDefault()
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
        <h1 className="h3 mb-3 font-weight-normal" >Create Account</h1>
        <div className="card-main">
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

          <button type="submit" className="btn  btn-primary" onClick={this.createAccount}>Create Account</button>

        </form>
      </div>
  </div>
    )
  }
}

export default CreateAccount;
