import React from 'react';
import TicketItem from './TicketItem'
import Axios from 'axios'

class AdminLanding extends React.Component {
  constructor(){
    super()
    this.state = {
      tickets:[],
      email:"admin1@email.com",
      userName:'LUNA_Jeb'
  }
}

//retrieve all tickets from this user
componentDidMount(){
  const email = this.state.email
  Axios.get("http://localhost:5000/api/adminPage").then((res)=>{
          this.setState({tickets:res.data})
         })
}

  render(){
    const ticketItem = this.state.tickets.map( (ticket) => 
      <TicketItem 
        key={ticket.ticketId}
        ticketId={ticket.ticketId}
        date={ticket.ticketDate}
        userName={ticket.userName}
        message={ticket.messageText}
      />
    )
    return (
      <div>
        <div className=" text-center text-white card-main ">
          <h1 className="h3 mb-3 font-weight-normal" >Hello {this.state.userName} </h1>
        </div>
        <div className=" text-center text-white card-main width-85">
          <table className="table table-striped table-dark table-hover" >
            <thead className="thead thead-dark">
              <tr>
                <th scope="col" style={{width:"150px"}}>Ticket Number</th>
                <th scope="col"style={{width:"150px"}}>Date Created</th>
                <th scope="col">Ticket Summary</th>
                <th scope="col"style={{width:"250px"}}>Open</th>
              </tr>
            </thead>
            <tbody>
              {ticketItem}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default AdminLanding;
