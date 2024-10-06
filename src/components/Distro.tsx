import React from 'react';

interface DistroProps {
  path: string;
  distro: string;
  subreddit: string;
}

const Distro: React.FC<DistroProps> = ({ path, distro, subreddit }) => {
    const subredditUrl = `https://www.reddit.com/r/${subreddit}`;

    return (
        <a href={subredditUrl} target="_blank" rel="noopener noreferrer" className="block no-underline">
            <div className="distro flex flex-col items-center m-auto">
                <img
                    src={path}
                    alt={distro}
                    className="mx-auto w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                />
                <div className="name text-center mt-2 text-base lg:text-lg">{distro}</div>
            </div>
        </a>
    );
}

export default Distro;
