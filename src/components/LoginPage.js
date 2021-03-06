import React from "react"
import { Link } from 'react-router-dom';
import Axios from 'axios'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email:"user3@email.com",
            pw:"password3",
            badLogin: false
        }
        this.logIn = this.logIn.bind(this)
        this.passwordOnChange = this.passwordOnChange.bind(this)
        this.emailOnchange = this.emailOnchange.bind(this)


    }

    logIn (e) {
        e.preventDefault() 
        const {email, pw } = this.state
        Axios.post("http://localhost:5000/api/login", {email:email,pw:pw} ).then((res)=>{

            //successful login
            if (res.data.data !== false){
                const {userId,userName} = res.data[0]

                //if user is an admin
                if (res.data[0].admin.data[0] ===1){
                    this.props.history.push("/admin",{userId,userName})   
                }
                else if (res.data[0].admin.data[0]===0){
                    this.props.history.push("/user",{userId,userName})   
                }
            }
            else{
                this.setState({badLogin:true})
            }
         })
     }

    passwordOnChange(e){
        this.setState({pw : e.target.value})
    }
    emailOnchange(e){
        this.setState({email : e.target.value})
    }

    render(){
        return(    
                <div className="bg-transparent text-center text-white" >
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
                                autoFocus={false}
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

                        {/* <Link to="/ForgotPassword">
                            <button type="submit" className="btn  btn-primary "> Forgot Password </button>
                        </Link> */}

                    </div>
                    <div className="card-footer">
                        <span className="text-white">Created By Mitchell Thatcher. <br/>
                            Last updated 10-23-2020 <br/>
                            Test account Login Info-<br/>
                            Email: email@email.com <br/>
                            Password: Password </span>
                    </div>
                </div>
                
            
        )
    }
}

export default Login