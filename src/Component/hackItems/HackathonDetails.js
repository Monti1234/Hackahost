import React, { Component } from 'react';
import axios from 'axios';
export default class hackathonDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      details:''
    }
  }

  componentWillMount(){
    this.getHackathon();
  }

  getHackathon(){
    let hackathonId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/events/${hackathonId}`)
    .then(response => {
      this.setState({details:response.data}, () =>   {
         console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  
  }
  onDelete(){
    let eventId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/events/${eventId}`)
    .then(response=>{
      this.props.history.push('/user_profile')
    })
  }
  render() {
    return (
       <div>
    <div className="nav" style={{height:'100px'}}>
    <div className="logo">
       <h1 style={{cursor:'pointer'}}>Hacka</h1> <h1 id="host" style={{cursor:'pointer'}} >Host</h1>
       <h5 style={{margin:'0px'}}>Learn.Build.Share</h5>
       
       </div>
      
    </div> 
    <div style={{border:'2px solid whitesmoke', marginLeft:'200px',marginRight:'200px'}}>
      <div style={{textAlign:'flex start',padding:'30px',display:'flex',flexDirection:'column'}}>
      <img src={this.state.details.image} alt="" style={{height:'400px'}}/>
      <h1>{this.state.details.title}</h1>
      <h1>Main Topic: <br/> {this.state.details.topic}</h1>
        <p>Description: <br/> {this.state.details.description} </p>
        <h3>Date : <br/>{this.state.details.date}</h3>
        <h1>Location : <br/>{this.state.details.location}</h1>
        
        
       <p><strong>Organizer : <br/>{this.state.details.organizer}</strong></p>
</div>
      </div>

      <button onClick={this.onDelete.bind(this)}>Delete</button> 
      <button>Edit</button>


    </div>
    )
  }
}
