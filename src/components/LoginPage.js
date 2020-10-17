import React from "react"
import {Link} from 'react-router-dom';
import Axios from 'axios'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email:"",
            pw:"",
            badLogin: false
        }
        this.logIn = this.logIn.bind(this)
        this.passwordOnChange = this.passwordOnChange.bind(this)
        this.emailOnchange = this.emailOnchange.bind(this)


    }

    componentDidMount(){
        Axios.get("http://localhost:5000/api/get").then((response)=>{
            console.log(response.data[0].userId)
            })
    }

    logIn (e) {
        e.preventDefault() 
         const email = this.state.email
         const pw = this.state.pw
         console.log(email,pw)
         Axios.get("http://localhost:5000/api/login", {email,pw }).then((res)=>{
            console.log(res)
            console.log("yes!")
         })
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
        return(    
                <body className="bg-transparent text-center text-white" >
                    <br/>
                    <div className=" card-main">
                        <h1 className="h3 mb-3 font-weight-normal" >Log In</h1>
                        <form className="form-signin">
                            
                            
                            {this.state.badLogin ? <p style={{color:"#FF0000"}}> Incorrect Login Info</p> : <div></div>}

                            <input 
                                type="email" 
                                id="inputEmail" 
                                onChange={this.emailOnchange} 
                                value={this.state.email} 
                                placeholder="Email address" 
                                required 
                                autoFocus>
                            </input><br/>
                                
                            <input 
                                type="password" 
                                id="inputPassword" 
                                value={this.state.pw} 
                                placeholder="Password" 
                                onChange={this.passwordOnChange}
                                required>
                            </input>

                            <br/><br/>

                            <button className="btn  btn-primary " onClick={this.logIn}>Sign in</button>
                            
                        </form>

                        <br></br>

                        <Link to="/CreateAccount">
                            <button  type="submit" className="btn  btn-primary "> Create Account </button>
                        </Link>

                        <br/><br/>

                        <Link to="/ForgotPassword">
                            <button type="submit" className="btn  btn-primary "> Forgot Password </button>
                        </Link>

                    </div>
                </body>
                
            
        )
    }
}

export default Login