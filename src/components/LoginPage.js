import React from "react"
import userData from "../UserData"
import {Link} from 'react-router-dom';
import BadLogin from "./badLogin"

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            users: userData,
            email:"",
            pw:"",
            badLogin: false,
            verify: false
        }
        this.logIn = this.logIn.bind(this)
        this.passwordOnChange = this.passwordOnChange.bind(this)
        this.emailOnchange = this.emailOnchange.bind(this)


    }

    logIn(){
        // if email exists in users.userId and password matches
        // log in and take to the proper page. Admins to admin page
        // user to user page
        console.log("login Function")

        //determines if log in info is for a valid account
        var user = {}
        this.state.users.map( accountInfo => {
            if (accountInfo.userId === this.state.email && 
                accountInfo.userPw === this.state.pw &&
                    accountInfo.activated === true){
                user = accountInfo
            }
            else if (accountInfo.userId === this.state.email && 
                accountInfo.userPw === this.state.pw &&
                accountInfo.activated === false){
                    console.log("Verify account required")
                    this.setState({verify: true})
            }
        })
        console.log(user)
        console.log("end login  Function")
    }

    passwordOnChange(e){
        console.log("pwchange")
        this.setState({pw : e.target.value})
    }
    emailOnchange(e){
        console.log("emailchange")
        this.setState({email : e.target.value})
    }

    render(){
        const style = {
            color:"#FF0000"
        }
        return(    
                <body className="bg-transparent text-center text-white" >
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal" >Log In</h1>
                        {this.state.badLogin ? <p style={style}> Incorrect Login Info</p> : <div></div>}
                        {this.state.verify ? <p style={style}> Account Must be Verified</p> : <div></div>}
                        <input 
                            type="email" 
                            id="inputEmail" 
                            onChange={this.emailOnchange} 
                            value={this.state.email} 
                            placeholder="Email address" 
                            required 
                            autoFocus>
                        </input>
                        <br/>
                        <input 
                            type="password" 
                            id="inputPassword" 
                            value={this.state.pw} 
                            placeholder="Password" 
                            value={this.state.pw}
                            onChange={this.passwordOnChange}
                            required>
                        </input>
                        <br/><br/>
                        <button className="btn  btn-primary " onMouseOver={this.logIn}>Sign in</button>
                    </form>
                    <br></br>
                    <Link to="/CreateAccount">
                        <button  type="submit" className="btn  btn-primary "> Create Account </button>
                    </Link>
                    <br/><br/>
                    <Link to="/ForgotPassword">
                        <button type="submit" className="btn  btn-primary "> Forgot Password </button>
                    </Link>
                </body>
                
            
        )
    }
}

export default Login