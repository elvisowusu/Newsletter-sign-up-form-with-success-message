import React from "react";
import '../styles/SignUpForm.css'
import image from '../assets/signUpImage.svg'


export const SignUpForm =()=>{
    return(
        <div className="mainPage">
            <div className="signUp">
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <div className="updateList">

                </div>
            </div>
            <img src={image} alt="SignUp image here" />
        </div>
    )
}
