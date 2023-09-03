import React from "react";
import '../styles/SignUpForm.css'
import image from '../assets/signUpImage.svg'
import icons from '../assets/icon-list.svg'



export const SignUpForm =({subscribe,setSubscribe})=>{

    const handleClickEvent =()=>{
        setSubscribe(true)
    }

    return(
        <div className="mainPage">
            <div className="signUp">
                <h1>Stay updated!</h1>
                <p className="join"> Join 60,000+ product managers receiving monthly updates on:</p>
                <div className="updateList">
                        <li> <img src={icons} alt="" /> Product discovery and building what matters</li>
                        <li> <img src={icons} alt="" /> Measuring to ensure updates are a success</li>
                        <li> <img src={icons} alt="" /> Add much more</li>
                </div>
                <form action="">
                    <label htmlFor="">Email Address</label><br />
                    <input className="emailInput" type="email" placeholder="email@company.com"/>
                </form>
                <button onClick={handleClickEvent} className="subscriptionBtn"> Subscribe to monthly newsletter</button>
            </div>
            <div className="signUpImage">
            <img  src={image} alt="SignUp image here" />
            </div>
            
        </div>
    )
}
