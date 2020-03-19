import React from "react"

class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark border border-dark   " >
                <img src="moon.png" height="40" width="40" />
                <a className="navbar-brand">Luna Ticketing Program</a>
            </nav>
        )
    }
}

export default Navbar