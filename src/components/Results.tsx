interface Result {
    iconPath: string
    distro: string
}

const Results: React.FC<Result> = ({iconPath, distro}) => {
    return (
        <div className="results flex grid-cols-2">
            <div className="icon">
                <img src="distro-icons/ubuntu.png" alt={distro} />
            </div>
            <div className="about">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam atque rerum quod, delectus libero tenetur possimus natus dicta dolore veniam at asperiores laboriosam quis fuga velit distinctio a numquam.
            </div>            
        </div>
    )
}

export default Results