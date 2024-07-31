import { useState, useContext } from "react"
import {Link} from 'react-router-dom'
import { FirebaseContext } from "../store/FirebaseContext"
import {auth} from '../firebase/Config'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"


function Signup() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const {firebase} = useContext(FirebaseContext)
    const auth = getAuth()
    const firestore = getFirestore()

    const handleSubmit = async (e) => {
        e.preventDefault()
       

        try{
            const result = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(result.user, {displayName:username})
            await addDoc(collection(firestore, 'users'), {
                id: result.user.uid, 
                username: username,
                phone: phone
            })
            navigate('/login')
        }
        catch(error) {
            console.error('error messages ', error.message)
            console.error("error while signing:" , error)
        }



       if(username.trim() == ''){
        alert('this is not valid name')
       }
       if(email.trim() == ''){
        alert('this is not valid email')
       }
       if(phone.trim() == ''){
        alert('this is not valid number')
       }
       if(password.length <= 6){
        alert('this is not valid password')
       }
    }

    return(
        <>
            <Link to ='/'>
                <button className="ml-14 mt-3 bg-zinc-500 py-1 px-4 text-white rounded-md">⇦ go home</button>
            </Link>
            <div className="border border-black w-max p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md">
                <div className="h-[500px] w-[400px]">
                
                    <div className="flex justify-center ">
                        <img src="Logo/olx-logo.png" alt="Logo" className="w-[170px] h-[100px]" />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mx-3">
                            <div className="mb-4">
                                <label htmlFor="username"> Username </label><br />
                                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" required id="fname" name="name" placeholder="enter your name" className="w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600 p-4 py-2" /><br />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email">Email</label><br />
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required name="email" id="email" placeholder="enter  your email" className="w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 p-4 py-2" /> <br />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="phone">Phone</label> <br />
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" required name="phone" id="phone"  placeholder="enter your phone" min={0}  className="w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400 p-4 py-2" /> <br />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label> <br />
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required name="password" id="password" placeholder="enter password" className="w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400 p-4 py-2"  /> <br /><br />
                            </div>

                            <div>
                                <button type="submit" className="bg-zinc-600 text-white rounded-lg w-full py-2"> Signup </button>
                            </div>

                            <div className="text-sm">
                                <p>if you already signup 
                                    <Link to='/login'>
                                    <button className="ml-2 underline text-blue-400"> login </button>
                                    </Link>
                                </p>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup

// </div>








