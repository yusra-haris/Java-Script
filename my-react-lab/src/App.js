import React from 'react';
import './App.css'; // Import global styles
import ProfileCard from './Components/ProfileCard';

function App() {
return (
<div>
<ProfileCard name = "Fahad"  age = {30} occupation = "Engineer"  location = "New York" />
</div>
);
}
export default App;