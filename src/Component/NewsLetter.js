import React, { Component } from 'react'

export default class NewsLetter extends Component {
  render() {
    return (
      <div className="news-letter">
        <p>Hackathons are the news of innovation</p>
        <form action="/news_letter">
         <input type="text" placeholder="Email Address" id="url" />
         <input type="button" value="SUBSCRIBE" id="subscribe"/>
         </form>
      </div>
    )
  }
}
