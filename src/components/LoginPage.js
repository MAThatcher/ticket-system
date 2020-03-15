import React from "react"
function Login(){
    return(
        <body className="text-center">
            <form className="form-signin">
                <img className="mb-4" src="../../public/moon.png" alt="" width="72" height="72"></img>
                <h1 className="h3 mb-3 font-weight-normal">Log In</h1>
                <input type="email" id="inputEmail"  placeholder="Email address" required autofocus></input><br/>
                <input type="password" id="inputPassword"  placeholder="Password" required>
                </input><br></br><br></br>
                <button className="btn btn-lg btn-primary " type="submit">Sign in</button>
            </form><br></br>
            <form action="./newAccount.html">
                 <button type="submit" className="btn btn-lg btn-primary "> Create Account </button>
            </form><br></br>
            <form action="">
               <button type="submit" className="btn btn-lg btn-primary "> Forgot Password </button>
            </form>
        </body>
            
        
    )
}

export default Login