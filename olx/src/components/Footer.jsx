import OlxLogo from "../assets/OlxLogo"
import { FaApper, FaAppleAlt, FaApplePay, FaAppStore, FaAppStoreIos, FaFacebook, FaGooglePlay, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';


function Footer() {
    return(
        <>
            <div className="bg-gray-100">
                <div className="flex justify-between pt-4 z-50 mx-5">
                    <div >
                        <div className="font-bold">
                            POPULAR LOCATIONS
                        </div>
                        <div>
                            <ul className="font-sans text-zinc-500 text-sm leading-[1.5]">
                                <li>Kolkatha</li>
                                <li>Mumbai</li>
                                <li>Chennai</li>
                                <li>Pure</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div>
                        <div className="font-bold">
                            TRENDING LOCATIONS
                        </div>
                        <div>
                            <ul className="font-sans text-zinc-500 text-sm leading-[1.5]">
                                <li>Bhubaneshwar</li>
                                <li>Hyderabad</li>
                                <li>Chandigarh</li>
                                <li>Nashik</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="font-bold ">
                            ABOUT US
                        </div>
                        <div>
                            <ul className="font-sans text-zinc-500 text-sm leading-[1.5]">
                                <li>Contact Us</li>
                                <li>Tech©OLX</li>
                                
                            </ul>
                        </div> 
                    </div>

                    <div>
                        <div className="font-bold">
                            OLX
                        </div>
                        <div>
                            <ul className="font-sans text-zinc-500 text-sm leading-[1.5]">
                                <li>Blog</li>
                                <li>Help</li>
                                <li>Sitemap</li>
                                <li>Legal & Privacy</li>
                                <li>Vulnerability</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="font-bold">
                            FOLLOW US
                        </div>
                        <div>
                            <ul className="font-sans text-zinc-500 text-sm leading-[1.5] flex justify-between">
                                <FaFacebook size={20}/>
                                <FaInstagram size={20} />
                                <FaTelegram size={20} />
                                <FaYoutube size={20} />
                                
                            </ul>
                            <ul className="mt-4 ">
                                <button className="bg-slate-900 rounded-md text-white px-2 py-1 flex items-center"> <FaAppleAlt color="white"/><p className="text-sm ml-1">App store </p> </button>
                                <button className="bg-slate-900 rounded-md text-white px-2 py-1 mt-2 flex items-center"> <FaGooglePlay color="white"/><p className="text-sm ml-1">Play store </p> </button>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
                <div className="flex justify-evenly items-center h-32 bg-customColor text-white" >
                    <div className="border-r-2 flex items-end">
                        <div className="mr-6"> 
                            <p className="font-extrabold">Car7️⃣rade7️⃣ech</p>
                            <p>GROUP</p>
                        </div>
                    </div>

                    <div className="bg-white "><OlxLogo  /></div>
                    <div className="font-extrabold">🚙carwale</div>
                    <div className="font-extrabold">🏍️bikewale</div>
                    <div className="font-extrabold">Car7️⃣rade</div>
                    <div className="font-extrabold ">◜⋁◝ Mobility <br />◟⋀◞ outlook</div>
                </div>
                
                <div className="bg-customColor text-sm justify-between text-white flex pb-3">
                    <p className="ml-5 ">Help-Sitemap</p>
                    <p className="mr-5">All right reserved © 2006-2024 OLX</p>
                </div>

            </div>
            <br />
        </>
    )
}

export default Footer
