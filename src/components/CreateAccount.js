import React from "react"
import {Link} from 'react-router-dom'
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
    if (this.state.username.length <= 5){
      alert("User Name must be 6 characters or more")
    }
    else if(this.state.pw1 !== this.state.pw2){
      this.setState({pwSame:false})
      this.setState({emailExists:false})
      alert("Passwords do not match")
    }    
    else if (this.state.pw1.length <= 7 || this.state.pw1.length <=7){
      alert("Password must be 8 characters or more")
    }
    else{
      this.setState({pwSame:true})
      const email = this.state.email
      const pw = this.state.pw1
      const userName = this.state.username
      Axios.post("http://localhost:5000/api/createAccount", {email:email,pw:pw,userName:userName} ).then((res)=>{ 
          if(res.data.exists===true){
            this.setState({emailExists:true})
            alert("Email taken")
          }
          else{
            this.setState({emailExists:false})
            alert("Account Created")
            this.setState({
              email:"",
              username:"",
              pw1:"",
              pw2:""
            })
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
      <div className="bg-transparent text-center text-white" ><br/>
        <div className="card-main">
        <h1 className="h3 mb-3 font-weight-normal" >Create Account</h1>
        <div>Please fill out this form</div>
        <form className="form-signin">

          {this.state.emailExists ? <div>Email Taken</div>:<div/> }
          {this.state.pwSame ? <div/> : <div>Passwords Do Not Match</div>}
          
          <input type="email" 
            id="inputEmail" 
            autoFocus 
            placeholder="Email"
            required={true}
            value={this.state.email}
            onChange={this.updateEmail}>
          </input><br/>

          <input type="text" 
            id="userName" 
            placeholder="UserName" 
            required={true}
            minLength="6"
            value={this.state.username}
            onChange={this.updateUsername}>
          </input><br/><br/>

          <input type="password" 
            id="inputpassword1" 
            placeholder="Password"
            required={true}
            minLength="8"
            value={this.state.pw1}
            onChange={this.updatePw1}> 
          </input><br/>

          <input type="password" 
            id="inputpassword2" 
            placeholder="Confirm Password"                                                              
            required={true}
            minLength="8"
            value={this.state.pw2}
            onChange={this.updatePw2}>
          </input><br/><br/>

          <button type="submit" className="btn  btn-primary" onClick={this.createAccount}>Create Account</button>

        </form>
      </div><br/>
      <div className="card-main width-05">
        <Link to="/">
          <button type="submit" className="btn  btn-primary "> Login </button>
        </Link>
      </div>
      <div className="card-footer">
        WARNING! Passwords currntly stored as plain text
      </div>
  </div>
    )
  }
}

export default CreateAccount;
