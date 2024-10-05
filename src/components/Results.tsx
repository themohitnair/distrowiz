import { useLocation } from 'react-router-dom';

interface Result {
    iconPath: string;
    distro: string;
}

const distros: Record<string, { iconPath: string, description: string, website: string }> = {
    Arch: {
        iconPath: '/distro-icons/arch.png',
        description: 'Arch Linux is a rolling release distribution known for its simplicity and flexibility. It is designed for users who want full control over their system, but this comes at the cost of a steep learning curve. Arch requires users to configure everything manually, from package management to system setup, making it a favorite among experienced Linux users who prefer DIY solutions.',
        website: 'https://archlinux.org',
    },
    Ubuntu: {
        iconPath: '/distro-icons/ubuntu.png',
        description: 'Ubuntu is one of the most popular Linux distributions, especially for beginners. It offers a user-friendly experience with an easy installation process, a robust package repository, and excellent hardware compatibility. Ubuntu is a great choice for everyday users, developers, and even enterprises.',
        website: 'https://ubuntu.com',
    },
    Fedora: {
        iconPath: '/distro-icons/fedora.png',
        description: 'Fedora is known for its focus on innovation, including adopting the latest open-source technologies. It is a great choice for developers who want cutting-edge software and tools, and it is sponsored by Red Hat, making it reliable and enterprise-ready. Fedora is also dedicated to the principles of free and open-source software.',
        website: 'https://fedoraproject.org',
    },
    Kali: {
        iconPath: '/distro-icons/kali.png',
        description: 'Kali Linux is a security-focused distribution primarily used for penetration testing and ethical hacking. It comes pre-installed with hundreds of security tools designed for digital forensics, network security, and testing system vulnerabilities. Kali is used by professionals in the security industry and by individuals looking to explore ethical hacking.',
        website: 'https://kali.org',
    },
    Mint: {
        iconPath: '/distro-icons/mint.png',
        description: 'Linux Mint is a user-friendly distribution based on Ubuntu, aimed at making Linux accessible to everyone, including those new to the operating system. It provides a familiar interface that closely resembles Windows, making it a smooth transition for users switching from Microsoft’s OS.',
        website: 'https://linuxmint.com',
    },
    Debian: {
        iconPath: '/distro-icons/debian.png',
        description: 'Debian is one of the oldest and most stable Linux distributions. Known for its rock-solid stability and vast software repository, it is ideal for both servers and desktops. Debian is a foundation for many other distributions, including Ubuntu, and it emphasizes free software principles.',
        website: 'https://debian.org',
    },
    PopOS: {
        iconPath: '/distro-icons/pop.png',
        description: 'Pop!_OS is a distribution from System76, designed with creators, developers, and gamers in mind. Based on Ubuntu, it comes pre-configured with tools and settings for productive use, including seamless tiling window management and optimized support for NVIDIA GPUs, making it a great choice for gaming and development.',
        website: 'https://pop.system76.com',
    },
    Manjaro: {
        iconPath: '/distro-icons/manjaro.png',
        description: 'Manjaro is based on Arch Linux but is designed to be more user-friendly. It retains the rolling release model of Arch, meaning you’ll always have the latest software, but with tools and features that make it accessible to users who may not be comfortable with manual setup. Manjaro is perfect for those looking for the power of Arch without the complexity.',
        website: 'https://manjaro.org',
    },
    NixOS: {
        iconPath: '/distro-icons/nixos.png',
        description: 'NixOS is a unique distribution that uses the Nix package manager, which provides atomic upgrades, rollbacks, and a declarative configuration model. It’s ideal for users who want to manage their system with precision and is particularly popular among DevOps professionals and advanced users.',
        website: 'https://nixos.org',
    },
    Gentoo: {
        iconPath: '/distro-icons/gentoo.png',
        description: 'Gentoo is a source-based distribution designed for power users who want complete control over their system. With Gentoo, users compile software from source, allowing for extreme customization and optimization. It’s one of the most difficult distros to install and maintain, but it offers unparalleled flexibility for those who know what they’re doing.',
        website: 'https://gentoo.org',
    },
    ElementaryOS: {
        iconPath: '/distro-icons/elementary.png',
        description: 'ElementaryOS is designed to be simple and beautiful, providing a polished user experience similar to macOS. It focuses on minimalism and ease of use, making it a great choice for users who want a clean, visually appealing interface without the need for extensive customization.',
        website: 'https://elementary.io',
    },
    CentOS: {
        iconPath: '/distro-icons/centos.png',
        description: 'CentOS is a community-driven distribution derived from the sources of Red Hat Enterprise Linux (RHEL). It is widely used in enterprise environments due to its long-term support and stability. CentOS is ideal for servers and businesses that need a reliable, production-ready operating system.',
        website: 'https://www.centos.org',
    },
    Endeavour: {
        iconPath: '/distro-icons/endeavour.png',
        description: 'EndeavourOS is a user-friendly Arch-based distribution that simplifies the Arch installation process and provides a robust, terminal-centric experience. It is ideal for users who want to experience Arch without the manual setup, but still appreciate the flexibility and rolling release model.',
        website: 'https://endeavouros.com',
    },
    Zorin: {
        iconPath: '/distro-icons/zorin.png',
        description: 'Zorin OS is designed to make Linux accessible to users coming from Windows and macOS. It provides an intuitive user interface and comes pre-installed with a variety of software to get users started quickly. Zorin is especially popular with users looking for a system that “just works” out of the box.',
        website: 'https://zorin.com',
    },
    Suse: {
        iconPath: '/distro-icons/suse.png',
        description: 'SUSE Linux is a stable, enterprise-ready distribution known for its reliability in corporate environments. It offers excellent support for cloud, container, and enterprise systems. SUSE is also available as an open-source version called openSUSE, which is suitable for general desktop use.',
        website: 'https://suse.com',
    },
};

const Results: React.FC = () => {
    const location = useLocation();
    const { topDistros = [] } = location.state || {};
  
    if (topDistros.length === 0) {
      return <div className="text-center text-gray-500">No results to show. Please try again.</div>;
    }
  
    return (
        <div className="results-container max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Recommended Distributions</h2>
            {topDistros.map((distro: string) => (
                <div key={distro} className="result-item flex items-start mb-8 p-6 bg-black border border-white rounded-sm shadow-lg">
                    <div className="flex flex-col items-center mr-6 w-1/4 border-r-white">
                        <img src={distros[distro]?.iconPath || '/distro-icons/ubuntu.png'} alt={`${distro} logo`} className="w-24 h-24 mb-2"/>
                        <h3 className="distro-name text-xl font-bold text-center">{distro}</h3>
                        <a href={distros[distro]?.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline text-sm mt-2">
                            Visit Website
                        </a>
                    </div>
                    <div className="w-3/4">
                        <p className="distro-description text-gray-300">
                            {distros[distro]?.description || 'No description available.'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
  };
  
  export default Results;