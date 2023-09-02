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
                        <li>Product discovery and building what matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>Add much more</li>
                </div>
                    <form action="">
                        <label htmlFor="">Email Address</label>
                        <input type="email" />
                    </form>
            </div>
            <img src={image} alt="SignUp image here" />
        </div>
    )
}
