import React from 'react';
import {Link} from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'


class CardExampleImageCard extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       item:props.item
     }
   }
  render () {
    return (
      <div >

      <div >
      <Card style={{margin:'50px',display:'block',}}>
       <Link to={`/hackathons/${this.state.item.id}`} >
    <Image src={this.state.item.image} />
    </Link>
    <Card.Content >
      <Card.Header>{this.state.item.title}</Card.Header>
      <Card.Meta>{this.state.item.topic}</Card.Meta>
      <Card.Description>{this.state.item.description}</Card.Description>
    </Card.Content>
    <Card.Content extra><Icon name='location arrow' />
     {this.state.item.location}
    </Card.Content>
  </Card>
      </div>
      </div>
      )
  }
}

export default CardExampleImageCard