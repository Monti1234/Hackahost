
import React, { Component } from 'react'
 
import UserProfile from 'react-user-profile'
import  Modal  from '../Modal';
import axios from 'axios';
import HackathonItem from '../hackItems/HackathonItem';
 
class App extends Component {
  constructor(){
    super();
    this.state = {
      hackathons : [],
     
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
    const photo = 'https://scontent.ftun1-1.fna.fbcdn.net/v/t1.0-9/17799908_1221431674632038_7669939019907582755_n.jpg?_nc_cat=104&_nc_ht=scontent.ftun1-1.fna&oh=63062f60e84ba4a7541d5aad88b1787d&oe=5CD7E8FB'
    const userName = 'Elkamel Montassar'
    const location = 'New York, USA'
 
    const comments = [
      {
        id: '1',
        photo: 'https://scontent.ftun1-1.fna.fbcdn.net/v/t1.0-9/17799908_1221431674632038_7669939019907582755_n.jpg?_nc_cat=104&_nc_ht=scontent.ftun1-1.fna&oh=63062f60e84ba4a7541d5aad88b1787d&oe=5CD7E8FB',
        userName: 'Elkamel Montassar',
        content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ',
        createdAt: 1543858000000
      }
    ]
 
    return (
      <div style={{ margin: '0 auto', width: '100%' }}>
     
        <UserProfile photo={photo} userName={userName} location={location}  initialLikesCount={0} initialFollowingCount={0} initialFollowersCount={0} initialComments={comments} />
        <Modal/>
        <ul  style={{color:'black'}}>
      {hackathonItems}
    </ul>
      </div>
    )
  }
}
 
export default App
            
        
