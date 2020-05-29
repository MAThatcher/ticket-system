import React from "react"

class Footer extends React.Component{
    render(){
        return(
            <footer className="footer mt-auto py-3 bg-transparent text-left">
                <div className="container">
                    <span className="text-white-50">Created By Mitchell Thatcher. Last updated 5-28-2020 <br/>
                        Login Info-<br/>
                        Email: user1@email.com <br/>
                        Password: password1 </span>
                </div>
            </footer>
        )
    }
}

export default Footer