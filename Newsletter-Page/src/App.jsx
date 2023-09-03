import react,{ useState } from 'react'
import './App.css'
import { SignUpForm } from './components/SignUpForm'
import { Subscribed } from './components/Subscribed'
function App() {
  const [subscribe,setSubscribe] = useState(false);

  return (
    <>
      {subscribe?
      <Subscribed/> :

      <SignUpForm subscribe = {subscribe} setSubscribe={setSubscribe}/>
    }
      
      
    </>
  )
}

export default App
