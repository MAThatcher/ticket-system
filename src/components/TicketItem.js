import React from 'react'

function TicketItem (props) {
    return(
            <tr>
                <td>{props.ticketId}</td>
                <td>{props.date}</td>
                <td>{props.message}</td>
                <td><button>Open Ticket</button></td>
            </tr>
    )
}

export default TicketItem