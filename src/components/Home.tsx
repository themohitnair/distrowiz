import About from "./About"
import Distros from "./Distros"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
    return (
        <>
        <div className="source text-center mt-10">
            <span> &lt; </span>
            <a href="https://github.com/themohitnair/distrowiz" className="hover:underline text-center w-full" target="_blank" rel="noopener noreferrer">
                Source Code
            </a>
            <span> &gt; </span>
        </div>
        <Distros/>
        <About/>  
        <div className="butt mt-10 flex justify-center items-center">
            <Link to="/quiz" className="m-auto px-5 py-2 w-full md:w-3/4 mb-10 bg-black text-white border border-white rounded-sm hover:bg-white hover:text-black text-center">
                Begin
            </Link>  
        </div>
        </>
    )

}

export default Home