"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[8278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"How to Set Up a WAX State-History Node",nav_order:148,layout:"default",parent:"WAX Infrastructure Guides","lang-ref":"How to Set Up a WAX State-History Node",lang:"en"},i=void 0,s={unversionedId:"wax-infrastructure/wax-mainnet-ship-node",id:"wax-infrastructure/wax-mainnet-ship-node",title:"How to Set Up a WAX State-History Node",description:"There is a nodeos implementation type that is crucial for the operation of numerous WAX Mainnet Services such as  Hyperion Full History  and the  Atomic Assets API  and that is the State-History service.",source:"@site/docs/wax-infrastructure/wax-mainnet-ship-node.md",sourceDirName:"wax-infrastructure",slug:"/wax-infrastructure/wax-mainnet-ship-node",permalink:"/waxdevelopers_test/docs/wax-infrastructure/wax-mainnet-ship-node",draft:!1,editUrl:"https://github.com/3dkrender/waxdeveloper_test/tree/main/docs/wax-infrastructure/wax-mainnet-ship-node.md",tags:[],version:"current",frontMatter:{title:"How to Set Up a WAX State-History Node",nav_order:148,layout:"default",parent:"WAX Infrastructure Guides","lang-ref":"How to Set Up a WAX State-History Node",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"How to Set Up a Solid WAX Mainnet Node",permalink:"/waxdevelopers_test/docs/wax-infrastructure/wax-mainnet-node"},next:{title:"Using WAX Snapshots",permalink:"/waxdevelopers_test/docs/wax-infrastructure/wax-snapshots"}},l={},p=[],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There is a nodeos implementation type that is crucial for the operation of numerous WAX Mainnet Services such as  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eosrio/hyperion-history-api"},"Hyperion Full History"),"  and the  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinknetworkx/eosio-contract-api"},"Atomic Assets API"),"  and that is the State-History service."),(0,r.kt)("p",null,"This guide will show you how to build, configure and deploy nodeos to provide State-History functionality also known as a State History Protocol (SHIP) node."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This article has been updated to incorporate the")," ",(0,r.kt)("a",{parentName:"p",href:"https://antelope.io/"},(0,r.kt)("em",{parentName:"a"},"Antelope"))," ",(0,r.kt)("em",{parentName:"p"},"Leap software build process.")),(0,r.kt)("h1",{id:"how-to-set-up-a-wax-state-history-node"},"How to Set Up a WAX State-History Node"),(0,r.kt)("p",null,"The State-History plugin is used by nodeos to capture historical data about the blockchain state (WAX Mainnet in this case) and store this data in an externally readable flat file format."),(0,r.kt)("p",null,"This plugin opens a websocket interface that can be utilised by multiple simultaneous external services such as Hyperion and Atomic to simply and effectively read this data."),(0,r.kt)("p",null,"Considering how reliant external services are on SHIP nodes, it is crucial that a Guild provide a solid reliable service that can scale to meet the demands of the expanding requirements of the WAX Mainnet."),(0,r.kt)("p",null,"This article will walk through an example that is currently valid (September 2022) and in use by the EOSphere Guild who are serving multiple websocket connections for both our own services and services for other Guilds."),(0,r.kt)("h1",{id:"mainnet-requirements"},"Mainnet Requirements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hardware")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4 Core CPU /  ",(0,r.kt)("em",{parentName:"li"},"4Ghz+")),(0,r.kt)("li",{parentName:"ul"},"(1) 256GB+ Disk /  ",(0,r.kt)("em",{parentName:"li"},"Enterprise Grade SSD or NVMe ("),(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"High Endurance Req.")),(0,r.kt)("em",{parentName:"li"},")")),(0,r.kt)("li",{parentName:"ul"},"(2) 10TB+ Disk /  ",(0,r.kt)("em",{parentName:"li"},"SAS or SATA are OK however SSD or NVMe preferred"))),(0,r.kt)("p",null,"Currently (September 2022) the  ",(0,r.kt)("inlineCode",{parentName:"p"},"blocks"),"and  ",(0,r.kt)("inlineCode",{parentName:"p"},"state-history"),"  directories take up just short of  ",(0,r.kt)("strong",{parentName:"p"},"8TB"),"  of disk space."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2.1T    ./blocks  \n5.7T    ./state-history  \n7.8T    .\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"128GB+ RAM")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Operating System")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ubuntu 18.04"),(0,r.kt)("li",{parentName:"ul"},"Ubuntu 20.04  ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"(Recommended)"))),(0,r.kt)("li",{parentName:"ul"},"Ubuntu 22.04")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Internet")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modern Broadband / Fibre Connection (100Mb/s synchronous and above)")),(0,r.kt)("h1",{id:"prepare-the-operating-system-environment"},"Prepare the Operating System Environment"),(0,r.kt)("p",null,"Before the WAX software is built and configured, the operating system environment Ubuntu 20.04 in this case needs to be configured for performance and the load that is will take on."),(0,r.kt)("h1",{id:"zettabyte-file-system-zfs"},"Zettabyte File System (ZFS)"),(0,r.kt)("p",null,"This node build uses  ",(0,r.kt)("strong",{parentName:"p"},"2 Discrete SAS Disks"),"  in order to balance disk IO and provide a more affordable storage option for the  ",(0,r.kt)("inlineCode",{parentName:"p"},"/blocks"),"  and  ",(0,r.kt)("inlineCode",{parentName:"p"},"/state-history"),"  directories which together are currently 8TB and growing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disk 1")," is the high speed enterprise grade SSD or NVMe will be the OS disk used for the WAX software, all config and the state files. The state files are extremely IO intensive, a consumer based SSD\u2019s life span will be short lived due to the high number of writes hence the need to use a high endurance enterprise SSD or NVMe."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note:"),"  ",(0,r.kt)("em",{parentName:"p"},"It needs to be mentioned that there are mechanisms to run these state files in memory if you have enough available, this topic will be covered in a future article.")),(0,r.kt)("p",null,"In this example Disk 1 will run the default OS  ",(0,r.kt)("strong",{parentName:"p"},"Ext4 File System")," that will already be implemented during the Ubuntu 20.04 installation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disk 2"),"  is the large capacity SATA or SAS disk that will host the  ",(0,r.kt)("inlineCode",{parentName:"p"},"/blocks"),"  and  ",(0,r.kt)("inlineCode",{parentName:"p"},"/state-history"),"  directories. The IO demands on these directories are far lower than the state files and slower larger capacity spindle based disks are still suitable."),(0,r.kt)("p",null,"In this example Disk 2 will run the  ",(0,r.kt)("strong",{parentName:"p"},"ZFS File System")," which will give us two main benefits. ZFS will enable us to use  ",(0,r.kt)("strong",{parentName:"p"},"LZ4 compression"),"  and it will improve disk IO with  ",(0,r.kt)("strong",{parentName:"p"},"Adaptive Replacement Cache"),"  (ARC). Compression will only be used for the /blocks directory (which currently is a gain of 1.3x ) as there on no benefits on the already optimised state-history flat file."),(0,r.kt)("p",null,"Implement ZFS on Disk 2 with the below configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#Install ZFS  \n> sudo apt-get install zfsutils-linux\n\n#Locate the Disk 2 device name  \n> lsblk\n\n#Create ZFS Pool called "datavolume" on device "sdb"  \n> sudo zpool create datavolume /dev/sdb\n\n#Enable LZ4 compression  \n> sudo zfs set compression=lz4 datavolume\n\n#Disable ZFS access time Updates  \n> sudo zfs set atime=off datavolume\n\n#Set ARC to only cache metadata  \n> sudo zfs set primarycache=all datavolume\n\n#Set the mountpoint location to your preferred location  \n> sudo zfs set mountpoint=/home/eosphere/datavolume datavolume\n\n#Create the specific folders for /blocks and /state-history  \n> mkdir /home/eosphere/datavolume/blocks\n\n> mkdir /home/eosphere/datavolume/state-history\n\n#Set specific mountpoint for /blocks and /state-history  \n> sudo zfs create -o mountpoint=/home/eosphere/datavolume/blocks datavolume/blocks\n\n> sudo zfs create -o mountpoint=/home/eosphere/datavolume/state-history datavolume/state-history\n\n#Turn off lz4 compression on the state-history mountpoint  \n> sudo zfs set compression=none datavolume/state-history\n\n#Verify ZFS Settings  \n> zfs get all\n')),(0,r.kt)("h1",{id:"network-time-protocol-ntp"},"Network Time Protocol (NTP)"),(0,r.kt)("p",null,"It is crucial for a globally meshed blockchain to have synchronised time across all nodes."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://chrony.tuxfamily.org/"},"Chrony"),"  is an excellent NTP client and is quite suitable for the needs of WAX Mainnet."),(0,r.kt)("p",null,"Install, configure and verify as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#Install Chrony  \n> sudo apt install chrony\n\n#If necessary manually add local peers, these are AU servers  \n> sudo nano /etc/chrony/chrony.conf  \n  \nserver 0.pool.ntp.org  \nserver 1.pool.ntp.org  \nserver 2.pool.ntp.org  \nserver 3.pool.ntp.org\n\n#Restart Chrony  \n> sudo /etc/init.d/chrony restart\n\n#Verify  \n> chronyc sources -v  \n\n> chronyc tracking\n\n#Set your local timezone if necessary  \n> sudo timedatectl set-timezone Australia/Perth\n")),(0,r.kt)("h1",{id:"stack-limits-and-openfiles"},"Stack Limits and Openfiles"),(0,r.kt)("p",null,"WAX software memory addressing and the number of API requests a Production Mainnet Node will receive require that the Ubuntu 20.04 default Stack Limit and Number of Open Files be increased."),(0,r.kt)("p",null,"Configure and verify the raised limits as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> sudo nano /etc/systemd/system.conf\n\n#Append the following configuration  \nDefaultLimitNOFILE=64000   \nDefaultLimitSTACK=65536000\n\n#Restart server and verify  \n> ulimit -a\n")),(0,r.kt)("h1",{id:"build-the-software"},"Build the Software"),(0,r.kt)("p",null,"The WAX software is derived from opensource Antelope software, however it has been modified to suit the needs of the WAX Protocol Network."),(0,r.kt)("p",null,"Currently the WAX Block Producer accepted software build and version is  ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.1.0wax01"),"  created by  ",(0,r.kt)("a",{parentName:"p",href:"https://cc32d9.medium.com/"},"cc32d9"),"  who is member of the  ",(0,r.kt)("a",{parentName:"p",href:"https://eosamsterdam.net/"},"EOS Amsterdam Guild")),(0,r.kt)("p",null,"The latest  ",(0,r.kt)("inlineCode",{parentName:"p"},"wax"),"build tag is currently available on the  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cc32d9/wax-leap/tags"},"cc32d9 Github")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Building Process")),(0,r.kt)("p",null,"This example uses  ",(0,r.kt)("a",{parentName:"p",href:"https://ubuntu.com/"},"Ubuntu Linux"),"  to build the WAX software from source following the process below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> cd ~\n\n> sudo apt install -y file\n\n> git clone https://github.com/cc32d9/wax-leap.git\n\n> cd wax-leap\n\n> git checkout v3.1.0.wax01\n\n> git submodule update --init --recursive\n\n> sudo bash scripts/install_deps.sh\n\n> mkdir build\n\n# If necessary supplement $(nproc) below with the number of jobs your server can sustain, I suggest 4GB RAM required / job\n> nice bash scripts/pinned_build.sh ~/wax-leap/build/leap-deps ~/wax-leap/build $(nproc)\n\n# Binaries are located in ~/wax-leap/build/programs\n")),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Now that a clean build of the WAX software has been compiled lets get into configuring state-history for WAX Mainnet operation."),(0,r.kt)("p",null,"To configure and start the node  ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeos"),"  will be used,  ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeos"),"is the core service daemon that runs on every WAX Protocol Network node."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nodeos"),"  can be configured to process smart contracts, validate transactions, produce blocks containing valid transactions, and confirm blocks to record them on the blockchain."),(0,r.kt)("p",null,"The primary operational functions of  ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeos"),"  are; running it as a Block Producer, Network API Endpoint, P2P Seed Node or State-History Node. Typically on a busy network such as the WAX Mainnet you would separate these functions across physically discrete servers."),(0,r.kt)("p",null,"In this WAX Mainnet example you will make your node connect to other network peers and available for API and Websocket connections as a State-History (SHIP) node."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nodeos"),"  requires  ",(0,r.kt)("strong",{parentName:"p"},"two files"),"  to connect to peers and run on the WAX Mainnet:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"config.ini")),(0,r.kt)("p",null,"Create a default  ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini"),"  by running  ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeos"),"  without config as per the command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> mkdir ~/waxdata\n\n> cd ~/wax-leap/build/programs/nodeos\n\n> ./nodeos --data-dir ~/waxdata --config-dir ~/waxdata\n")),(0,r.kt)("p",null,"You will then be able to edit the newly created  ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini"),"  and see all the available parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> cd ~/waxdata> nano config.ini\n")),(0,r.kt)("p",null,"Now edit the  ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini"),"and add the following configuration settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# the location of the blocks directory on Disk 2  \nblocks-dir = /home/eosphere/datavolume/blocks\n\nwasm-runtime = eos-vm-jit  \nchain-state-db-size-mb = 131072  \nchain-state-db-guard-size-mb = 1024\n\nread-mode = head\n\nhttp-server-address = 0.0.0.0:8888  \naccess-control-allow-origin = *  \naccess-control-allow-headers = Origin, X-Requested-With, Content-Type, Accept  \nhttp-max-response-time-ms = 100  \nverbose-http-errors = true  \nhttp-validate-host = false\n\np2p-listen-endpoint = 0.0.0.0:9876\n\n# 3dkrenderwax: FI, wax-peer  \np2p-peer-address = peer.3dkrender.com:9880  \n  \n# 3dkrenderwax: FI, query  \np2p-peer-address = query.3dkrender.com:9880  \n  \n# amsterdamwax: NL, Amsterdam  \np2p-peer-address = wax.eu.eosamsterdam.net:9101  \n  \n# amsterdamwax: US, Washington, D.C.  \np2p-peer-address = waxp2p.us.eosamsterdam.net:9101  \n  \n# blokcrafters: CA, Montreal, Quebec  \np2p-peer-address = wax-peer-ca.blokcrafters.io:9876  \n  \n# blokcrafters: FI, Helsinki, Uusimaa  \np2p-peer-address = wax-peer-eu.blokcrafters.io:9876  \n  \n# bp.box: KY, Cayman Islands  \np2p-peer-address = wax.defibox.xyz:9966  \n  \n# bp.wecan: GB, London  \np2p-peer-address = seed2-wax-mainnet.wecan.dev:14998  \n  \n# bp.wecan: US, NewYork  \np2p-peer-address = seed3-wax-mainnet.wecan.dev:14998  \n  \n# cryptolions1: DE, Germany-Finland  \np2p-peer-address = wax.cryptolions.io:9876  \n  \n# dapplica: DE, Germany-Finland  \np2p-peer-address = wax.dapplica.io:9876  \n  \n# eosauthority: DE, Falkenstein  \np2p-peer-address = node-wax.eosauthority.com:10301  \n  \n# eosauthority: FI, Helsinki  \np2p-peer-address = node-wax-p2p.eosauthority.com:10301  \n  \n# eosdacserver: GB, United Kingdom  \np2p-peer-address = wax-p2p.eosdac.io:29876  \n  \n# eosdublinwow: FI, Finland  \np2p-peer-address = wax.p2p.eosdublin.io:9876  \n  \n# eoseouldotio: JP, Seoul  \np2p-peer-address = p2p.wax.eoseoul.io:29876  \n  \n# eosphereiobp: CA, Beauharnois  \np2p-peer-address = peer1-wax.eosphere.io:9876  \n  \n# eosphereiobp: CA, Beauharnois  \np2p-peer-address = peer2-wax.eosphere.io:9876  \n  \n# greeneosiobp: DE, Germany  \np2p-peer-address = p2p1.wax.greeneosio.com:9876  \n  \n# guild.nefty: DE, Germany  \np2p-peer-address = p2p-node1.neftyblocks.com:9876  \n  \n# guild.nefty: FI, Finland  \np2p-peer-address = p2p-node2.neftyblocks.com:9876  \n  \n# ledgerwiseio: FI, LB  \np2p-peer-address = waxp2p.ledgerwise.io:21877  \n  \n# nation.wax: CA, Canada  \np2p-peer-address = wax.seed.eosnation.io:9876  \n  \n# oneinacilian: GB, United Kingdom  \np2p-peer-address = p2p.oiac.io:9876  \n  \n# sentnlagents: GB, United Kingdom  \np2p-peer-address = waxp2p.sentnl.io:9876  \n  \n# tokengamerio: DE, Germany  \np2p-peer-address = peer2.wax.tgg.gg:9876  \n  \n# waxhiveguild: FI, Finnland  \np2p-peer-address = peer1.hivebp.io:9876  \n  \n# waxhiveguild: DE, Germany  \np2p-peer-address = peer2.hivebp.io:9876  \n  \n# waxmadrid111: DE, SEED  \np2p-peer-address = wax-seed.eosiomadrid.io:9876  \n  \n# waxswedenorg: SE, Sweden  \np2p-peer-address = p2p.waxsweden.org:35777\n\n# PeerList - https://validate.eosnation.io/wax/reports/config.html\n\nagent-name = "<yourname> WAX Mainnet State-History"  \n  \nsync-fetch-span = 500\n\nstate-history-dir = /home/eosphere/datavolume/state-history  \ntrace-history = true  \nchain-state-history = true  \nstate-history-endpoint = 0.0.0.0:8080\n\nplugin = eosio::http_plugin  \nplugin = eosio::state_history_plugin  \nplugin = eosio::chain_plugin  \nplugin = eosio::chain_api_plugin\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"genesis.json")),(0,r.kt)("p",null,"These are the initial state parameters required by every new starting node on the WAX Mainnet. Create the file as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> cd ~/waxdata\n\n> nano genesis.json\n")),(0,r.kt)("p",null,"Add the following parameters to the  ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json"),"  file for the WAX Public Mainnet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{  \n  "initial_timestamp": "2019-06-05T12:00:00.000",  \n  "initial_key": "EOS8i2pkwtv2JmdYWNJdcy5BcJ7wCE5q6mpE1hwT25HdgHMzeRday",  \n  "initial_configuration": {  \n    "max_block_net_usage": 1048576,  \n    "target_block_net_usage_pct": 1000,  \n    "max_transaction_net_usage": 524288,  \n    "base_per_transaction_net_usage": 12,  \n    "net_usage_leeway": 500,  \n    "context_free_discount_net_usage_num": 20,  \n    "context_free_discount_net_usage_den": 100,  \n    "max_block_cpu_usage": 500000,  \n    "target_block_cpu_usage_pct": 2000,  \n    "max_transaction_cpu_usage": 150000,  \n    "min_transaction_cpu_usage": 100,  \n    "max_transaction_lifetime": 3600,  \n    "deferred_trx_expiration_window": 600,  \n    "max_transaction_delay": 3888000,  \n    "max_inline_action_size": 4096,  \n    "max_inline_action_depth": 4,  \n    "max_authority_depth": 6  \n  }  \n}\n')),(0,r.kt)("h1",{id:"running-nodeos"},"Running Nodeos"),(0,r.kt)("p",null,"Now that the  ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini"),"  has been configured and the initial WAX Mainnet chain parameters  ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json"),"  have been created, you can now join the network and sync up the node."),(0,r.kt)("p",null,"Use screen to keep your session live even when you disconnect, usage below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#Create a new screen session\n> screen -US wax \n\n#Disconnect screen session\n> ctrl-a+d \n\n#Reconnect screen session\n> screen -r wax\n")),(0,r.kt)("p",null,"Run  ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeos"),"  with pointers to the config, data directory and genesis file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> cd ~/wax-leap/build/programs/nodeos\n> ./nodeos --data-dir ~/waxdata --config-dir ~/waxdata --genesis-json ~/waxdata/genesis.json --disable-replay-opts\n")),(0,r.kt)("p",null,"Your WAX Mainnet node will now start syncing with the configured peers and catch-up with the WAX Mainnet chain headblock."),(0,r.kt)("p",null,"At time of writing (September 2022) this may take up to a month for a complete block sync from genesis. It may also help if you choose a few closely located peers to limit peer overload and ensure low latency."),(0,r.kt)("p",null,"As your node syncs from the start of the chain it will build the log and index files in the  ",(0,r.kt)("inlineCode",{parentName:"p"},"/blocks"),"  and  ",(0,r.kt)("inlineCode",{parentName:"p"},"/state-history"),"  directories."),(0,r.kt)("p",null,"Your node will be accessible via ",(0,r.kt)("strong",{parentName:"p"},"http port 8888"),"  for queries and  ",(0,r.kt)("strong",{parentName:"p"},"ws port 8080"),"  for state-history."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"These ",(0,r.kt)("strong",{parentName:"p"},"WAX Developer Technical Guides")," are created using source material from the ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/eosphere/wax-technical-how-to/home"},"EOSphere WAX Technical How To Series")),(0,r.kt)("p",null,"Be sure to ask any questions in the  ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/eosphere_io"},"EOSphere Telegram")))}u.isMDXComponent=!0}}]);