import React from 'react'

function TicketItem (props) {

    function openTicket (){
        const {userId, userName,ticketId} = props

        // TODO: send to .ticket
        //this.props.history.push("/Ticket",{userId,userName,ticketId})               
    }



    return(
            <tr>
                <td>{props.date}</td>
                <td>{props.message}</td>
                <td>{props.ticketId}</td>             
                <td><button className="btn  btn-primary " onClick={openTicket}>Open Ticket</button></td>
            </tr>
    )
}

export default TicketItem