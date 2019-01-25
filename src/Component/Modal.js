import React from 'react';
import axios from 'axios';
import { Button, Modal } from 'semantic-ui-react'

class ModalAdd extends React.Component{
    addEvent(newEvent){
axios.request({
    method:'post',
    url:'http://localhost:3000/api/events',
    data:newEvent
}).then( response => {
    this.props.history.push('/')
}).catch(err => console.log(err));
    }
onSubmit(e){
    const newEvent =  {
        organizer: this.refs.organizer.value,
        title: this.refs.title.value,
        topic: this.refs.topic.value,
       description: this.refs.description.value,
        location: this.refs.location.value,
        image: this.refs.image.value,
       date: this.refs.date.value
    }
     this.addEvent(newEvent);
     e.preventDefault();
}
render(){
    return(
 <Modal trigger={<Button>Add a Hackathon</Button>}>
        <Modal.Content>
      <form onSubmit={this.onSubmit.bind(this)}>
          <div  style={{diplay:'flex', flexDirection:'column'}}>
          <div style={{padding:'10px',display:'flex',flexDirection:'column'}}>
          <label className="label-control" htmlFor="title">Title </label>
          <input className="form-control" type="text" name="title" ref="title" />
      </div>
      <div style={{padding:'10px',display:'flex',flexDirection:'column'}}>
      <label className="label-control" htmlFor="topic">Topic </label>
          <input className="form-control" type="text" name="topic" ref="topic" />
      </div>
       <div style={{padding:'10px',display:'flex',flexDirection:'column'}}>
       <label className="label-control" htmlFor="description">Description </label>
          <input className="form-control" type="text" name="description" ref="description" />
         
      </div>
      <div style={{padding:'10px',display:'flex',flexDirection:'column'}}>
          <label className="label-control" htmlFor="location">Location </label>
          <input className="form-control" type="text" name="location" ref="location" />
         
      </div>
      <div style={{padding:'10px',display:'flex',flexDirection:'column'}}>
          <label className="label-control" htmlFor="image">Image Url </label>
          <input className="form-control" type="text" name="image" ref="image" />
         
      </div>
      <div style={{padding:'10px',display:'flex',flexDirection:'column'}}>
        <label className="label-control" htmlFor="date">Date </label>
        <input className="form-control" type="text" name="date" ref="date" />
         
      </div>
      <div style={{padding:'10px',display:'flex',flexDirection:'column'}}>
        <label className="label-control" htmlFor="organizer">Organizer </label>
        <input className="form-control" type="text" name="organizer" ref="organizer" />
         
      </div>
      <div style={{padding:'10px'}}>
          <input className="butt" style={{textAlign:'center',backgroundColor:'#005F91',color:'white',borderRadius:'5px'}} type="submit" value="save"/>
      </div>
          </div>
      </form>
    </Modal.Content>
  </Modal>
    )
}
}

export default ModalAdd