import React from 'react';

class AdminLanding extends React.Component {
  constructor(){
    super()
    this.state = {
      users:"Admin",

    }

}

  render(){
    return (
      <div className="bg-transparent text-center text-white">
        <h1 className="h3 mb-3 font-weight-normal" >Hello {this.state.users} </h1>
      </div>
    )
  }
}

export default AdminLanding;
