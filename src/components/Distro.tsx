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
            <div className="distro w-36 flex flex-col items-center">
                <img src={path} alt={distro} className="w-full h-auto" />
                <div className="name text-center mt-2">{distro}</div>
            </div>
        </a>
    );
}

export default Distro;