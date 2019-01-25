import React, { Component } from 'react'
import Axios from 'axios';

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            emailVerified:'',
            password:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        Axios.post('http://localhost:3000/api/Users', this.state)
    }
  render() {
    return (
        <div>
        <div >
        <h1 style={{cursor:'pointer'}}>Hacka</h1> <h1 id="host" style={{cursor:'pointer'}} >Host</h1>
       <h5 style={{margin:'0px'}}>Learn.Build.Share</h5>
       </div>
      <div className="signup-forms">
        <form className="form" onSubmit={this.onSubmit}>
            <h1 style={{color:'#00939E'}}>Join our community !</h1>
            <div className="forms">
            <div className="form-group">
                <label className="label-control">Username</label>
                <input value={this.state.username} onChange={this.onChange} type="text" name="username" className="form-control"/>

            </div>
            <div className="form-group">
                <label className="label-control">Email</label>
                <input value={this.state.email} onChange={this.onChange} type="text" name="email" className="form-control"/>

            </div>
            <div className="form-group">
                <label className="label-control">emailVerified</label>
                <input value={this.state.emailVerified} onChange={this.onChange} type="text" name="emailVerified" className="form-control"/>

            </div>
            <div className="form-group">
                <label className="label-control">Password </label>
                <input value={this.state.password} onChange={this.onChange} type="password" name="password" className="form-control"/>

            </div>
            </div>
            <button className="butt" style={{marginTop:'30px',backgroundColor:'#00939E',color:'white',borderRadius:'5px',marginLeft:'300px'}}>Sign Up </button>
        </form>
      </div>
      </div>
    )
  }
}

