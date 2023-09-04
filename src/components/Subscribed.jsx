import React from "react";
import '../styles/Subscribed.css'
import icons from '../assets/icon-list.svg'

export const Subscribed =({email,setDismissed,resetEmail})=>{
    const handleDismiss =()=>{
        setDismissed(false);
        resetEmail("");
    }

    return(
        <div className="main">
            <div className="top">
            <img  src={icons} alt="" />
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <b>{email}</b>.
            Please open it and check the button inside to confirm your subscription.</p>
            </div>
            <button  onClick={handleDismiss} className="dismissMessageBtn">Dismiss Message</button>
        </div>
    )
}
