import React from "react"

class Navbar extends React.Component{
    constructor(){
        super()
        this.state= {
            size:40,
            imageLocation:"./moon.png"
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleHover = this.handleHover.bind(this)
        this.handleExit = this.handleExit.bind(this)
    }

    handleClick() { 
        //return to menue
    }

    handleExit() {
        this.setState(prevState => {
            return {
                imageLocation:"./moon.png"
            }
        })
    }

    handleHover() {
        this.setState(prevState => {
            return {
                imageLocation:"./moonReversed.png"
            }
        })
    }

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark border border-dark" >
                <img onMouseEnter={this.handleHover} onMouseLeave= {this.handleExit} onClick={this.handleClick} src={this.state.imageLocation} height={40} width={40} />
                <label className="navbar-brand">Luna Ticketing Program</label>
            </nav>
        )
    }
}

export default Navbar