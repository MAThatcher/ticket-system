import React from 'react'

function TicketItem (props) {

    function openTicket (){
        // TODO: send to .ticket
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