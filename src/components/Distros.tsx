import React from 'react';
import Distro from "./Distro";

interface DistroInfo {
  path: string;
  subreddit: string;
}

const Distros: React.FC = () => {
    const distros: { [key: string]: DistroInfo } = {
        Ubuntu: { path: 'distro-icons/ubuntu.png', subreddit: 'ubuntu' },
        Fedora: { path: 'distro-icons/fedora.png', subreddit: 'fedora' },
        Arch: { path: 'distro-icons/arch.png', subreddit: 'archlinux' },
        Debian: { path: 'distro-icons/debian.png', subreddit: 'debian' },
        CentOS: { path: 'distro-icons/centos.png', subreddit: 'centos' },
        Kali: { path: 'distro-icons/kali.png', subreddit: 'kalilinux' },
        Mint: { path: 'distro-icons/mint.png', subreddit: 'linuxmint' },
        NixOS: { path: 'distro-icons/nixos.png', subreddit: 'nixos' },
        Zorin: { path: 'distro-icons/zorin.png', subreddit: 'zorinos' },
        PopOS: { path: 'distro-icons/pop.png', subreddit: 'pop_os' },
        Gentoo: { path: 'distro-icons/gentoo.png', subreddit: 'gentoo' },
        OpenSUSE: { path: 'distro-icons/suse.png', subreddit: 'openSUSE' }
    };

    return (
    <div className="distros w-3/4 m-auto mt-16 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {Object.entries(distros).map(([distro, info]) => (
        <Distro key={distro} distro={distro} path={info.path} subreddit={info.subreddit} />
        ))}
    </div>
    );
}

export default Distros;