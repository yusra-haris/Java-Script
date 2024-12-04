import React from 'react';
import './App.css'; // Import global styles
import UserInfo from './Components/UserInfo';
import StatsInfo from './Components/Stats';
import MsgsInfo from './Components/msgs';

function App() {
    const userdetails = {
        name: "Jane A.",
        role: "Project Manager",
        email: "john.mngr@org.com",
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1usiNdWh3Z-NjE5f948__kDE3ERSJlhtu6w&s' 
    };

    const statsdetails = {
        totaluser : 25,
        activeuser : 22,
        newsignup : 12,
        activeperc : ( 22/ 25 ) *100
    };

    const msgdetails = {
        msg1 : "Our current performance is on track! Key metrics have improved by 12% compared to last week. Keep up the good work!" ,
        msg2 : "Attention: There is a 25% drop in user engagement over the last 48 hours.Investigate recent changes or trends to address this issue." ,
        msg3 :" We're 80% of the way to reaching our monthly target.Stay focused, and we're on track to achieve our goals by the end of the month!" ,
    } 
 return (
        <div>
        <UserInfo user = {userdetails} />
        <StatsInfo statsdetail = {statsdetails} />
        <MsgsInfo msgs = {msgdetails} />
        </div>
);
}
export default App;