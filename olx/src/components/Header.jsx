import { Link, useNavigate } from "react-router-dom"
import OlxLogo from "../assets/OlxLogo"
import Search from "../assets/Search"
import { useState } from "react"

import { useContext } from "react"
import { AuthContext } from "../store/ContextAuth"
import { FirebaseContext } from "../store/FirebaseContext"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/Config"

function Header() {

    const {user} = useContext(AuthContext)
    const {firebase} = useContext(FirebaseContext)

    return(
        <div className="sticky w-full p-4 flex bg-slate-100 items-center justify-between z-50" style={{ top: '0' }}>
            <Link to='/'>
                <OlxLogo />
            </Link>

            <div className="bg-slate-700 border-2px border-2 border-[#002f34] rounded-md flex items-center  justify-between ">
                <div className="w-full h-full flex ">
                    <input className="w-full h-full border-transparent outline-none p-2 rounded-md" type="text" placeholder="find car,mobile phone and more..." />
                </div>
                <div className="px-2">
                    <Search />
                </div>
            </div>

            

            <div className="flex"> 
                <Link to='/login'>
                    <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"> <span> {user ? user.displayName : 'login'} </span> </button>
                </Link>
                {user && <span onClick={() => {
                    signOut(auth)
                    navigate('/')
                }}> Logout</span>}

                <div className="ml-4">
                    <Link to='sell'>
                        <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-full text-sm px-4 py-1.5 text-center me-2 mb-2">+ SELL</button>
                    </Link>
                </div>
            </div>
            

            

        </div>
    )
}

export default Header
