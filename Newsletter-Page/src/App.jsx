import react,{ useState } from 'react'
import './App.css'
import { SignUpForm } from './components/SignUpForm'
import { Subscribed } from './components/Subscribed'
function App() {
  const [subscribe,setSubscribe] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      {subscribe?
      <Subscribed email={email} setDismissed={setSubscribe}/> :

      <SignUpForm subscribe = {subscribe} setSubscribe={setSubscribe} email={email} setEmail={setEmail}/>
    }
      
      
    </>
  )
}

export default App
