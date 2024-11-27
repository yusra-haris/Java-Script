import React from 'react';
import '../styles/landingpage.css'; // Import CSS file

function Details() {
    return(
            <div className = "Form">
                <h3 className='heading'>Kindly enter your contact information below :</h3> 
                <form>
                    <label className='label1'> NAME : </label>
                    <input className='input' type="text" id="name" name="name" required/>
                    <br></br>
                    <label className='label1'> EMAIL ADDRESS : </label>
                    <input className='input' type="email" id="email" name="email" required/>
                    <br></br>
                    <label className='label1'>PHONE NUMBER : </label> 
                    <input className='input' type="tel" id="phone" name="phone"/>
                    <br></br>
                    <button className= 'submit' type="submit">Submit Now </button>
                </form>
            </div>
    
    );
    }
    
    export default Details;