import React from "react";
import '../styles/SignUpForm.css'
import image from '../assets/signUpImage.svg'


export const SignUpForm =()=>{
    return(
        <div className="mainPage">
            <div className="signUp">
                <h2>Stay updated!</h2>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <div className=""></div>
            </div>
            <img src={image} alt="SignUp image here" />
        </div>
    )
}
