import React from "react"
import '../style.css'
class Footer extends React.Component{
    render(){
        return(
            <footer className="footer mt-auto py-3 bg-transparent text-left">
                <div className="card-footer">
                    <span className="text-white">Created By Mitchell Thatcher. Last updated 10-16-2020 <br/>
                        Test account Login Info-<br/>
                        Email: user1@email.com <br/>
                        Password: password1 </span>
                </div>
            </footer>
        )
    }
}

export default Footer