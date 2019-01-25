import React from 'react';
import {Link} from 'react-router-dom'


export default function Corporation() {
  return (
    <div className="corp" style={{display:'flex',}}>
       <div>
       <h1 style={{color:'#6D6F71',fontSize:'2.75rem'}}>Are you a corporation?</h1>
        <p style={{fontSize:'1.4375rem'}}>Let our dedicated team of hackathon experts <br/> bring your event to life!</p>
       </div>
       
       <div style={{marginLeft:'140px',marginTop:'30px'}}>
         <Link to='/corp-page' >
       <button type="submit" >VISIT CORPORATE WEBSITE</button>
       </Link>
           </div>

       </div>
        
  )
}
