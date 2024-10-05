import { Link } from "react-router-dom"

const Header: React.FC = () => {
    return (
        <Link to="/">
            <header className="text-center">
                <div className="title text-6xl md:text-7xl lg:text-9xl">
                    DistroWiz
                </div>
                <div className="subtitle text-xl md:text-2xl">
                    Select the best Linux distribution that suits you
                </div>
            </header>
        </Link>
    )
}

export default Header