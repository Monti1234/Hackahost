import React, { Component } from 'react'
import CarouselPage from './Slider'
import NavMenu from './NavMenu';
import Services from './Services'
import Events from './Events';
import Topics from './TopTopics/Topics';
import Corporation from './Corporation';
import NewsLetter from './NewsLetter';
import Footer from './Footer';



export default class Home extends Component {
  render() {
    return (
      <div>
      <NavMenu />
        <CarouselPage />
        <Events/> 
        <Topics />
        <Services />
        <Corporation/>
        <NewsLetter/>
        <Footer/>
      </div>
    )
  }
}
