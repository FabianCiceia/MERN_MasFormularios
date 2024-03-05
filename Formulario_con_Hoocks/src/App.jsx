import { useState } from 'react'
import Userform from './Components/Userform'
import './App.css'
import User from './Components/User'


function App() {
  const [user, setUser] = useState(null);

  const handleUserCreate = (newUser) => {
    setUser(newUser);
  };
  return (
    <>
    <Userform onCreateUser={handleUserCreate} />
    <User user={user} />
    </>
  )
}

export default App
