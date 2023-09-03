import React from "react";
import '../styles/Subscribed.css'
import icons from '../assets/icon-list.svg'

export const Subscribed =({email,setDismissed})=>{
    const handleDismiss =()=>{
        setDismissed(false);
    }

    return(
        <div className="main">
            <img  src={icons} alt="" />
            <h1>Thanks for subscribing!</h1>
            <p>A conference email has been sent to <b>{email}</b>.
            Please open it and check the button inside to confirm your subscription.</p>
            <button  onClick={handleDismiss} className="dismissMessageBtn">Dismiss Message</button>
        </div>
    )
}
