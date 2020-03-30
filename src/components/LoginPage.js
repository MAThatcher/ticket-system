import React from "react"
import userData from "../UserData"
import {Link} from 'react-router-dom';

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            users: userData
        }
        this.logIn = this.logIn.bind(this)

    }

    logIn(){
        // if email exists in users.userId and password matches
        // log in and take to the proper page. Admins to admin page
        // user to user page
        console.log("login Function")
        //const userItem = this.state.users.map(item => console.log(item.userId))
        console.log("end login Function")
    }

    render(){
        return(    
                <body className="bg-transparent text-center text-white" >
                    <form className="form-signin" action={this.logIn()}>
                        <img className="mb-4" src="../../public/moon.png" alt="" width="72" height="72"></img>
                        <h1 className="h3 mb-3 font-weight-normal" >Log In</h1>
                        <input type="email" id="inputEmail"  placeholder="Email address" required autoFocus></input>
                        <br/>
                        <input type="password" id="inputPassword"  placeholder="Password" required>
                        </input>
                        <br/><br/>
                        <button className="btn  btn-primary " type="submit">Sign in</button>
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