import React from "react"

function BadLogin(props) {
    if (props.badLogin === true){
        return(
            <h1>Incorrect Login</h1>
        )
    }
}

export default BadLogin