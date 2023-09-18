import React, { useState } from "react"


export default function Main() {
    const [phoneNumber, setPhoneNumber] = useState("+420 732 *** ***");

    const handleMouseEnter = () => {
      setPhoneNumber("+420 732 482 069");
    };
  
    const handleMouseLeave = () => {
      setPhoneNumber("+420 732 *** ***");
    };

    return (
        <main className="Main">
            <p className="Phone" >Phone</p>
            <p className="MyNumber" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{phoneNumber}</p>
            <hr></hr>
            <p className="Email">Email</p>
            <p className="MyEmail">artursuvor@gmail.com</p> 
            <hr></hr>
        </main>
    )
}