import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Login from "../components/Login"
import Posts from "../components/Posts"
import Sellform from "../components/Sellform"
import Signup from "../components/Signup"

function Home() {
    return(
        <>
            <Header />
            <Banner />
            <Posts />
            <Footer />
            {/* <Login /> */}
            {/* <Sellform /> */}
            {/* <Signup /> */}
            
        </>
    )
}

export default Home