import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Topic extends Component {
    constructor(props){
        super(props)
      }
  render() {
    return (
      <Link to={`/${this.props.topic.desc}`} style={{textDecoration:'none'}}>
        <div style={{padding:'15px'}}>
      <div style={{width:'272px',height:'290px',backgroundColor:'#4DCFD3',position:"relative",boxShadow:'2px 4px 2px rgba(0,0,0,0.4)',textDecoration:'none'}}>
        <img style={{width:'272px',height:'160px'}} src={this.props.topic.image} alt=""/>
         <h1 style={{border:'solid white',color:'grey',fontSize:'20px',borderRadius:'50%',textAlign:'center',backgroundColor:'white',right:'30%',position:'absolute',top:'90px',padding:'40px',fontFamily:'kreon,serif',textDecoration:'none',fontWeight:'200'}}>{this.props.topic.avatar}</h1>
        <h2 style={{color:'white',textAlign:'center',paddingTop:'40px',fontSize:'20px',fontWeight:'100',fontFamily:'kreon,serif',textDecoration:'none'}}>{this.props.topic.desc}</h2>
      </div>
      </div>
      </Link>
    )
  }
}

