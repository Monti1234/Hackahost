import React from 'react'
import {Link} from 'react-router-dom'


const NavMenu = () => {
  return (
    <div className="nav">
       <div className="logo">
       <h1 style={{cursor:'pointer'}}>Hacka</h1> <h1 id="host" style={{cursor:'pointer'}} >Host</h1>
       <h5 style={{margin:'0px'}}>Learn.Build.Share</h5>
       
       </div>
       <div className="option">
       <div>
         <Link to='/discover'>
         <button className="butt">Discover</button>
          </Link>
       </div>
       <div>
         <Link to='/videos'>
          <button className="butt">Videos</button>
         </Link>
        </div>
        <div>
          <button className="butt">Tips</button>
        </div>
        <div>
          <button className="butt">Match</button>
        </div>
        <div className="register">
       <div>
         <Link to='/signup' >
         <button className="butt" id="signup">Sign Up</button>
          </Link>
       </div>
       <div>
         <Link to='login' >
         <button className="butt" id="signin">Log In </button>
         </Link>
       </div>
        </div>
    </div>
    </div>
  )
}

export default NavMenu
