import { useState, createContext } from "react"

const AuthContext = createContext()


export default function ContextAuth ({children}) {
    const [user, setUser]  = useState(null)
    
    return(
        <AuthContext.Provider value={{user, setUser}} >
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext}
