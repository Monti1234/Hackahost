import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class LogIn extends Component {
  constructor(props){
    super(props);
    this.state = {
     email:'',
     password:''
    }
    
    

    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
  }
  onSubmit(e) {
    e.preventDefault();
    this.login(this.state)
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }

  saveToken({token, userId}) {
    localStorage.setItem("token", JSON.stringify({token, userId}))
  }

  login(emailAndPassword){
    axios.post('http://localhost:3000/api/Users/login', emailAndPassword)
      .then(res => res.data)
      .then(response =>{
        this.saveToken({token: response.id, userId: response.userId})
        this.props.history.push("/user_profile");

      })
      .catch(err => {
        alert(' Wrong paasword')
      })
   
  }
  render() {     
    return (
      
      <div>
      <div className="logo">
       <h1 style={{cursor:'pointer'}}>Hacka</h1> <h1 id="host" style={{cursor:'pointer'}} >Host</h1>
       <h5 style={{margin:'0px'}}>Learn.Build.Share</h5>
       
       </div>
        <form  onSubmit={this.onSubmit}>
          <div className="login-form">
          <h3 style={{color:"#00939E"}}>Log in</h3>
         <div className="label-desc">
         <label  type="text">Email</label>
          <input className="input-desc" field="identifier" 
          label="username / email"
          name="email"
            onChange={this.onChange}
           /> 
         </div>
           <div className="label-desc">
           <label type="text">Password</label>
           <input className="input-desc" field="password" 
          label="password"
          name="password"
          
            onChange={this.onChange}
            type="password"
           />
           </div>
          
           <button className="butt" style={{marginTop:'30px',backgroundColor:'#00939E',color:'white',borderRadius:'5px',marginLeft:'300px'}} >Log in </button>
        
           </div>
        </form>
      </div>
    )
  }
}
