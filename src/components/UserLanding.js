import React from 'react';
import TicketItem from './TicketItem'
import Axios from 'axios'

class UserLanding extends React.Component {
  constructor(){
    super()
    this.state = {
      tickets:[],
      userId:"",
      userName:""
  }
}

//retrieve all tickets from this user
componentDidMount(){

  //try catch block to prevent crashing when manually going to /user
  try{
    const {userId, userName} = this.props.location.state
    this.setState({userId,userName})
    Axios.post("http://localhost:5000/api/userPage",{userId}).then((res)=>{
            this.setState({tickets:res.data})
            
          })
  }
  catch (e){
    this.props.history.push("/")  
  }
}

  render(){
    const ticketItem = this.state.tickets.map( (ticket) => 
      <TicketItem 
        key={ticket.ticketId}
        ticketId={ticket.ticketId}
        date={ticket.ticketDate}
        userName={ticket.userName}
        message={ticket.messageText}
        userId={ticket.userId}
      />
    )
    return (
      <div><br/>
        <div className=" text-center text-white card-main ">
          <h1 className="h3 mb-3 font-weight-normal" >Hello {this.state.userName} </h1>
        </div><br/>
        <div className=" text-center text-white card-main width-85">
          <table className="table table-striped table-dark table-hover" >
            <thead className="thead thead-dark">
              <tr>
                
                <th scope="col"style={{width:"300px"}}>Date Created</th>
                <th scope="col">Ticket Summary</th>
                <th scope="col" style={{width:"150px"}}>Ticket ID</th>
                <th scope="col"style={{width:"150px"}}>Open</th>
              </tr>
            </thead>
            <tbody>

              {ticketItem}

            </tbody>
          </table>          
        </div><br/>
        <div className="card-main">
          <button className="btn  btn-primary ">New Ticket</button>
        </div>
      </div>
    )
  }
}

export default UserLanding;
