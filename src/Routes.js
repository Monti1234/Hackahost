import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Blockchain from './Component/HackathonTopics/Blockchain';
import IoT from './Component/HackathonTopics/IoT';
import AI from './Component/HackathonTopics/AI';
import BigData from './Component/HackathonTopics/BigData';
import Industry from './Component/HackathonTopics/Industry';
import NonProfit from './Component/HackathonTopics/NonProfit';
import Fintech from './Component/HackathonTopics/Fintech';
import Energy from './Component/HackathonTopics/Energy';
import CorpPage from './Component/CorpPage'
import Home from './Component/Home'
import Discover from './Component/Options/Discover'
import SignUp from './Component/Authentification/SignUp'
import LogIn from './Component/Authentification/LogIn';
import UserProfile from './Component/Authentification/UserProfile';
import HackathonsDetails from './Component/hackItems/HackathonDetails';
import Videos from './Component/Options/Videos';




function Routes() {
  return (
    <Router>
        <Switch>
            <Route path="/home" component={Home} />
             <Route path="/blockchain" component={Blockchain} />
             <Route path="/iot" component={IoT} />
             <Route path="/ai" component={AI} />
             <Route path="/bigdata" component={BigData} />
             <Route path="/industry" component={Industry} />
             <Route path="/non-profit" component={NonProfit} />
             <Route path="/fintech" component={Fintech} />
             <Route path="/energy" component={Energy} />
             <Route path="/corp-page" component={CorpPage} />
             <Route path="/discover" component={Discover} />
             <Route path="/signup" component={SignUp} />
             <Route path='/login' component={LogIn} />
             <Route path='/user_profile' component={UserProfile} />
             <Route path='/videos' component={Videos} />
             <Route path='/hackathons/:id' component={HackathonsDetails} />
            

        </Switch>
    </Router>
  )
}

export default Routes
