import React from 'react'

function TicketItem (props) {
    return(
            <tr>
                <td>{props.date}</td>
                <td>{props.message}</td>
                <td>{props.ticketId}</td>             
                <td><button className="btn  btn-primary ">Open Ticket</button></td>
            </tr>
    )
}

export default TicketItem