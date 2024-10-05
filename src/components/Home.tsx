import About from "./About"
import Distros from "./Distros"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
    return (
        <>
        <Distros/>
        <About/>  
        <div className="butt mt-10 flex justify-center items-center">
            <Link to="/quiz" className="m-auto px-5 py-2 bg-black text-white border border-white rounded-sm hover:bg-white hover:text-black">
            Begin
            </Link>  
        </div> 
        </>
    )

}

export default Home