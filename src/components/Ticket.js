import React from "react"

class Ticket extends React.Component{
    constructor(){
        super()
        this.state = {
            ticketMessages:[],
            userName:'',
            userId:''
        }
    }

    
    //Load ticket
    componentDidMount(){
    // console.log(this.props.location.state)
    //try catch block to prevent crashing when manually going to /user
    // try{
    // const {userId, userName} = this.props.location.state
    // this.setState({userId,userName})
    // Axios.post("http://localhost:5000/api/ticket",{userId}).then((res)=>{
    //         this.setState({ticketMessages:res.data})
    //        })
    // }
    // catch (e){
    //   this.props.history.push("/")  
    // }
  }

    render(){
        return(    
                <div >ticket</div>          
        )
    }
}

export default Ticket