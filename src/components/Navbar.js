import React from "react"
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    constructor(){
        super()
        this.state= {
            size:40,
            imageLocation:"./moon.png"
        }
        this.handleHover = this.handleHover.bind(this)
        this.handleExit = this.handleExit.bind(this)
    }


    handleExit() {
        this.setState(prevState => {
            return {
                imageLocation:"./moon.png"
            }
        })
    }

    handleHover() {
        this.setState( () => {
            return {
                imageLocation:"./moonReversed.png"
            }
        })
    }

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark border border-dark" >
                <Link to="/">
                    <img onMouseEnter={this.handleHover} onMouseLeave= {this.handleExit} src={this.state.imageLocation} height={40} width={40} />
                </ Link>
                <label className="navbar-brand">Luna Ticketing Program</label>
            </nav>
        )
    }
}

export default Navbar