import React from "react"
import {Link} from 'react-router-dom';
import moonReversed from './img/moonReversed.png'
import moon from './img/moon.png'
class Navbar extends React.Component{
    constructor(){
        super()
        this.state= {
            size:40,
            imageLocation:moon
        }
        this.handleHover = this.handleHover.bind(this)
        this.handleExit = this.handleExit.bind(this)
    }


    handleExit() {
        this.setState(prevState => {
            return {
                imageLocation:moon
            }
        })
    }

    handleHover() {
        this.setState( () => {
            return {
                imageLocation:moonReversed
            }
        })
    }

    render(){
        return (
            <nav style={{backgroundColor: "#34537f"}}className="navbar text-white" >
                <Link to="/">
                    <img alt="" onMouseEnter={this.handleHover} onMouseLeave= {this.handleExit} src={this.state.imageLocation} height={40} width={40} />
                </ Link>
                <label className="navbar-brand">Luna Ticketing Program</label>
            </nav>
        )
    }
}

export default Navbar