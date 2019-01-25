import React from 'react'

const Events = () => {
  return (
    <div className="event">
      <h4>Choose <a id="on" href="#">ONLINE</a> or <a id="off" href="#">LOCAL</a> </h4>
      <div className="home-search__separator">_______</div>
      <div className="search">
      <p id="city">I am interested in hackathons in</p>
      <input type="text" name="search" data-localisation="" className="home-search__form__input" placeholder="Enter a city Name"></input>
      
      </div>
     
    </div>
  )
}

export default Events
