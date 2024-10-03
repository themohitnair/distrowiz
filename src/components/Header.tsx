import React from "react"

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 h-10 flex items-center justify-center mt-10">
            <img src="/favicon/tux.png" alt="My Sweet Tux!" className="h-24 mr-7"/>
            <p className="text-7xl">
                DistroWiz
            </p>
        </header>        
    )
}

export default Header