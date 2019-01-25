import React from 'react'

function CorpPage() {
  return (
    <div>
    <div className="nav">
       <div className="logo">
       <h1 style={{cursor:'pointer'}}>Hacka</h1> <h1 id="host" style={{cursor:'pointer'}} >Host</h1>
       <h5 style={{margin:'0px'}}>Learn.Build.Share</h5>
       
       </div>
    </div>
    <h1 style={{textAlign:'center'}}>Organize a succesful corporate hackathon</h1>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequatur doloremque optio beatae corporis, expedita numquam officia a deleniti repellendus nam quibusdam perspiciatis vitae dolores harum maxime repellat sint cum! </p>
      <img src="https://www.marsdd.com/wp-content/uploads/2018/06/job-fairs-hackathons-1998x1100.jpg" alt=""/>
    <div>
      <div style={{display:'flex',justifyContent:'center',padding:'200px'}}>

      <div style={{borderRight:'solid ',padding:'40px'}}>
        <h1>EXTERNAL HACKATHON</h1>
        <ul>
            <li>Discover new business solutions</li>
            <li>Evangelize developers and startups</li>
            <li>Raise brand awareness</li>
            <li>Recruit top talent</li>
            
        </ul>
      </div>
      <div style={{borderLeft:'solid ',padding:'40px'}}>
        <h1>INTERNAL HACKATHON</h1>
        <ul>
          <li>Launch disruptive services</li>
          <li>Train your workforce</li>
          <li>Foster team building</li>
          <li>Build an army of intrapreneurs
          </li>
        </ul>
      </div>
      </div>
    </div>
    </div>
    
  )
}

export default CorpPage
