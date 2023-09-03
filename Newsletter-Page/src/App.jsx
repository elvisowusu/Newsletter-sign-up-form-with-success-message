import react,{ useState } from 'react'
import './App.css'
import { SignUpForm } from './components/SignUpForm'
import { Subscribed } from './components/Subscribed'
function App() {
  const [subscribe,setSubscribe] = useState(false);

  return (
    <>
      <SignUpForm subscribe = {subscribe} setSubscribe={setSubscribe}/>
      <Subscribed/>
    </>
  )
}

export default App
