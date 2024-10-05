import { useLocation } from 'react-router-dom';

interface Result {
    iconPath: string;
    distro: string;
}

const distros: Record<string, { iconPath: string, description: string }> = {
    Ubuntu: {
        iconPath: '/icons/ubuntu.png',
        description: 'A popular distribution for beginners and general users.',
    },
    Mint: {
        iconPath: '/icons/mint.png',
        description: 'Known for ease of use, suitable for beginners and switchers from Windows.',
    },
    Fedora: {
        iconPath: '/icons/fedora.png',
        description: 'Great for developers, focused on open-source software.',
    },
    PopOS: {
        iconPath: '/icons/popos.png',
        description: 'An Ubuntu-based distro optimized for gaming and development.',
    },
    Manjaro: {
        iconPath: '/icons/manjaro.png',
        description: 'A rolling release distro based on Arch, user-friendly.',
    },
    Debian: {
        iconPath: '/icons/debian.png',
        description: 'A stable, highly customizable distro with long release cycles.',
    },
    Kali: {
        iconPath: '/icons/kali.png',
        description: 'Security-focused, used for penetration testing and ethical hacking.',
    },
    Arch: {
        iconPath: '/icons/arch.png',
        description: 'A DIY rolling release distro, highly customizable for advanced users.',
    },
    Gentoo: {
        iconPath: '/icons/gentoo.png',
        description: 'A source-based distro for power users who prefer compiling software.',
    },
    ElementaryOS: {
        iconPath: '/icons/elementary.png',
        description: 'A clean and simple distro with a macOS-like interface.',
    },
    KDE: {
        iconPath: '/icons/kde.png',
        description: 'Highly customizable with a feature-rich user interface.',
    },
    Zorin: {
        iconPath: '/icons/zorin.png',
        description: 'A distro designed to be familiar to users switching from Windows.',
    },
};

const Results: React.FC = () => {
    const location = useLocation();
    const { topDistros } = location.state || {};

    if (!topDistros || topDistros.length === 0) {
        return <div>No results to show.</div>;
    }

    const Results: React.FC = () => {
        const location = useLocation();
        const { topDistros = [] } = location.state || {}; 
    
        if (topDistros.length === 0) {
            return <div className="text-center text-gray-500">No results to show. Please try again.</div>;
        }
    
        return (
            <div className="results-container">
                {topDistros.map((distro: string) => (
                    <div key={distro} className="result-item flex items-center mb-4">
                        <img src={distros[distro]?.iconPath || '/icons/default.png'} alt={`${distro} logo`} className="icon w-12 h-12 mr-4" />
                        <div>
                            <h3 className="distro-name font-bold">{distro}</h3>
                            <p className="distro-description">{distros[distro]?.description || 'No description available.'}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
};

export default Results;
