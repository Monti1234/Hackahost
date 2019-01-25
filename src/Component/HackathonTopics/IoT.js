import React, { Component } from 'react';
import axios from 'axios'
import HackathonItem from '../hackItems/HackathonItem';
import Modal from '../Modal';
export default class AI extends Component {
  constructor(){
    super();
    this.state = {
      hackathons : []
    }
  }
  componentWillMount(){
    this.getHackathons();
  }

  getHackathons(){
    axios.get('http://localhost:3000/api/events').then(response =>{
      this.setState({hackathons:response.data}, () =>
      {
        // console.log(this.state);
      })
    })
   
  }
  render() {
    const hackathonItems = this.state.hackathons.map((hackathon,i)=>{
      return(
        <HackathonItem key={hackathon.id} item={hackathon} />
      )
    })
    return (
      <div>
      <div>
    <div className="nav" style={{height:'100px'}}>
    <div className="logo">
       <h1 style={{cursor:'pointer'}}>Hacka</h1> <h1 id="host" style={{cursor:'pointer'}} >Host</h1>
       <h5 style={{margin:'0px'}}>Learn.Build.Share</h5>
       
       </div>
     
    </div>
        <img src="https://i.imgur.com/LyTYRBV.png" alt=""/>

    </div>
    <ul  style={{color:'black'}}>
      {hackathonItems}
    </ul>
      </div>
    )
  }
}

   