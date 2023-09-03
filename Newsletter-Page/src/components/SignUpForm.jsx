import React, {useEffect, useState} from "react";
import '../styles/SignUpForm.css'
import image from '../assets/signUpImage.svg'
import icons from '../assets/icon-list.svg'
import mobileImage from '../assets/mobileSignUPImage.svg'



export const SignUpForm =({setSubscribe,email,setEmail})=>{
    const [emailError, setEmailError] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);



    
    const handleEmailChange =(event)=>{
        const newEmail = event.target.value;
        setEmail(newEmail)
        // or setEmail(e.target.value); this assigns a new value to the email state
        if(!isValidEmail(newEmail)){
            setEmailError("Valid email required");
        }else{
            setEmailError(null);
        }
    };

    const isValidEmail = (email)=>{
        // Checking for basic validation using Regular Expression(RegExp)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        if(!emailError){
            setSubscribe(true);
        }else{
            alert("Please enter email address to proceed")
        }
    };
    
    
    const handleClickEvent = () => {
        if (!email) {
          // Display an alert if the email is empty
          alert("Please enter an email to proceed");
        } else if (emailError) {
          // Display an alert if there's an email validation error
          alert("Invalid email format. Please enter a valid email address.");
        } else {
          // If both conditions are met, setSubscribe to true
        //   setEmail("");
          setSubscribe(true);
        }
      };

      useEffect(()=>{
        const updateScreenWidth =()=>{
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateScreenWidth);

        return ()=>{
            window.removeEventListener("resize",updateScreenWidth);
        };
      },[]);
    
    
    
    
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
                <form onSubmit={handleFormSubmit}>
                    <div className="labelError">
                    <label htmlFor="email">Email Address</label><br />
                    {/* Step 3: Render error message */}
                    {emailError && <div className="error-message">{emailError}</div>}
                    </div>
                    <input 
                    className={`emailInput ${emailError ? 'input-error':''}`} 
                    type="email" 
                    placeholder="email@company.com"
                    name="email" 
                    value={email}
                    onChange={handleEmailChange}
                    required/>
                </form>
                <button onClick={handleClickEvent} className="subscriptionBtn"> 
                 Subscribe to monthly newsletter
                </button>
            </div>
            <div className="signUpImage">
             <img  src={screenWidth<= 414 ? mobileImage : image} alt="SignUp image here" />
            </div>
            
        </div>
    )
}
