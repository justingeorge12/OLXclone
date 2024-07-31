import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
// import { FirebaseContext } from "../store/FirebaseContext"
import { firebaseApp } from "../firebase/Config"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"


function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    // const {firebaseApp} = useContext(FirebaseContext )
    const auth = getAuth(firebaseApp)
    
    const handleLogin = async (e) => {
        e.preventDefault()

        try{
            await signInWithEmailAndPassword(auth, email, password)
            alert('logged in ')
            navigate('/')
        }
        catch(error) {
            alert(error.message)
        }
    }

    return(
        <>
            <div className="pb-4"></div> 
            <Link to ='/'>
                <button className="ml-14 bg-zinc-500 py-1 px-4 text-white rounded-md">⇦ go home</button>
            </Link>
            <div className="flex justify-center ">
                
                <div className="bg-slate-50 h-[470px] w-[400px] border border-black rounded-md flex flex-col ">
                    {/* <div className="flex justify-center mt-6 font-semibold text-xl py-2"> Login </div> */}
                    <div className="flex justify-center ">
                        <img src="Logo/olx-logo.png" alt="Logo" className="w-[170px] h-[100px]" />
                    </div>
                    <div className=" flex-grow bg-slate-00 m-4">

                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="name"> email: </label><br />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="type your email " className="w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-400 p-4 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name"> Password: </label><br />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="type password" className="w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-400 p-4 py-2" />
                        </div>

                        <button className="w-full mt-4 py-2 bg-zinc-600 rounded-md text-white border border-red-500 hover:bg-red-500 transition-colors" type="submit">Upload and Submit</button>
                    </form>

                    <div className="text-sm mt-4">
                        <p>if you don't have account in OLX, please
                        <Link to='/signup'>
                            <button className="ml-4 underline text-blue-400">Signup</button>
                        </Link>
                        </p>
                    </div>

                    </div>
                </div>
                
            </div>
            
        </>
    )
}

export default Login

