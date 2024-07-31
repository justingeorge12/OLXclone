import { useContext, useEffect } from "react"
import Login from "./components/Login"
import Sellform from "./components/Sellform"
import Signup from "./components/Signup"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {} from './store/ContextAuth'
import { FirebaseContext } from "./store/FirebaseContext"
import { AuthContext } from "./store/ContextAuth"

function App() {

  const { setUser } = useContext(AuthContext)
  const {auth} = useContext(FirebaseContext)

  




  useEffect(() => {
    if (!auth) {
      console.error('auth object is is undefined')
      return
    }

    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [auth, setUser])




  return(
    <>
    
    <Router>
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path="/sell" element={<Sellform />} />
        </Routes>
      
    </Router>

    
    
    </>
  )
}

export default App
