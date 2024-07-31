import { Link } from "react-router-dom"
import Header from "./Header"
import { useContext, useState } from "react"
import { FirebaseContext } from "../store/FirebaseContext"
import { AuthContext } from "../store/ContextAuth"

function Sellform() {

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const {firebase} = useContext(FirebaseContext)
    const {user} = useContext(AuthContext)

    const handleSubmit = ()  => {
        firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref}) => {
            ref.getDownloadURL().then((url) => {
                console.log(url)
            })
        })
    }
    
    return(
        <>
        <div className="pb-4"></div>  
        <Link to ='/'>
            <button className="ml-14 bg-zinc-500 py-1 px-4 text-white rounded-md">⇦ go home</button>
        </Link>
        <div className="flex justify-center ">
            

            <div className="bg-slate-50 h-[530px] w-[400px] border border-black rounded-md flex flex-col ">
                <div className="flex justify-center mt-6 font-semibold text-xl py-2">
                    Fill Form
                </div>
                <div className=" flex-grow bg-slate-00 m-4">

                    <div className="mb-4">
                        <label htmlFor="name"> Name: </label><br />
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" placeholder="type product name" className="w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-400 p-4 py-2" />
                    </div>

                    <div className="mb-4  ">
                        <label htmlFor="category"> Category</label><br />
                        <input value={category} onChange={(e) => setCategory(e.target.value)} className="w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-400 p-4 py-2" type="text" name="category" id="category" placeholder="type the category" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="price"> Price</label><br />
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" name="price" id="price" placeholder="enter the price" className="w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-400 p-4 py-2" />
                    </div>

                    <div className="mb-4">
                        <img src={image? URL.createObjectURL(image): ''} alt="" width={70} height={70} />
                        <label htmlFor="image" > Image</label><br />
                        <input  onChange={(e) => setImage(e.target.files[0])}  type="file" name="price" id="price" placeholder="enter the price " className="font-sans font-thin " />
                    </div>

                    <button onClick={handleSubmit} className="w-full mt-4 py-2 bg-zinc-600 rounded-md text-white border border-red-500 hover:bg-red-500 transition-colors" type="submit">Upload and Submit</button>


                </div>
                
            </div>
        </div>
        <br />
        </>
    )
}

export default Sellform


// ←↩⇇⇍⇐⇚⇨⇦◀≺⋘⫷