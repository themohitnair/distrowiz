(()=>{"use strict";var e={748:function(e,t,i){var o=i("893"),n=i("294"),s=i("745"),r=i("655");let a=()=>(0,o.jsx)(r.rU,{to:"/",children:(0,o.jsxs)("header",{className:"text-center",children:[(0,o.jsx)("div",{className:"title text-6xl md:text-7xl lg:text-9xl",children:"DistroWiz"}),(0,o.jsx)("div",{className:"subtitle text-xl md:text-2xl",children:"Select the best Linux distribution that suits you"})]})});var l=i("250");let u=()=>(0,o.jsxs)("div",{className:"about mt-12 w-3/4 m-auto text-xl mb-10",children:["This quiz is designed for those who are switching to Linux or are new to it. This quiz will help you choose from the 15 most popular Linux distributions. ",(0,o.jsx)("br",{}),(0,o.jsx)("b",{children:"Note:"})," The intention of this quiz is not to prove any distribution to be better than the other. Linux enthusiasts who are disappointed with the results can try the distribution they like. This project just intends to guide Linux newbies to some Linux distro or at least narrow down their choices, and not leave them in uncertainty before choosing one. ",(0,o.jsx)("br",{}),"You may click on the above icons of Linux distributions to be routed to their respective subreddits."]}),c=e=>{let{path:t,distro:i,subreddit:n}=e,s=`https://www.reddit.com/r/${n}`;return(0,o.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"block no-underline",children:(0,o.jsxs)("div",{className:"distro flex flex-col items-center m-auto",children:[(0,o.jsx)("img",{src:t,alt:i,className:"mx-auto w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"}),(0,o.jsx)("div",{className:"name text-center mt-2 text-base lg:text-lg",children:i})]})})},d=()=>(0,o.jsx)("div",{className:"distros w-full md:w-3/4 m-auto mt-16 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6",children:Object.entries({Arch:{path:"distro-icons/arch.png",subreddit:"archlinux"},Ubuntu:{path:"distro-icons/ubuntu.png",subreddit:"Ubuntu"},Fedora:{path:"distro-icons/fedora.png",subreddit:"Fedora"},Kali:{path:"distro-icons/kali.png",subreddit:"kalilinux"},Mint:{path:"distro-icons/mint.png",subreddit:"linuxmint"},Debian:{path:"distro-icons/debian.png",subreddit:"debian"},PopOS:{path:"distro-icons/pop.png",subreddit:"pop_os"},Manjaro:{path:"distro-icons/manjaro.png",subreddit:"ManjaroLinux"},NixOS:{path:"distro-icons/nixos.png",subreddit:"nixos"},Gentoo:{path:"distro-icons/gentoo.png",subreddit:"gentoo"},ElementaryOS:{path:"distro-icons/elementary.png",subreddit:"elementaryos"},CentOS:{path:"distro-icons/centos.png",subreddit:"centos"},EndeavourOS:{path:"distro-icons/endeavour.png",subreddit:"EndeavourOS"},Zorin:{path:"distro-icons/zorin.png",subreddit:"zorinos"},OpenSUSE:{path:"distro-icons/suse.png",subreddit:"openSUSE"},Void:{path:"distro-icons/void.png",subreddit:"voidlinux"}}).map(e=>{let[t,i]=e;return(0,o.jsx)(c,{distro:t,path:i.path,subreddit:i.subreddit},t)})}),h=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"source text-center",children:[(0,o.jsx)("span",{children:" < "}),(0,o.jsx)("a",{href:"https://github.com/themohitnair/distrowiz",className:"hover:underline text-center w-full",target:"_blank",rel:"noopener noreferrer",children:"Source Code"}),(0,o.jsx)("span",{children:" > "})]}),(0,o.jsx)("div",{className:"butt mt-10 flex justify-center items-center",children:(0,o.jsx)(r.rU,{to:"/quiz",className:"m-auto px-5 py-2 w-full md:w-3/4 mb-10 bg-black text-white border border-white rounded-sm hover:bg-white hover:text-black text-center",children:"Begin"})}),(0,o.jsx)(d,{}),(0,o.jsx)(u,{})]}),m=e=>{let{question:t,options:i,selectedOptions:n,onSelect:s,contextLink:r}=e;return(0,o.jsxs)("div",{className:"question border border-white px-3 pt-5 mt-10 w-full md:w-4/5 lg:w-3/4 m-auto rounded-sm",children:[(0,o.jsx)("div",{className:"text-2xl px-3 mb-2",children:t}),(0,o.jsx)("ul",{className:"pt-5",children:i.map((e,t)=>(0,o.jsx)("li",{className:`option border-white text-lg md:text-xl rounded-sm border mt-3 px-3 py-2 cursor-pointer transition-all duration-300 ${n.includes(e)?"bg-white text-black":""} hover:scale-105 hover:shadow-lg`,onClick:()=>s(e),children:e},t))}),(0,o.jsx)("div",{className:"text-2xl px-3 mt-5",children:r&&(0,o.jsx)("div",{className:"mt-2 mb-5",children:(0,o.jsx)("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:"text-xl text-blue-400 hover:underline",children:r.text})})})]})},p=()=>{let e=[{question:"What's your main motivation for exploring Linux?",options:["Curiosity and learning","Privacy and security","Software development","Gaming","Breathing new life into old hardware"],contextLink:{text:"How does Linux breathe life into old hardware?",url:"https://medium.com/@journalehsan/your-system-fliywhy-linux-suits-modest-hardware-but-isnt-a-miracle-worker-01a5b8e591ee"}},{question:"How do you feel about using a command line interface?",options:["Excited to learn","A bit nervous but willing to try","Prefer to avoid it if possible","What's a command line?"],contextLink:{text:"What is a command line?",url:"https://www.freecodecamp.org/news/command-line-for-beginners/"}},{question:"What kind of user interface would make you feel most at home?",options:["Similar to Windows","Similar to macOS","Simple and straightforward","Highly customizable","I'm open to trying something new"],contextLink:{text:"UNIX Customization Exhibit",url:"https://www.reddit.com/r/unixporn/"}},{question:"How do you feel about software updates?",options:["I like having the latest features ASAP","I prefer stability over new features","I'd like a balance of both","I'd rather not think about updates"],contextLink:{text:"Stability in Linux Distributions",url:"https://unix.stackexchange.com/questions/634710/what-does-it-mean-for-a-linux-distribution-to-be-stable-and-how-much-does-it-mat"}},{question:"Do you plan to use your system for any kind of programming or development?",options:["Yes, it's my main focus","I dabble in coding occasionally","No, but I might in the future","Not at all"]},{question:"What types of applications do you use most often?",options:["Office and productivity tools","Creative software (graphics, video, audio)","Web browsing and communication","Games","Development tools"]},{question:"How important is it that your current hardware works out of the box?",options:["Very important - I need everything to work immediately","I can handle some minor tweaks","I'm willing to spend time on hardware compatibility","I'm planning to buy Linux-compatible hardware"]},{question:"How do you feel about community support and forums?",options:["I love being part of a community","I prefer official support channels","I'm okay with both","I'd rather figure things out on my own"],contextLink:{text:"Subreddit sizes for major Linux distributions",url:"https://www.reddit.com/r/linux/comments/1fn63sr/updated_chart_of_distro_subreddits_by_member/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"}},{question:"What's your stance on system customization?",options:["I want to tweak every aspect","Some basic customization is nice","I prefer a polished default experience","I'm not sure yet"]},{question:"How would you describe your overall tech-savviness?",options:["I'm a tech guru","I'm comfortable with technology","I can handle the basics","I often need help with tech"]},{question:"How do you prefer to install new software?",options:["Through a graphical app store","Using the command line","I don't mind either way","I'd like to avoid installing extra software if possible"],contextLink:{text:"What is a package manager?",url:"https://itsfoss.com/package-manager/"}},{question:"How much do you care about your system's resource usage?",options:["I want the lightest system possible","I care, but it's not my top priority","I have powerful hardware, so I'm not too concerned","I don't really think about it"],contextLink:{text:"What makes Linux so lightweight?",url:"https://www.reddit.com/r/linux/comments/112ptg/what_is_it_exactly_that_makes_linux_so_lightweight/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"}},{question:"What's your take on privacy features?",options:["Privacy is my top concern","I appreciate good privacy features","I'm not too worried about it","I don't know much about privacy features"],contextLink:{text:"Privacy and Linux",url:"https://www.makeuseof.com/privacy-benefits-of-using-linux/"}},{question:"Do you plan to use your Linux system for gaming?",options:["Yes, I'm a serious gamer","Occasionally","No, I game on other platforms","I'm not into gaming"],contextLink:{text:"Gaming on Linux",url:"https://itsfoss.com/linux-gaming-guide/"}},{question:"How do you feel about troubleshooting and fixing issues?",options:["I enjoy the challenge","I can handle it if I have good resources","I'd prefer to avoid it","The thought makes me anxious"]},{question:"What's your preferred update cycle for the operating system?",options:["I want constant updates (rolling release)","I prefer less frequent, stable updates","I don't have a preference","What's a release cycle?"],contextLink:{text:"What is rolling release?",url:"https://itsfoss.com/rolling-release/"}},{question:"How important is the philosophy of open-source to you?",options:["It's crucial - I want a fully open-source system","I appreciate open-source but can use proprietary software","I don't have a strong opinion on this","I'm not familiar with open-source philosophy"],contextLink:{text:"What is open source?",url:"https://opensource.com/resources/what-open-source"}},{question:"What's your comfort level with reading documentation or guides?",options:["I love diving into technical docs","I can follow guides if they're clear","I prefer video tutorials","I'd rather not have to read documentation"]},{question:"How much time are you willing to invest in learning your new system?",options:["As much as it takes - I love learning","A few hours a week","I'd prefer minimal learning time","I want it to just work out of the box"],contextLink:{text:"Your Linux Journey",url:"https://linuxjourney.com/"}},{question:"What's your stance on contributing back to the community (e.g., bug reports, helping others)?",options:["I'm excited to contribute","I'll help if it's easy to do so","I prefer to be a passive user","I hadn't considered this before"],contextLink:{text:"How you can contribute to Linux",url:"https://www.linux.com/news/three-ways-beginners-contribute-linux-kernel/"}}],t=(0,l.s0)(),[i,s]=(0,n.useState)(Array(e.length).fill([])),r=(e,t)=>{let o=[...i],n=o[e];n.includes(t)?o[e]=n.filter(e=>e!==t):o[e]=[...n,t],s(o)};return(0,o.jsxs)("div",{className:"quiz",children:[e.map((e,t)=>(0,o.jsx)(m,{question:e.question,options:e.options,selectedOptions:i[t],onSelect:e=>r(t,e),contextLink:e.contextLink},t)),(0,o.jsx)("div",{className:"submit w-full mt-10 flex justify-center items-center",children:(0,o.jsx)("button",{onClick:()=>{if(i.some(e=>0===e.length)){alert("Please answer all questions before submitting.");return}let e=function(e){let t=["Arch","Ubuntu","Fedora","Kali","Mint","Debian","PopOS","Manjaro","NixOS","Gentoo","ElementaryOS","CentOS","Endeavour","Zorin","Suse","Void"],i=Object.fromEntries(t.map(e=>[e,0])),o=Object.fromEntries(t.map(e=>[e,0])),n=(e,t)=>e*t;return e.forEach((e,s)=>{e.forEach(e=>{let r=(e,n)=>{t.includes(e)&&(i[e]+=n,o[e]+=n)};switch(s){case 0:e.includes("Curiosity")&&(r("Ubuntu",n(1.5,1.1)),r("Mint",1)),e.includes("Privacy")&&(r("Debian",1.8),r("Kali",2.2)),e.includes("development")&&(r("Fedora",1.8),r("Arch",n(2,1.3))),e.includes("Gaming")&&(r("PopOS",2),r("Manjaro",1.8)),e.includes("old hardware")&&(r("Void",2),r("Debian",1.6));break;case 1:e.includes("Excited")&&(r("Arch",2.2),r("Gentoo",2.5)),e.includes("nervous")&&(r("Ubuntu",1.5),r("Mint",1.8)),e.includes("avoid")&&(r("ElementaryOS",1.8),r("Zorin",1.6));break;case 2:e.includes("Windows")&&(r("Zorin",2),r("Mint",1.8)),e.includes("macOS")&&r("ElementaryOS",2.2),e.includes("Simple")&&(r("Mint",1.6),r("Ubuntu",1.5)),e.includes("customizable")&&(r("Arch",2),r("Manjaro",1.8));break;case 3:e.includes("latest features")&&(r("Arch",2.3),r("Fedora",1.9)),e.includes("stability")&&(r("Debian",2),r("CentOS",1.8)),e.includes("balance")&&(r("Ubuntu",1.6),r("Manjaro",1.7));break;case 4:e.includes("main focus")&&(r("Fedora",2.1),r("Arch",2.3)),e.includes("dabble")&&(r("Ubuntu",1.7),r("PopOS",1.8));break;case 5:e.includes("Office")&&(r("Ubuntu",1.6),r("Mint",1.7)),e.includes("Creative")&&(r("Ubuntu",1.8),r("Fedora",1.5)),e.includes("Games")&&(r("PopOS",2.1),r("Manjaro",1.9));break;case 6:e.includes("Very important")&&(r("Ubuntu",1.8),r("Mint",1.6)),e.includes("minor tweaks")&&(r("Fedora",1.6),r("PopOS",1.8));break;case 7:e.includes("love community")&&(r("Ubuntu",1.9),r("Arch",2)),e.includes("official support")&&r("Suse",1.8);break;case 8:e.includes("tweak every aspect")&&(r("Arch",2.5),r("Gentoo",2.8));break;case 9:e.includes("tech guru")&&(r("Arch",2.5),r("Gentoo",2.8));break;case 10:e.includes("graphical app store")&&(r("Ubuntu",1.8),r("PopOS",1.7));break;case 11:e.includes("lightest system")&&(r("Void",2.3),r("Arch",1.8));break;case 12:e.includes("Privacy is top")&&(r("Kali",2.6),r("Debian",2));break;case 13:e.includes("serious gamer")&&(r("PopOS",2.2),r("Manjaro",2));break;case 14:e.includes("enjoy challenge")&&(r("Arch",2.5),r("Gentoo",2.8));break;case 15:e.includes("constant updates")&&(r("Arch",2.3),r("Manjaro",2.1));break;case 16:e.includes("crucial")&&(r("Debian",2.2),r("Fedora",2));break;case 17:e.includes("love diving")&&(r("Arch",2.5),r("Gentoo",2.8));break;case 18:e.includes("As much as it takes")&&(r("Arch",2.5),r("Gentoo",2.8));break;case 19:e.includes("excited to contribute")&&(r("Fedora",2.2),r("Debian",2))}})}),t.forEach(e=>{o[e]>0&&(i[e]=i[e]/o[e]*100)}),i}(i),o=Math.max(...Object.values(e)),n=Object.entries(e).filter(e=>{let[t,i]=e;return i===o}).map(e=>{let[t,i]=e;return t});console.log(e),t("/results",{state:{topDistros:n}})},className:"w-full md:w-3/4 rounded-sm border text-center border-sm px-5 py-2 hover:bg-white hover:text-black mb-20",children:"Submit"})})]})},b={Arch:{iconPath:"distro-icons/arch.png",description:"Arch Linux is a rolling release distribution known for its simplicity and flexibility. It is designed for users who want full control over their system, but this comes at the cost of a steep learning curve. Arch requires users to configure everything manually, from package management to system setup, making it a favorite among experienced Linux users who prefer DIY solutions.",website:"https://archlinux.org"},Ubuntu:{iconPath:"distro-icons/ubuntu.png",description:"Ubuntu is one of the most popular Linux distributions, especially for beginners. It offers a user-friendly experience with an easy installation process, a robust package repository, and excellent hardware compatibility. Ubuntu is a great choice for everyday users, developers, and even enterprises.",website:"https://ubuntu.com"},Fedora:{iconPath:"distro-icons/fedora.png",description:"Fedora is known for its focus on innovation, including adopting the latest open-source technologies. It is a great choice for developers who want cutting-edge software and tools, and it is sponsored by Red Hat, making it reliable and enterprise-ready. Fedora is also dedicated to the principles of free and open-source software.",website:"https://fedoraproject.org"},Kali:{iconPath:"distro-icons/kali.png",description:"Kali Linux is a security-focused distribution primarily used for penetration testing and ethical hacking. It comes pre-installed with hundreds of security tools designed for digital forensics, network security, and testing system vulnerabilities. Kali is used by professionals in the security industry and by individuals looking to explore ethical hacking.",website:"https://kali.org"},Mint:{iconPath:"distro-icons/mint.png",description:"Linux Mint is a user-friendly distribution based on Ubuntu, aimed at making Linux accessible to everyone, including those new to the operating system. It provides a familiar interface that closely resembles Windows, making it a smooth transition for users switching from Microsoft’s OS.",website:"https://linuxmint.com"},Debian:{iconPath:"distro-icons/debian.png",description:"Debian is one of the oldest and most stable Linux distributions. Known for its rock-solid stability and vast software repository, it is ideal for both servers and desktops. Debian is a foundation for many other distributions, including Ubuntu, and it emphasizes free software principles.",website:"https://debian.org"},PopOS:{iconPath:"distro-icons/pop.png",description:"Pop!_OS is a distribution from System76, designed with creators, developers, and gamers in mind. Based on Ubuntu, it comes pre-configured with tools and settings for productive use, including seamless tiling window management and optimized support for NVIDIA GPUs, making it a great choice for gaming and development.",website:"https://pop.system76.com"},Manjaro:{iconPath:"distro-icons/manjaro.png",description:"Manjaro is based on Arch Linux but is designed to be more user-friendly. It retains the rolling release model of Arch, meaning you’ll always have the latest software, but with tools and features that make it accessible to users who may not be comfortable with manual setup. Manjaro is perfect for those looking for the power of Arch without the complexity.",website:"https://manjaro.org"},NixOS:{iconPath:"distro-icons/nixos.png",description:"NixOS is a unique distribution that uses the Nix package manager, which provides atomic upgrades, rollbacks, and a declarative configuration model. It’s ideal for users who want to manage their system with precision and is particularly popular among DevOps professionals and advanced users.",website:"https://nixos.org"},Gentoo:{iconPath:"distro-icons/gentoo.png",description:"Gentoo is a source-based distribution designed for power users who want complete control over their system. With Gentoo, users compile software from source, allowing for extreme customization and optimization. It’s one of the most difficult distros to install and maintain, but it offers unparalleled flexibility for those who know what they’re doing.",website:"https://gentoo.org"},ElementaryOS:{iconPath:"distro-icons/elementary.png",description:"ElementaryOS is designed to be simple and beautiful, providing a polished user experience similar to macOS. It focuses on minimalism and ease of use, making it a great choice for users who want a clean, visually appealing interface without the need for extensive customization.",website:"https://elementary.io"},CentOS:{iconPath:"distro-icons/centos.png",description:"CentOS is a community-driven distribution derived from the sources of Red Hat Enterprise Linux (RHEL). It is widely used in enterprise environments due to its long-term support and stability. CentOS is ideal for servers and businesses that need a reliable, production-ready operating system.",website:"https://www.centos.org"},Endeavour:{iconPath:"distro-icons/endeavour.png",description:"EndeavourOS is a user-friendly Arch-based distribution that simplifies the Arch installation process and provides a robust, terminal-centric experience. It is ideal for users who want to experience Arch without the manual setup, but still appreciate the flexibility and rolling release model.",website:"https://endeavouros.com"},Zorin:{iconPath:"distro-icons/zorin.png",description:"Zorin OS is designed to make Linux accessible to users coming from Windows and macOS. It provides an intuitive user interface and comes pre-installed with a variety of software to get users started quickly. Zorin is especially popular with users looking for a system that “just works” out of the box.",website:"https://zorin.com"},Suse:{iconPath:"distro-icons/suse.png",description:"SUSE Linux is a stable, enterprise-ready distribution known for its reliability in corporate environments. It offers excellent support for cloud, container, and enterprise systems. SUSE is also available as an open-source version called openSUSE, which is suitable for general desktop use.",website:"https://suse.com"},Void:{iconPath:"distro-icons/void.png",description:"Void Linux is an independent, rolling release distribution known for its simplicity and efficiency. It uses the runit init system for faster boot times and offers both glibc and musl libc variants. Void is designed for users who value performance and control, making it an excellent choice for both desktops and servers. Its package manager, xbps, provides a user-friendly experience for managing software and system updates. Void Linux aims to provide a minimalist yet powerful environment for users who prefer a hands-on approach.",website:"https://voidlinux.org"}},f=()=>{let{topDistros:e=[]}=(0,l.TH)().state||{};return 0===e.length?(0,o.jsx)("div",{className:"text-center text-gray-500 mt-10",children:"No results to show. Please try again."}):(0,o.jsxs)("div",{className:"results-container max-w-4xl mx-auto px-4 py-8",children:[(0,o.jsx)("h2",{className:"text-3xl font-bold mb-6 text-center",children:"Recommended Distributions"}),e.map(e=>{var t,i,n;return(0,o.jsxs)("div",{className:"result-item flex flex-col md:flex-row items-start mb-8 p-6 bg-black border border-white rounded-sm shadow-lg",children:[(0,o.jsxs)("div",{className:"flex flex-col items-center mr-6 w-full md:w-1/4 border-r-white mb-4 md:mb-0",children:[(0,o.jsx)("img",{src:(null===(t=b[e])||void 0===t?void 0:t.iconPath)||"distro-icons/ubuntu.png",alt:`${e} logo`,className:"w-24 h-24 mb-2"}),(0,o.jsx)("h3",{className:"distro-name text-xl font-bold text-center",children:e}),(0,o.jsx)("a",{href:null===(i=b[e])||void 0===i?void 0:i.website,target:"_blank",rel:"noopener noreferrer",className:"text-white hover:underline text-sm mt-2",children:"Visit Website"})]}),(0,o.jsx)("div",{className:"w-full md:w-3/4",children:(0,o.jsx)("p",{className:"distro-description text-gray-300",children:(null===(n=b[e])||void 0===n?void 0:n.description)||"No description available."})})]},e)})]})},g=document.getElementById("root");g&&s.createRoot(g).render((0,o.jsx)(n.StrictMode,{children:(0,o.jsx)(()=>(0,o.jsx)(r.UT,{children:(0,o.jsxs)("div",{className:"content bg-secondary text-primary",children:[(0,o.jsx)(a,{}),(0,o.jsxs)(l.Z5,{children:[(0,o.jsx)(l.AW,{path:"/",element:(0,o.jsx)(h,{})}),(0,o.jsx)(l.AW,{path:"/quiz",element:(0,o.jsx)(p,{})}),(0,o.jsx)(l.AW,{path:"/results",element:(0,o.jsx)(f,{})})]})]})}),{})}))}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,i),s.exports}i.m=e,(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};i.t=function(o,n){if(1&n&&(o=this(o)),8&n||"object"==typeof o&&o&&(4&n&&o.__esModule||16&n&&"function"==typeof o.then))return o;var s=Object.create(null);i.r(s);var r={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach(function(e){r[e]=function(){return o[e]}});return r.default=function(){return o},i.d(s,r),s}})(),i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=[];i.O=function(t,o,n,s){if(o){s=s||0;for(var r=e.length;r>0&&e[r-1][2]>s;r--)e[r]=e[r-1];e[r]=[o,n,s];return}for(var a=1/0,r=0;r<e.length;r++){for(var o=e[r][0],n=e[r][1],s=e[r][2],l=!0,u=0;u<o.length;u++)(!1&s||a>=s)&&Object.keys(i.O).every(function(e){return i.O[e](o[u])})?o.splice(u--,1):(l=!1,s<a&&(a=s));if(l){e.splice(r--,1);var c=n();void 0!==c&&(t=c)}}return t}})(),i.rv=function(){return"1.0.8"},(()=>{var e={980:0};i.O.j=function(t){return 0===e[t]};var t=function(t,o){var n=o[0],s=o[1],r=o[2],a,l,u=0;if(n.some(function(t){return 0!==e[t]})){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(r)var c=r(i)}for(t&&t(o);u<n.length;u++)l=n[u],i.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return i.O(c)},o=self.webpackChunkrsbuild_react_ts=self.webpackChunkrsbuild_react_ts||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),i.ruid="bundler=rspack@1.0.8";var o=i.O(void 0,["361","118"],function(){return i("748")});o=i.O(o)})();