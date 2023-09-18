import React from "react"
import MyPhoto from '../img/MyPhoto.jpg';

export default function AboutMe() {
    return (
        <div className="AboutMe">
            <img src={MyPhoto} alt="PhotoOfMe" width="100" height="100" />
            <h3 className="NameAndSurname">Artur Suvorkin</h3>
            <h5 className="Status">Looking for a job!</h5>
        </div>
    )
}

