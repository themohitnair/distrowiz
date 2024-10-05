import React from 'react';
import Distro from "./Distro";

interface DistroInfo {
  path: string;
  subreddit: string;
}

const Distros: React.FC = () => {
    const distros: { [key: string]: DistroInfo } = {
        Arch: { path: 'distro-icons/arch.png', subreddit: 'archlinux' },
        Ubuntu: { path: 'distro-icons/ubuntu.png', subreddit: 'Ubuntu' },
        Fedora: { path: 'distro-icons/fedora.png', subreddit: 'Fedora' },
        Kali: { path: 'distro-icons/kali.png', subreddit: 'kalilinux' },
        Mint: { path: 'distro-icons/mint.png', subreddit: 'linuxmint' },
        Debian: { path: 'distro-icons/debian.png', subreddit: 'debian' },
        PopOS: { path: 'distro-icons/pop.png', subreddit: 'pop_os' },        
        Manjaro: { path: 'distro-icons/manjaro.png', subreddit: 'ManjaroLinux' },
        RedHat: { path: 'distro-icons/redhat.png', subreddit: 'redhat' },        
        NixOS: { path: 'distro-icons/nixos.png', subreddit: 'nixos' },
        Gentoo: { path: 'distro-icons/gentoo.png', subreddit: 'gentoo' },
        ElementaryOS: { path: 'distro-icons/elementary.png', subreddit: 'elementaryos' },
        CentOS: { path: 'distro-icons/centos.png', subreddit: 'centos' },
        EndeavourOS: { path: 'distro-icons/endeavour.png', subreddit: 'EndeavourOS' },  
        Qubes: { path: 'distro-icons/qubes.png', subreddit: 'Qubes' },   
        Void: { path: 'distro-icons/void.png', subreddit: 'voidlinux' },
        Zorin: { path: 'distro-icons/zorin.png', subreddit: 'zorinos' },
        OpenSUSE: { path: 'distro-icons/suse.png', subreddit: 'openSUSE' },       
    };

    return (
    <div className="distros w-4/5 m-auto mt-16 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-6">
        {Object.entries(distros).map(([distro, info]) => (
        <Distro key={distro} distro={distro} path={info.path} subreddit={info.subreddit} />
        ))}
    </div>
    );
}

export default Distros;