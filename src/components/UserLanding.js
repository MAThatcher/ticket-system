import React from 'react';

class UserLanding extends React.Component {
  constructor(){
    super()
    this.state = {
      users:"User",

    }

}

  render(){
    return (
      <div className=" text-center text-white card-main">
        <h1 className="h3 mb-3 font-weight-normal" >Hello {this.state.users} </h1>
      </div>
    )
  }
}

export default UserLanding;
