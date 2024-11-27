import React from 'react';
import './App.css'; // Import global styles
import Navbar from './Components/navbar';
import LandingPage from './Components/landingpage';
import Details from './Components/Form';
import FooterDaraz from './Components/footer2';

function App() {
return (
<div>
<Navbar />
<LandingPage />
<Details/>
<FooterDaraz/>
</div>
);
}
export default App;