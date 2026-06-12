// Channel Data with categories and metadata
const channels = [
    { 
        id: "btv", 
        name: "BTV National", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/0/02/Bangladesh_Television_Logo.svg",
        isWorldCup: true
    },
    { 
        id: "tsports", 
        name: "T Sports HD", 
        url: "http://172.16.29.2:8090/hls/tsportshd.m3u8", 
        category: "sports", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/T_Sports_logo.svg",
        isWorldCup: true
    },
    {
        id: "somoy_sports",
        name: "Somoy TV (Live Sports)",
        url: "http://172.16.29.2:8090/hls/somoytv.m3u8",
        category: "sports",
        quality: "HD",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c4/SOMOY_TV_Logo.svg",
        isWorldCup: true
    },
    { 
        id: "somoy_local", 
        name: "Somoy TV HD (Local)", 
        url: "http://10.99.99.99:8082/SOMOY.TV.HD/tracks-v1a1/mono.m3u8?token=923c0d88dd5e5ff4ae16fb34bed99fd741a3ae85-a80fabc80cc2f0e1cc3bbe1d54c47805-1781273115-1781262315", 
        category: "sports", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c4/SOMOY_TV_Logo.svg",
        isWorldCup: true,
        isLocal: true
    },
    { 
        id: "ptvsports", 
        name: "PTV Sports HD", 
        url: "https://tvsen5.aynaott.com/PtvSports/index.m3u8", 
        category: "sports", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/e/e4/PTV_Sports.png",
        isWorldCup: true
    },
    {
        id: "fifa_special_6",
        name: "FIFA Special 6 (Live)",
        url: "https://a62dad94.wurl.com/ppc-sysdata_s_p_a_fifa_6-UTC-wfo-0-8581ba69/playlist_3000k_20260611T124901_204389.ts",
        category: "sports",
        quality: "HD",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/FIFA_logo_without_slogan.svg",
        isWorldCup: true
    },
    {
        id: "eurosports",
        name: "Euro Sports HD",
        url: "https://stream.ottplus.bd/live/euro_sports_hd_abr/live/euro_sports_hd/chunks.m3u8",
        category: "sports",
        quality: "HD",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Eurosport_logo_2015.svg",
        isWorldCup: true
    },
    {
        id: "beinsports_esp",
        name: "beIN Sports En Español",
        url: "https://bein-esp-xumo.amagi.tv/playlistR1080p.m3u8",
        category: "sports",
        quality: "HD",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/BeIN_Sports_logo.svg",
        isWorldCup: true
    },
    {
        id: "ktvsports",
        name: "KTV Sports HD",
        url: "https://kwtsplta.cdn.mangomolo.com/spl/smil:spl.stream.smil/chunklist_b8000000_t64MTA4MHA=.m3u8",
        category: "sports",
        quality: "HD",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/KTV_Sports.svg",
        isWorldCup: true
    },
    { 
        id: "tycsports", 
        name: "TyC Sports HD", 
        url: "https://amg26268-amg26268c14-freelivesports-emea-10267.playouts.now.amagi.tv/ts-us-e2-n2/playlist/amg26268-sportsstudio-tycsports-freelivesportsemea/playlist.m3u8", 
        category: "sports", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/TyC_Sports_Logo.svg",
        isWorldCup: true
    },
    { 
        id: "atnbangla", 
        name: "ATN Bangla HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/ATN_Bangla_Logo_without_slogan.svg"
    },
    { 
        id: "channeli", 
        name: "Channel i HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/8/88/Channel-i.svg"
    },
    { 
        id: "deeptotv", 
        name: "Deepto TV HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1711/output/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/0/00/Logo_of_Deepto_TV.svg"
    },
    { 
        id: "channel24", 
        name: "Channel 24 HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/9/9b/Logo_of_Channel_24_%28Bangladesh%29.svg"
    },
    { 
        id: "somoy", 
        name: "Somoy TV HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8", 
        category: "news", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c4/SOMOY_TV_Logo.svg"
    },
    { 
        id: "jamuna", 
        name: "Jamuna TV HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8", 
        category: "news", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/a/a6/Jamuna_TV_Logo.svg"
    },
    { 
        id: "independent", 
        name: "Independent TV HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8", 
        category: "news", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/Independent_Television_Logo.svg"
    },
    { 
        id: "ekattor", 
        name: "Ekattor TV HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8", 
        category: "news", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/5/57/Ekattor_TV_logo.svg"
    },
    { 
        id: "atnnews", 
        name: "ATN News HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8", 
        category: "news", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/1/18/ATN_News_Logo_without_slogan.svg"
    },
    { 
        id: "banglavision", 
        name: "BanglaVision HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/Banglavision.svg"
    },
    { 
        id: "ntv", 
        name: "NTV HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/e/ef/NTV_%28Bangladesh%29_logo.svg"
    },
    { 
        id: "quran", 
        name: "Saudi Quran Live", 
        url: "https://cdn-globecast.akamaized.net/live/eds/saudi_quran/hls_roku/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Quran_TV_%28Saudi_Arabia%29_logo.svg"
    },
    { 
        id: "sunnah", 
        name: "Saudi Sunnah Live", 
        url: "https://cdn-globecast.akamaized.net/live/eds/saudi_sunnah/hls_roku/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Saudi_Sunnah_TV_Logo.svg"
    },
    {
        id: "rajdhani",
        name: "Rajdhani TV",
        url: "https://stream.shariarsuvo.com/hls6/rajdhaniweb.m3u8",
        category: "tv",
        quality: "HD",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/47/RajdhaniTV.svg"
    },
    {
        id: "rtv",
        name: "RTV HD",
        url: "https://tvsen5.aynaott.com/RtvHD/index.m3u8",
        category: "tv",
        quality: "HD",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/64/RTV_Logo.svg"
    },
    {
        id: "channel9",
        name: "Channel 9 HD",
        url: "https://tvsen6.aynaott.com/channel9/index.m3u8",
        category: "tv",
        quality: "HD",
        logo: "https://upload.wikimedia.org/wikipedia/en/f/ff/Channel9_bd.svg"
    },
    {
        id: "massranga",
        name: "Maasranga TV HD",
        url: "https://tvsen5.aynaott.com/maasrangatv/index.m3u8",
        category: "tv",
        quality: "HD",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/39/Maasranga_Television_Logo.jpg"
    },
    { 
        id: "a_sports_hd_local", 
        name: "A SPORTS HD (Local)", 
        url: "http://10.99.99.99:8082/A.SPORTS.HD/index.m3u8?token=846291c44253ab07aac8fe3c6edf68bba1a10c39-0c2780ae3d2c7f60e5cfb743584ae16b-1781274569-1781263769&remote=no_check_ip", 
        category: "sports", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/b/b3/A_Sports_logo.png", 
        isLocal: true
    },
    { 
        id: "aljazeeta_hd_local", 
        name: "ALJAZEETA HD (Local)", 
        url: "http://10.99.99.99:8082/ALJAZEERA.HD/index.m3u8?token=8fefcb43cdcf56e736bebddced84a7af8691d202-3b78e94e55f1828fe167feaba8b81fbc-1781274551-1781263751&remote=no_check_ip", 
        category: "news", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Al_Jazeera_English_logo.svg", 
        isLocal: true
    },
    { 
        id: "and_flix_hd_local", 
        name: "AND FLIX HD (Local)", 
        url: "http://10.99.99.99:8082/AND.FLIX.HD/index.m3u8?token=2e2536323bc3bcfbb1d9e479e1f3d3c7ef93ebff-d6ad7138f3d6b690542906ec5c376f97-1781274322-1781263522&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "and_picturs_hd_local", 
        name: "AND PICTURS HD (Local)", 
        url: "http://10.99.99.99:8082/ANT.PICTURS.HD/index.m3u8?token=f397a85e29e7f368e17214f8a2836316de07544c-20644d35d56fa117b03f20127223cd73-1781274173-1781263373&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "and_prive_hd_local", 
        name: "AND PRIVE HD (Local)", 
        url: "http://10.99.99.99:8082/AND.PRIVE.HD/index.m3u8?token=7a31a36b21f6a261f197a958e5ed6be42dfc7f80-2199c479db9e6af7b21a68dff4533224-1781274343-1781263543&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "and_xplore_local", 
        name: "AND XPLORE (Local)", 
        url: "http://10.99.99.99:8082/XPLOR.HD/index.m3u8?token=3de683dfa2d20c4160bb0e26381cf9f55c96c435-15922afad6b188aef47c3776b21ffe87-1781274435-1781263635&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "animal_planet_hd_local", 
        name: "ANIMAL PLANET HD (Local)", 
        url: "http://10.99.99.99:8082/ANIMAL.PLANET.HD/index.m3u8?token=15aa491fa86de367522eae221ceb78f87cb91f2d-9d315063d7bae3bbc632c535baca875a-1781274283-1781263483&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Animal_Planet_logo_2018.svg", 
        isLocal: true
    },
    { 
        id: "astro_cricket_local", 
        name: "ASTRO CRICKET (Local)", 
        url: "http://10.99.99.99:8082/ASTRO.CRICKET/index.m3u8?token=c6c28752eef70809f4bc435fe72b742fd889472e-5eee5ccc1069e3a4009ccea78b99cf82-1781274427-1781263627&remote=no_check_ip", 
        category: "sports", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "atn_bangla_local", 
        name: "ATN BANGLA (Local)", 
        url: "http://10.99.99.99:8082/ATN.BANGLA.HD/index.m3u8?token=6e6037a7753c803d0224afa2298cc6eb6106986a-2767542fbef0841fe5a3a08f1cd35461-1781274540-1781263740&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/ATN_Bangla_Logo_without_slogan.svg", 
        isLocal: true
    },
    { 
        id: "atn_news_local", 
        name: "ATN NEWS (Local)", 
        url: "http://10.99.99.99:8082/ATN.NEWS.HD/index.m3u8?token=5fc6356d5900fff79076e1e502db5b2352c9227f-ba5c43111d5932bc2a1be2efcc10e7ca-1781274604-1781263804&remote=no_check_ip", 
        category: "news", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/1/18/ATN_News_Logo_without_slogan.svg", 
        isLocal: true
    },
    { 
        id: "axn_hd_local", 
        name: "AXN HD (Local)", 
        url: "http://10.99.99.99:8082/AXN.HD/index.m3u8?token=b97890b418588ecfdf72fddf1b0cdb4e03c28788-7bc508099dbbd58aee1f8b3ef58985fc-1781274616-1781263816&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "hbo_hd_local", 
        name: "HBO HD (Local)", 
        url: "http://10.99.99.99:8082/HBO.HD/index.m3u8?token=753c54df22b247b66abffafb960bf03c1460baaa-0298109ae14f005b3a8ed2e0c4cf0fd1-1781274622-1781263822&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/HBO_logo.svg", 
        isLocal: true
    },
    { 
        id: "bal_bharat_local", 
        name: "BAL BHARAT (Local)", 
        url: "http://10.99.99.99:8082/ETV.BAL.BHARAT/index.m3u8?token=359becff68f45e01751c49cda4daf01a2e988e72-44dd8e2168cabee7227ccdfc30a5471f-1781274382-1781263582&remote=no_check_ip", 
        category: "kids", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "bbc_earth_hd_local", 
        name: "BBC EARTH HD (Local)", 
        url: "http://10.99.99.99:8082/BBC.Earth.HD/index.m3u8?token=a8579ff3b1a681088708cc1c86048b2bb8a44e13-f8284c64fa93486d055e822addadd83d-1781274639-1781263839&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "bbc_news_local", 
        name: "BBC NEWS (Local)", 
        url: "http://10.99.99.99:8082/BBC.NEWS/index.m3u8?token=5485c53b1c5dbe9460ebd9efeb3f852dea77bef6-f7d0cc754afee6b0f4a93ab938f0c366-1781274402-1781263602&remote=no_check_ip", 
        category: "news", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/BBC_News_2022.svg", 
        isLocal: true
    },
    { 
        id: "bein_sports_1_local", 
        name: "BEIN SPORTS 1 (Local)", 
        url: "http://10.99.99.99:8082/BEINSPORTS.1/index.m3u8?token=6df9dfba15e75ba7750e325f00cc54dcac55901e-8b1578f1ecc2df4e5025f28302f36f96-1781274411-1781263611&remote=no_check_ip", 
        category: "sports", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/BeIN_Sports_logo.svg", 
        isLocal: true
    },
    { 
        id: "bein_sports_2_local", 
        name: "BEIN SPORTS 2 (Local)", 
        url: "http://10.99.99.99:8082/BEINSPORTS.2/index.m3u8?token=3338ba7e474150c5df6561ebc6fe2c74db41bd13-36f60b2496ae69781ecb9f8f6cdcc359-1781274413-1781263613&remote=no_check_ip", 
        category: "sports", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/BeIN_Sports_logo.svg", 
        isLocal: true
    },
    { 
        id: "bein_sports_3_local", 
        name: "BEIN SPORTS 3 (Local)", 
        url: "http://10.99.99.99:8082/BEIN.SPORT.3/index.m3u8?token=b39dd21521d08ce818e750f61c1c15483f75212d-967cb04a76caf38c1c4934907ea225a8-1781274444-1781263644&remote=no_check_ip", 
        category: "sports", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/BeIN_Sports_logo.svg", 
        isLocal: true
    },
    { 
        id: "cartoon_network_local", 
        name: "CARTOON NETWORK (Local)", 
        url: "http://10.99.99.99:8082/CARTON.NETWORK.HD/index.m3u8?token=d6b716fe8e75a2e60208e8b3ca4b1dd878590944-171abd6a1ce3bbc8d15f080a75c6418b-1781274180-1781263380&remote=no_check_ip", 
        category: "kids", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg", 
        isLocal: true
    },
    { 
        id: "channel_24_local", 
        name: "CHANNEL 24 (Local)", 
        url: "http://10.99.99.99:8082/CHANNEL.24.HD/index.m3u8?token=fb99a70d81b6bf5b1f025b5a5208d3d3b0cdf489-8375e571d3606751e0adeee610e90563-1781274544-1781263744&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/9/9b/Logo_of_Channel_24_%28Bangladesh%29.svg", 
        isLocal: true
    },
    { 
        id: "channel_i_local", 
        name: "CHANNEL I (Local)", 
        url: "http://10.99.99.99:8082/CHANNEL.I.HD/index.m3u8?token=8f11a83451e65bc2166ea3f09a17eb29ea11d5f5-8974441025246d891d792d2a997c550c-1781274542-1781263742&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/8/88/Channel-i.svg", 
        isLocal: true
    },
    { 
        id: "colors_bangla_cinema_local", 
        name: "COLORS BANGLA CINEMA (Local)", 
        url: "http://10.99.99.99:8082/COLORS.BANGLA.CINEMA/index.m3u8?token=2354833ac81bc41d99d2143b0eb0d33257e0876b-f33219f71b231107329b335de5b2c848-1781274363-1781263563&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "colors_bangla_hd_local", 
        name: "COLORS BANGLA HD (Local)", 
        url: "http://10.99.99.99:8082/COLORS.BANGLA.HD/index.m3u8?token=26dcdcc2aaf359f63f64aee33670bc6e13243a4d-4490ce3f53f4e4f74871c3b2844fb501-1781274192-1781263392&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/a/a0/Colors_Bangla_logo.png", 
        isLocal: true
    },
    { 
        id: "colors_cineplex_hd_local", 
        name: "COLORS CINEPLEX HD (Local)", 
        url: "http://10.99.99.99:8082/COLORS.CINEPLEX.HD/index.m3u8?token=5fd37bc51167688b9e4febf03a5f51edc457c39d-356409d2966f5cfd7967b57e658a8e6a-1781274187-1781263387&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "colors_hd_local", 
        name: "COLORS HD (Local)", 
        url: "http://10.99.99.99:8082/COLORS.HD/index.m3u8?token=bc79afd16a0dba038c52647034074cdad25ec069-0dd3f6e963f357e72136d0f24ba7e86c-1781274171-1781263371&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Colors_TV_logo.svg", 
        isLocal: true
    },
    { 
        id: "discovery_hd_local", 
        name: "DISCOVERY HD (Local)", 
        url: "http://10.99.99.99:8082/DISCOVERY.HD/index.m3u8?token=ee024a766d7a48a9756e121ff771767f9b21778d-02fc9198e7a18b55ce667bfa11844d85-1781274266-1781263466&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Discovery_Channel_logo_2019.svg", 
        isLocal: true
    },
    { 
        id: "duranta_tv_local", 
        name: "DURANTA TV (Local)", 
        url: "http://10.99.99.99:8082/DURANTA.TV.HD/index.m3u8?token=d0da5c5de678cfe86791abe33ce1c64a32b38aa2-00e46f1dcd7d33e172305693557b1915-1781274471-1781263671&remote=no_check_ip", 
        category: "kids", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "enterr_10_local", 
        name: "ENTERR 10 (Local)", 
        url: "http://10.99.99.99:8082/ENTER10.BANGLA/index.m3u8?token=7ee4fed2293e2a3aae157be10fa9eeb765e11f1d-58ea42b58ca656b31873cdc45523c70e-1781274549-1781263749&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "eurosports_hd_local", 
        name: "EUROSPORTS HD (Local)", 
        url: "http://10.99.99.99:8082/EUROSPORTS.HD/index.m3u8?token=b69b9df55f07c1f3180d2e9edd2c3d3912698906-76cd9812b17a6ce61d16c09471a38bc6-1781274341-1781263541&remote=no_check_ip", 
        category: "sports", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Eurosport_logo_2015.svg", 
        isLocal: true
    },
    { 
        id: "fast_sports_hd_local", 
        name: "FAST SPORTS HD (Local)", 
        url: "http://10.99.99.99:8082/FAST.SPORTS.HD/index.m3u8?token=f6ccc7d1ab50649c55de9f9c15f0d02e0245610a-bea448d817e2542469e2406a8c0d0db2-1781274566-1781263766&remote=no_check_ip", 
        category: "sports", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "geo_news_hd_local", 
        name: "GEO NEWS HD (Local)", 
        url: "http://10.99.99.99:8082/GEO.NEWS.HD/index.m3u8?token=cc08f8e3c7f319c649f43a8a1d0396b1b1ada41a-204e16cfeca53053f40987f54302bcc9-1781274575-1781263775&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "golf_sports_local", 
        name: "GOLF SPORTS (Local)", 
        url: "http://10.99.99.99:8082/GOLF.SPORTS/index.m3u8?token=dc2a25d5d1335bc3cf95d26136ebaa3469ed44ad-76338f1e65e685baae6c67a6f4020470-1781274463-1781263663&remote=no_check_ip", 
        category: "sports", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "gtv_local", 
        name: "GTV (Local)", 
        url: "http://10.99.99.99:8082/GAZI.TV.HD/index.m3u8?token=b5679c78895ba920d90a3e752ce4f06f407ec2fb-dcf648cd2b39786abd5b5469012a78d5-1781274406-1781263606&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Gazi_Television_%28GTV%29_logo.png", 
        isLocal: true
    },
    { 
        id: "history_tv_hd_local", 
        name: "HISTORY TV HD (Local)", 
        url: "http://10.99.99.99:8082/HISTORY.TV.18.HD/index.m3u8?token=86ba121a3509872ba25bd97ebe66630e7195990f-66c6d5195598b73b8a8403149a544cfc-1781274215-1781263415&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "hitz_music_local", 
        name: "HITZ MUSIC (Local)", 
        url: "http://10.99.99.99:8082/HITS.MUSIC.HD/index.m3u8?token=6e003042a840a976595ff91052c6b4013c39073c-99784072fe16dad668041e72d52ea435-1781274481-1781263681&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "hum_tv_local", 
        name: "HUM TV (Local)", 
        url: "http://10.99.99.99:8082/HUM.MASALA.TV/index.m3u8?token=9ec061789bd518967532bd4e7acc607106d6e68c-03ace5730acc9d9c7f58a55810cbc381-1781274572-1781263772&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "hungama_local", 
        name: "HUNGAMA (Local)", 
        url: "http://10.99.99.99:8082/HUNGAMA/index.m3u8?token=48da90bd5d8e43dd53cc1da17b76ac4797556286-010c6230467e652e86b1c201f0c28000-1781274380-1781263580&remote=no_check_ip", 
        category: "kids", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Hungama_TV_logo.svg", 
        isLocal: true
    },
    { 
        id: "independent_tv_local", 
        name: "INDEPENDENT TV (Local)", 
        url: "http://10.99.99.99:8082/INDEPENDENT.TV/index.m3u8?token=7111c5a7cdf040be8ef023210712756403027ee5-5e0aed7a911010ef4eda3cfdf076f62f-1781274520-1781263720&remote=no_check_ip", 
        category: "news", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/Independent_Television_Logo.svg", 
        isLocal: true
    },
    { 
        id: "jalsha_movies_hd_local", 
        name: "JALSHA MOVIES HD (Local)", 
        url: "http://10.99.99.99:8082/JALSHA.MOVIES.HD/index.m3u8?token=9635bd6af146a4ac325d6a05ad7d338374452692-d97580739fbbce44d2207bc30420b061-1781274261-1781263461&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "jamuna_tv_local", 
        name: "JAMUNA TV (Local)", 
        url: "http://10.99.99.99:8082/JAMUNA.TV/index.m3u8?token=ecaf5f2c937ed569a6fb99a3e73f3c99fa28430f-765f057dce7790f671a0e73938fad3e1-1781274516-1781263716&remote=no_check_ip", 
        category: "news", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/a/a6/Jamuna_TV_Logo.svg", 
        isLocal: true
    },
    { 
        id: "lotus_tv_local", 
        name: "LOTUS TV (Local)", 
        url: "http://10.99.99.99:8082/Lotus.TV.HD/index.m3u8?token=1813fd3015692ebfd16ee594594dbee766ac58dc-5393997eebe5a509abf301aec6dfccb2-1781274579-1781263779&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "love_nature_local", 
        name: "LOVE NATURE (Local)", 
        url: "http://10.99.99.99:8082/LOVE.NATURE.HD/index.m3u8?token=e9f140be34aa70fd3ff343577207c8c4778cdd98-acc1026823133c582dfce72dff37d9db-1781274467-1781263667&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "maasranga_hd_local", 
        name: "MAASRANGA HD (Local)", 
        url: "http://10.99.99.99:8082/MASRANGA.TV.HD/index.m3u8?token=9eecc6ca2d413345ed922bf46fadcb0756b10c79-d54800f4cb768d4bc39848b96242fa56-1781274522-1781263722&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/3/39/Maasranga_Television_Logo.jpg", 
        isLocal: true
    },
    { 
        id: "madani_tv_hd_local", 
        name: "MADANI TV HD (Local)", 
        url: "http://10.99.99.99:8082/MADANI.TV.HD/index.m3u8?token=b31799c6fa9205a3709acf09b47e1dc53cfdca2f-48956d8d157c05ca1d7b79a0ac1b65bb-1781274547-1781263747&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "mn_plus_local", 
        name: "MN PLUS (Local)", 
        url: "http://10.99.99.99:8082/MN.PLUS.HD/index.m3u8?token=80cb3573120491e7ea04c804d4186d41b57cae9b-eb954ec0beeec2a156dbdd5d0bb0e8cd-1781274323-1781263523&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "mnx_hd_local", 
        name: "MNX HD (Local)", 
        url: "http://10.99.99.99:8082/MNX.HD/index.m3u8?token=af9e29fbb26ff9e7863ca678bab028e9efc91dc0-2f31e7c18fdcc708040a79c9fbd8a502-1781274309-1781263509&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "movies_now_hd_local", 
        name: "MOVIES NOW HD (Local)", 
        url: "http://10.99.99.99:8082/MOVIES.NOW.HD/index.m3u8?token=8b30a205b81f1e7d6e417c1addfb9d36deb12df9-a87580c5c742f1448bba3e3106ee2e06-1781274339-1781263539&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "nagorik_local", 
        name: "NAGORIK (Local)", 
        url: "http://10.99.99.99:8082/NAGORIK.TV.HD/index.m3u8?token=9f61922715c503b5bafeaae455a61bfc4436c381-f19e0408b1db3aabe0625419c2140a82-1781274400-1781263600&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "natgeo_hd_local", 
        name: "NATGEO HD (Local)", 
        url: "http://10.99.99.99:8082/NATGEO.HD/index.m3u8?token=a53ab1b49c65042af4bd61af50a0bbf89d10da49-e929a7f2174f0cf5a21ea0005dfacfff-1781274281-1781263481&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/National_Geographic_logo.svg", 
        isLocal: true
    },
    { 
        id: "natgeo_wild_hd_local", 
        name: "NATGEO WILD HD (Local)", 
        url: "http://10.99.99.99:8082/NATGEO.WILD.HD/index.m3u8?token=1dc7b2d9a43aa8b41a2ea8e9815423384b2b591f-b95182f0788ecf3011600760c91efa3e-1781274269-1781263469&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/National_Geographic_Wild_logo.svg", 
        isLocal: true
    },
    { 
        id: "nick_local", 
        name: "NICK (Local)", 
        url: "http://10.99.99.99:8082/NICK/index.m3u8?token=86886bca07d2b4b5383ea4ab46c4b71d45e1a438-4147e252061ad7b1bb995c698753e0fe-1781274361-1781263561&remote=no_check_ip", 
        category: "kids", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Nickelodeon_2023_logo.svg", 
        isLocal: true
    },
    { 
        id: "nick_jr_local", 
        name: "NICK JR (Local)", 
        url: "http://10.99.99.99:8082/NICK.JR/index.m3u8?token=658c9af7ad1fa9a1a32f154297a6f08d93e65c76-0f939e11286782f5824223ae50afefb9-1781274383-1781263583&remote=no_check_ip", 
        category: "kids", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Nick_Jr._2023_logo.svg", 
        isLocal: true
    },
    { 
        id: "peace_tv_bangla_local", 
        name: "PEACE TV BANGLA (Local)", 
        url: "http://10.99.99.99:8082/PEACE.TV.BANGLA.HD/index.m3u8?token=021a06e269616faa8c7956e9ce135dee426e51e3-3d6bf9b3918400e38dbb6189f5650d67-1781274554-1781263754&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "pogo_local", 
        name: "POGO (Local)", 
        url: "http://10.99.99.99:8082/POGO/index.m3u8?token=435ed632eb5026ed5004a84617c205c1cd06521b-693e0ad0bfd69e85b5e52bec1964502c-1781274365-1781263565&remote=no_check_ip", 
        category: "kids", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Pogo_channel_logo.svg", 
        isLocal: true
    },
    { 
        id: "ptv_sports_hd_local", 
        name: "PTV SPORTS HD (Local)", 
        url: "http://10.99.99.99:8082/PTV-SPORTS-HD/index.m3u8?token=d9d0b91e02640ed3cf73f928912827189378bf0d-52ff1b8020d564af9da5200daf6bd44f-1781274582-1781263782&remote=no_check_ip", 
        category: "sports", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/e/e4/PTV_Sports.png", 
        isLocal: true
    },
    { 
        id: "romedy_now_local", 
        name: "ROMEDY NOW (Local)", 
        url: "http://10.99.99.99:8082/ROMEDY.NOW/index.m3u8?token=d8ce6049ac757cd8041bcca63517a5f131ce7f6b-644be2d6d7c1762062a9332155c7584d-1781274320-1781263520&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "sky_sports_cricket_local", 
        name: "SKY SPORTS CRICKET (Local)", 
        url: "http://10.99.99.99:8082/SKY.SPORTS.CRICKET/index.m3u8?token=e584e76711cc35ed57351db59c274bf37e518e71-c476755e02f68ba0c8fe2ed4b86ecaaa-1781274446-1781263646&remote=no_check_ip", 
        category: "sports", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/Sky_Sports_Cricket_logo.svg", 
        isLocal: true
    },
    { 
        id: "somoy_tv_local", 
        name: "SOMOY TV (Local)", 
        url: "http://10.99.99.99:8082/SOMOY.TV.HD/index.m3u8?token=6dad126818904aeee722cc5380f21203b4aec130-5052ae4b5f4ba13a2d98a6b4172022b5-1781274533-1781263733&remote=no_check_ip", 
        category: "news", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c4/SOMOY_TV_Logo.svg", 
        isLocal: true
    },
    { 
        id: "sonic_local", 
        name: "SONIC (Local)", 
        url: "http://10.99.99.99:8082/SONIC/index.m3u8?token=c5179a0d9e07ca753975a02eeb70da822478a0ac-69f9881487415bd28079984bbbe013a8-1781274359-1781263559&remote=no_check_ip", 
        category: "kids", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "sony_aat_local", 
        name: "SONY AAT (Local)", 
        url: "http://10.99.99.99:8082/SONY.AAT/index.m3u8?token=565540c22c94945d89d1ba1228472aee74a2aaed-deae2e6c393294b1d0b4514550e95559-1781274358-1781263558&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "sony_bbc_earth_hd_local", 
        name: "SONY BBC EARTH HD (Local)", 
        url: "http://10.99.99.99:8082/SONY.BBC.EARTH.HD/index.m3u8?token=33a148376325a7f2f25127408b9a1dcbcc6d8904-0daaa68cb73ff77b14f19f53cbfeb715-1781274174-1781263374&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "sony_ent_hd_local", 
        name: "SONY ENT HD (Local)", 
        url: "http://10.99.99.99:8082/SONY.ENT.HD/index.m3u8?token=8bcb73b788a26b00772eb4797c1f23f8becd0245-c6598c2d1526b8d829b7e8986b791648-1781274188-1781263388&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "sony_max_hd_local", 
        name: "SONY MAX HD (Local)", 
        url: "http://10.99.99.99:8082/SONY.MAX.HD/index.m3u8?token=0cdc049112875f9b5acb2b2e6702900d17a2e20b-2ab36408ab5fdf6f02be2859fb267ba8-1781274265-1781263465&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/d/db/Sony_Max_logo.png", 
        isLocal: true
    },
    { 
        id: "sony_pix_hd_local", 
        name: "SONY PIX HD (Local)", 
        url: "http://10.99.99.99:8082/SONY.PIX.HD/index.m3u8?token=425b9b68c0dbea5a4fa7223c82f777575a6ce706-b5592893cafca190e6df22320933e90f-1781274307-1781263507&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "sony_sports_1_hd_local", 
        name: "SONY SPORTS 1 HD (Local)", 
        url: "http://10.99.99.99:8082/SONY.SPORTS.1HD/index.m3u8?token=1f190a7e35f2d7482e5e8ce0171e731429535166-38abe7e54c5fa484c6641004b35ced77-1781274509-1781263709&remote=no_check_ip", 
        category: "sports", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Sony_Sports_Network_Logo.svg", 
        isLocal: true
    },
    { 
        id: "sony_sports_2_hd_local", 
        name: "SONY SPORTS 2 HD (Local)", 
        url: "http://10.99.99.99:8082/SONY.SPORTS2.HD/index.m3u8?token=aba50bdba44159b2c68cfa9c027eb78434bcfff4-2e35a6e844e013bc6e5c168dcea81085-1781274299-1781263499&remote=no_check_ip", 
        category: "sports", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Sony_Sports_Network_Logo.svg", 
        isLocal: true
    },
    { 
        id: "sony_sports_3_local", 
        name: "SONY SPORTS 3 (Local)", 
        url: "http://10.99.99.99:8082/SONY.SPORTS.3/index.m3u8?token=a686b25fa51fce1e5f7d6f4ce5cd047fcdcea10b-3089bd447de690df8a8c1ea7b842295e-1781274303-1781263503&remote=no_check_ip", 
        category: "sports", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Sony_Sports_Network_Logo.svg", 
        isLocal: true
    },
    { 
        id: "sony_sports_4_local", 
        name: "SONY SPORTS 4 (Local)", 
        url: "http://10.99.99.99:8082/SONY.SPORTS.4/index.m3u8?token=58f687d4e68c2c16a3da6b8c20231c4fe73d9495-565027879341644b8b48fbe538aa192b-1781274502-1781263702&remote=no_check_ip", 
        category: "sports", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Sony_Sports_Network_Logo.svg", 
        isLocal: true
    },
    { 
        id: "sony_sports_5_hd_local", 
        name: "SONY SPORTS 5 HD (Local)", 
        url: "http://10.99.99.99:8082/SONY-SPORTS.5HD/index.m3u8?token=5782313abd32a8c175c049a414153e24843d80fe-7ea7be5a9133ef8057a0a013fdedac59-1781274633-1781263833&remote=no_check_ip", 
        category: "sports", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Sony_Sports_Network_Logo.svg", 
        isLocal: true
    },
    { 
        id: "sony_yay_local", 
        name: "SONY YAY (Local)", 
        url: "http://10.99.99.99:8082/SONY.YAY/index.m3u8?token=9f98d82d98bfbb05da43df1d4dcb4e376a754a31-29f46a8d4537c6fdb0a74b0a01f34071-1781274585-1781263785&remote=no_check_ip", 
        category: "kids", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "tnt_sports_local", 
        name: "TNT SPORTS (Local)", 
        url: "http://10.99.99.99:8082/TNT.SPORTS/index.m3u8?token=5fdd6810124afb47072faf72a322794d7e916120-825ce4c56bfcf6e6850598eb6df08ca1-1781274588-1781263788&remote=no_check_ip", 
        category: "sports", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "ssc_sports_local", 
        name: "SSC SPORTS (Local)", 
        url: "http://10.99.99.99:8082/SSC.SPORTS.1.HD/index.m3u8?token=8226a42313859ace14a0b794a6d212d9944957bf-652bd27ecb9defa1fbc0e74ee64ef538-1781274612-1781263812&remote=no_check_ip", 
        category: "sports", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "willow_hd_local", 
        name: "WILLOW HD (Local)", 
        url: "http://10.99.99.99:8082/WILLOW.HD/index.m3u8?token=2fb020cce9d796c146aa870dc16ea635486d3cc2-3ad2d4beb18b98352055aa8f5e2e8e95-1781274626-1781263826&remote=no_check_ip", 
        category: "sports", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Willow_TV_logo.svg", 
        isLocal: true
    },
    { 
        id: "ssc_sports_5_hd_local", 
        name: "SSC SPORTS 5 HD (Local)", 
        url: "http://10.99.99.99:8082/SSC.SPORTS.5.HD/index.m3u8?token=ded57c07a6c92fdc2730342068de963d0803e35f-2290d7f5cf7883fff073bf5c27b8690c-1781274642-1781263842&remote=no_check_ip", 
        category: "sports", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "star_bharat_hd_local", 
        name: "STAR BHARAT HD (Local)", 
        url: "http://10.99.99.99:8082/STAR.BHARAT.HD/index.m3u8?token=7c361d851e4da72c5764ccabbbef07bd7cab53c8-186817e6022fa43e95218a25c36db38e-1781274629-1781263829&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "star_gold_2_hd_local", 
        name: "STAR GOLD 2 HD (Local)", 
        url: "http://10.99.99.99:8082/STAR.GOLD2.HD/index.m3u8?token=ce33ef8688115a6eee0096a384d9c56c8f554b3f-8afbba785af61559cf05e29d7c51a7e6-1781274478-1781263678&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "star_gold_hd_local", 
        name: "STAR GOLD HD (Local)", 
        url: "http://10.99.99.99:8082/STAR.GOLD.HD/index.m3u8?token=512213caf994fb1bbb88536064717434c436546f-c7dc0f103b7e7b9066b483dbc4b0d096-1781274263-1781263463&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "star_gold_select_hd_local", 
        name: "STAR GOLD SELECT HD (Local)", 
        url: "http://10.99.99.99:8082/STAR.GOLD.SEL.HD/index.m3u8?token=9e589ac385794e3a6ceb16263dd0e3ee9ca4d661-0cf919e335d324168986b4ad2b8094b6-1781274486-1781263686&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "star_jalsha_hd_local", 
        name: "STAR JALSHA HD (Local)", 
        url: "http://10.99.99.99:8082/STAR.JALSHA.HD/index.m3u8?token=7c3a889557fdc06a3a50dc42d567730aef8db47e-26a5c579effbcc2b4ad6b41103f20330-1781274220-1781263420&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/4/4e/Star_Jalsha_logo.svg", 
        isLocal: true
    },
    { 
        id: "star_movies_hd_local", 
        name: "STAR MOVIES HD (Local)", 
        url: "http://10.99.99.99:8082/STAR.MOVIES.HD/index.m3u8?token=e92896901df5e01e3054bf8d50fe67951c821ea8-8fffdaf9fdb2e849bace288f69339e6b-1781274327-1781263527&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "star_movies_select_hd_local", 
        name: "STAR MOVIES SELECT HD (Local)", 
        url: "http://10.99.99.99:8082/STAR.MOVIES.SEL.HD/index.m3u8?token=b8637f74a0bebe83d69cfb9947e56ce237a5d7e1-64d76cd26f91940a3a7e95aee868f0b8-1781274284-1781263484&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "star_plus_hd_local", 
        name: "STAR PLUS HD (Local)", 
        url: "http://10.99.99.99:8082/STAR.PLUS.HD/index.m3u8?token=3900f692ac603965e7c63bdfb5cf6128deabd580-3be59308b5493adc927efcddddde5c22-1781274280-1781263480&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Star_Plus_logo.svg", 
        isLocal: true
    },
    { 
        id: "star_select_1_hd_local", 
        name: "STAR SELECT 1 HD (Local)", 
        url: "http://10.99.99.99:8082/STAR.SPORTS-SEL1.HD/index.m3u8?token=58c4ee9069c2cc1faafd428f7b5be909db641597-2e3ee26448cc6a845cf3ee2da9082695-1781274286-1781263486&remote=no_check_ip", 
        category: "sports", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/2/22/Star_Sports_Network_logo.png", 
        isLocal: true
    },
    { 
        id: "star_sports_1_hd_local", 
        name: "STAR SPORTS 1 HD (Local)", 
        url: "http://10.99.99.99:8082/STAR.SPORTS1.HD/index.m3u8?token=87f6df0caa4bdafb388b57966832ae686c8059b3-f32f372a8d1e5c483bb4e517703bf63e-1781274165-1781263365&remote=no_check_ip", 
        category: "sports", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/2/22/Star_Sports_Network_logo.png", 
        isLocal: true
    },
    { 
        id: "star_sports_2_hd_local", 
        name: "STAR SPORTS 2 HD (Local)", 
        url: "http://10.99.99.99:8082/STAR.SPORTS2.HD/index.m3u8?token=3af3009c82c3acc509426363cf1520e0ad6a51ba-aac3730a53d1b112a28e1bb83eba86be-1781274167-1781263367&remote=no_check_ip", 
        category: "sports", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/2/22/Star_Sports_Network_logo.png", 
        isLocal: true
    },
    { 
        id: "star_sports_3_local", 
        name: "STAR SPORTS 3 (Local)", 
        url: "http://10.99.99.99:8082/STAR-SPORTS.3/index.m3u8?token=1be41e07b4c9edde6805c45638e3a4952c0aa8f3-780f208e0924c32d21a8e476c52c4381-1781274305-1781263505&remote=no_check_ip", 
        category: "sports", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/2/22/Star_Sports_Network_logo.png", 
        isLocal: true
    },
    { 
        id: "star_sports_select_2_hd_local", 
        name: "STAR SPORTS SELECT 2 HD (Local)", 
        url: "http://10.99.99.99:8082/STAR.SPORTS.SEL.2.HD/index.m3u8?token=600399cbfd2c69f0ed0b21ba8145a5518f574f5c-4775b4085f4da0c929ee68d3ec793b1f-1781274217-1781263417&remote=no_check_ip", 
        category: "sports", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/en/2/22/Star_Sports_Network_logo.png", 
        isLocal: true
    },
    { 
        id: "sun_bangla_hd_local", 
        name: "SUN BANGLA HD (Local)", 
        url: "http://10.99.99.99:8082/SUN.BANGLA.HD/index.m3u8?token=6cf87ea1a4c25c7ea162f009fc02d77112ff69e8-4b6188f111ad7b39c8c46b84aa5f82ab-1781274218-1781263418&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "super_cricket_hd_local", 
        name: "SUPER CRICKET HD (Local)", 
        url: "http://10.99.99.99:8082/SUPER.CRICKET.HD/index.m3u8?token=44cb05d0fe392ff25e0656e7904db25a1ae91040-f1ff9f36b15a5aeafdd849fa3cbf465c-1781274385-1781263585&remote=no_check_ip", 
        category: "sports", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "super_hungama_local", 
        name: "SUPER HUNGAMA (Local)", 
        url: "http://10.99.99.99:8082/SUPER.HUNGAMA/index.m3u8?token=5b4fe5a359c62b124d39aadd1b5485625e1cf9c5-ef3b15e29b0675f9d2b93e16fe040b53-1781274511-1781263711&remote=no_check_ip", 
        category: "kids", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "t_sports_local", 
        name: "T SPORTS (Local)", 
        url: "http://10.99.99.99:8082/T-SPORTS-HD/index.m3u8?token=4b274ec36b497935b5e7ccdbf386f0c6b60f128f-40974efb640df540e90da79cd1bb4f3e-1781274163-1781263363&remote=no_check_ip", 
        category: "sports", 
        quality: "SD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/T_Sports_logo.svg", 
        isLocal: true
    },
    { 
        id: "tlc_hd_local", 
        name: "TLC HD (Local)", 
        url: "http://10.99.99.99:8082/TLC.HD/index.m3u8?token=3e555f103f234a0f53f6a58b54f24378bec05e59-dc3df302f3905cef3cd89a7aae791042-1781274185-1781263385&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "travel_xp_local", 
        name: "TRAVEL XP (Local)", 
        url: "http://10.99.99.99:8082/TRAVELXP.HD/index.m3u8?token=4501a347e25af19863ef647ea0d523a68efd89c4-dedd696fca37d8630ace2cd1dfc3807b-1781274437-1781263637&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "utshov_gold_local", 
        name: "UTSHOV GOLD (Local)", 
        url: "http://10.99.99.99:8082/UTSHOV.GOLD/index.m3u8?token=b86fac6722391fa690c257d4a5e3228bb74dd2ad-1abd1e9e7c1a84e9ba841705b6296d51-1781274439-1781263639&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "zee_bangla_cinema_local", 
        name: "ZEE BANGLA CINEMA (Local)", 
        url: "http://10.99.99.99:8082/ZEE.BANGLA.CINEMA/index.m3u8?token=107319eddd2d7d5825d652a58713b9f7b41bf46b-320823f2ad4598ad11ae808dd0594ccf-1781274346-1781263546&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "zee_bangla_hd_local", 
        name: "ZEE BANGLA HD (Local)", 
        url: "http://10.99.99.99:8082/ZEE.BANGLA.HD/index.m3u8?token=c13165dfe11f5f9d1a10caefab2844907757c713-3e072dfc247cd81cde076c74016b22ce-1781274214-1781263414&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Zee_Bangla_logo.svg", 
        isLocal: true
    },
    { 
        id: "zee_cafe_hd_local", 
        name: "ZEE CAFE HD (Local)", 
        url: "http://10.99.99.99:8082/ZEE.CAFE.HD/index.m3u8?token=8dc4c617245f6994171d3bda2b7a0fb82d488760-ec10e61edeadc6af6b65ee8f452708ab-1781274326-1781263526&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "zee_cinema_hd_local", 
        name: "ZEE CINEMA HD (Local)", 
        url: "http://10.99.99.99:8082/ZEE.CINEMA.HD/index.m3u8?token=b73c05ee6957a1e8872263d0fb0aba66d61909ec-d907ca6ea16c8b8ac230b8883e3dddf8-1781274194-1781263394&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "zee_tv_hd_local", 
        name: "ZEE TV HD (Local)", 
        url: "http://10.99.99.99:8082/ZEE.TV.HD/index.m3u8?token=7e020f75c1b53e4a7cc4db660af147f56765b48a-f1571d01e2c8bb30db9b92085126820b-1781274176-1781263376&remote=no_check_ip", 
        category: "tv", 
        quality: "HD", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zee_TV_logo.svg", 
        isLocal: true
    },
    { 
        id: "zing_local", 
        name: "ZING (Local)", 
        url: "http://10.99.99.99:8082/ZING.MUSIC/index.m3u8?token=ccdbb38672fcb5d5152f5a967c150c9ff260ab37-82f3f4d2321b8fa2230de03fb05476de-1781274387-1781263587&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    },
    { 
        id: "zoom_local", 
        name: "ZOOM (Local)", 
        url: "http://10.99.99.99:8082/ZOOM.MUSIC/index.m3u8?token=a987b4167dd7425f96e86f8ff0ebc4eb79a1e667-e5ef45b4d49d5dc93bf7f7df0e34088a-1781274344-1781263544&remote=no_check_ip", 
        category: "tv", 
        quality: "SD", 
        logo: "", 
        isLocal: true
    }
];

// FIFA World Cup schedule data list with official dates in local timezone (+06:00)
const scheduleMatches = [
    {
        id: "fifa-1",
        teamA: "Mexico",
        teamB: "South Africa",
        flagA: "🇲🇽",
        flagB: "🇿🇦",
        date: "2026-06-12T01:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-2",
        teamA: "South Korea",
        teamB: "Czechia",
        flagA: "🇰🇷",
        flagB: "🇨🇿",
        date: "2026-06-12T08:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-3",
        teamA: "Canada",
        teamB: "Bosnia & H.",
        flagA: "🇨🇦",
        flagB: "🇧🇦",
        date: "2026-06-13T01:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-4",
        teamA: "USA",
        teamB: "Paraguay",
        flagA: "🇺🇸",
        flagB: "🇵🇾",
        date: "2026-06-13T07:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-5",
        teamA: "Qatar",
        teamB: "Switzerland",
        flagA: "🇶🇦",
        flagB: "🇨🇭",
        date: "2026-06-14T01:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-6",
        teamA: "Brazil",
        teamB: "Morocco",
        flagA: "🇧🇷",
        flagB: "🇲🇦",
        date: "2026-06-14T04:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-7",
        teamA: "Haiti",
        teamB: "Scotland",
        flagA: "🇭🇹",
        flagB: "🏴\u200d󠁧\u200d󠁢\u200d󠁳\u200d󠁣\u200d󠁴\u200d󠁿",
        date: "2026-06-14T07:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-8",
        teamA: "Australia",
        teamB: "Turkey",
        flagA: "🇦🇺",
        flagB: "🇹🇷",
        date: "2026-06-14T10:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-9",
        teamA: "Germany",
        teamB: "Curaçao",
        flagA: "🇩🇪",
        flagB: "🇨🇼",
        date: "2026-06-14T23:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-10",
        teamA: "Netherlands",
        teamB: "Japan",
        flagA: "🇳🇱",
        flagB: "🇯🇵",
        date: "2026-06-15T02:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-11",
        teamA: "Ivory Coast",
        teamB: "Ecuador",
        flagA: "🇨🇮",
        flagB: "🇪🇨",
        date: "2026-06-15T05:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-12",
        teamA: "Sweden",
        teamB: "Tunisia",
        flagA: "🇸🇪",
        flagB: "🇹🇳",
        date: "2026-06-15T08:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-13",
        teamA: "Spain",
        teamB: "Cabo Verde",
        flagA: "🇪🇸",
        flagB: "🇨🇻",
        date: "2026-06-15T22:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-14",
        teamA: "Belgium",
        teamB: "Egypt",
        flagA: "🇧🇪",
        flagB: "🇪🇬",
        date: "2026-06-16T01:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-15",
        teamA: "Saudi Arabia",
        teamB: "Uruguay",
        flagA: "🇸🇦",
        flagB: "🇺🇾",
        date: "2026-06-16T04:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-16",
        teamA: "Iran",
        teamB: "New Zealand",
        flagA: "🇮🇷",
        flagB: "🇳🇿",
        date: "2026-06-16T07:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-17",
        teamA: "France",
        teamB: "Senegal",
        flagA: "🇫🇷",
        flagB: "🇸🇳",
        date: "2026-06-17T01:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-18",
        teamA: "Iraq",
        teamB: "Norway",
        flagA: "🇮🇶",
        flagB: "🇳🇴",
        date: "2026-06-17T04:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-19",
        teamA: "Argentina",
        teamB: "Algeria",
        flagA: "🇦🇷",
        flagB: "🇩🇿",
        date: "2026-06-17T07:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-20",
        teamA: "Austria",
        teamB: "Jordan",
        flagA: "🇦🇹",
        flagB: "🇯🇴",
        date: "2026-06-17T10:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-21",
        teamA: "Portugal",
        teamB: "DR Congo",
        flagA: "🇵🇹",
        flagB: "🇨🇩",
        date: "2026-06-17T23:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-22",
        teamA: "England",
        teamB: "Croatia",
        flagA: "🏴\u200d󠁧\u200d󠁢\u200d󠁥\u200d󠁮\u200d󠁧\u200d󠁿",
        flagB: "🇭🇷",
        date: "2026-06-18T02:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-23",
        teamA: "Ghana",
        teamB: "Panama",
        flagA: "🇬🇭",
        flagB: "🇵🇦",
        date: "2026-06-18T05:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-24",
        teamA: "Uzbekistan",
        teamB: "Colombia",
        flagA: "🇺🇿",
        flagB: "🇨🇴",
        date: "2026-06-18T08:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-25",
        teamA: "Czechia",
        teamB: "South Africa",
        flagA: "🇨🇿",
        flagB: "🇿🇦",
        date: "2026-06-18T22:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-26",
        teamA: "Switzerland",
        teamB: "Bosnia & H.",
        flagA: "🇨🇭",
        flagB: "🇧🇦",
        date: "2026-06-19T01:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-27",
        teamA: "Canada",
        teamB: "Qatar",
        flagA: "🇨🇦",
        flagB: "🇶🇦",
        date: "2026-06-19T04:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-28",
        teamA: "Mexico",
        teamB: "South Korea",
        flagA: "🇲🇽",
        flagB: "🇰🇷",
        date: "2026-06-19T07:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-29",
        teamA: "USA",
        teamB: "Australia",
        flagA: "🇺🇸",
        flagB: "🇦🇺",
        date: "2026-06-20T01:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-30",
        teamA: "Scotland",
        teamB: "Morocco",
        flagA: "🏴\u200d󠁧\u200d󠁢\u200d󠁳\u200d󠁣\u200d󠁴\u200d󠁿",
        flagB: "🇲🇦",
        date: "2026-06-20T04:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-31",
        teamA: "Brazil",
        teamB: "Haiti",
        flagA: "🇧🇷",
        flagB: "🇭🇹",
        date: "2026-06-20T06:30:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-32",
        teamA: "Türkiye",
        teamB: "Paraguay",
        flagA: "🇹🇷",
        flagB: "🇵🇾",
        date: "2026-06-20T09:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-33",
        teamA: "Netherlands",
        teamB: "Sweden",
        flagA: "🇳🇱",
        flagB: "🇸🇪",
        date: "2026-06-20T23:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-34",
        teamA: "Germany",
        teamB: "Ivory Coast",
        flagA: "🇩🇪",
        flagB: "🇨🇮",
        date: "2026-06-21T02:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-35",
        teamA: "Ecuador",
        teamB: "Curaçao",
        flagA: "🇪🇨",
        flagB: "🇨🇼",
        date: "2026-06-21T06:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-36",
        teamA: "Tunisia",
        teamB: "Japan",
        flagA: "🇹🇳",
        flagB: "🇯🇵",
        date: "2026-06-21T10:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-37",
        teamA: "Spain",
        teamB: "Saudi Arabia",
        flagA: "🇪🇸",
        flagB: "🇸🇦",
        date: "2026-06-21T22:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-38",
        teamA: "Belgium",
        teamB: "Iran",
        flagA: "🇧🇪",
        flagB: "🇮🇷",
        date: "2026-06-22T01:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-39",
        teamA: "Uruguay",
        teamB: "Cabo Verde",
        flagA: "🇺🇾",
        flagB: "🇨🇻",
        date: "2026-06-22T04:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-40",
        teamA: "New Zealand",
        teamB: "Egypt",
        flagA: "🇳🇿",
        flagB: "🇪🇬",
        date: "2026-06-22T07:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-41",
        teamA: "Argentina",
        teamB: "Austria",
        flagA: "🇦🇷",
        flagB: "🇦🇹",
        date: "2026-06-22T23:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-42",
        teamA: "France",
        teamB: "Iraq",
        flagA: "🇫🇷",
        flagB: "🇮🇶",
        date: "2026-06-23T03:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-43",
        teamA: "Norway",
        teamB: "Senegal",
        flagA: "🇳🇴",
        flagB: "🇸🇳",
        date: "2026-06-23T06:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-44",
        teamA: "Jordan",
        teamB: "Algeria",
        flagA: "🇯🇴",
        flagB: "🇩🇿",
        date: "2026-06-23T09:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-45",
        teamA: "Portugal",
        teamB: "Uzbekistan",
        flagA: "🇵🇹",
        flagB: "🇺🇿",
        date: "2026-06-23T23:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-46",
        teamA: "England",
        teamB: "Ghana",
        flagA: "🏴\u200d󠁧\u200d󠁢\u200d󠁥\u200d󠁮\u200d󠁧\u200d󠁿",
        flagB: "🇬🇭",
        date: "2026-06-24T02:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-47",
        teamA: "Panama",
        teamB: "Croatia",
        flagA: "🇵🇦",
        flagB: "🇭🇷",
        date: "2026-06-24T05:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-48",
        teamA: "Colombia",
        teamB: "DR Congo",
        flagA: "🇨🇴",
        flagB: "🇨🇩",
        date: "2026-06-24T08:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-49",
        teamA: "Switzerland",
        teamB: "Canada",
        flagA: "🇨🇭",
        flagB: "🇨🇦",
        date: "2026-06-25T01:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-50",
        teamA: "Bosnia & H.",
        teamB: "Qatar",
        flagA: "🇧🇦",
        flagB: "🇶🇦",
        date: "2026-06-25T01:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-51",
        teamA: "Morocco",
        teamB: "Haiti",
        flagA: "🇲🇦",
        flagB: "🇭🇹",
        date: "2026-06-25T04:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-52",
        teamA: "Scotland",
        teamB: "Brazil",
        flagA: "🏴\u200d󠁧\u200d󠁢\u200d󠁳\u200d󠁣\u200d󠁴\u200d󠁿",
        flagB: "🇧🇷",
        date: "2026-06-25T04:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-53",
        teamA: "South Africa",
        teamB: "South Korea",
        flagA: "🇿🇦",
        flagB: "🇰🇷",
        date: "2026-06-25T07:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-54",
        teamA: "Czechia",
        teamB: "Mexico",
        flagA: "🇨🇿",
        flagB: "🇲🇽",
        date: "2026-06-25T07:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-55",
        teamA: "Curaçao",
        teamB: "Ivory Coast",
        flagA: "🇨🇼",
        flagB: "🇨🇮",
        date: "2026-06-26T02:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-56",
        teamA: "Ecuador",
        teamB: "Germany",
        flagA: "🇪🇨",
        flagB: "🇩🇪",
        date: "2026-06-26T02:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-57",
        teamA: "Tunisia",
        teamB: "Netherlands",
        flagA: "🇹🇳",
        flagB: "🇳🇱",
        date: "2026-06-26T05:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-58",
        teamA: "Japan",
        teamB: "Sweden",
        flagA: "🇯🇵",
        flagB: "🇸🇪",
        date: "2026-06-26T05:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-59",
        teamA: "Türkiye",
        teamB: "USA",
        flagA: "🇹🇷",
        flagB: "🇺🇸",
        date: "2026-06-26T08:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-60",
        teamA: "Paraguay",
        teamB: "Australia",
        flagA: "🇵🇾",
        flagB: "🇦🇺",
        date: "2026-06-26T08:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-61",
        teamA: "Norway",
        teamB: "France",
        flagA: "🇳🇴",
        flagB: "🇫🇷",
        date: "2026-06-27T01:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-62",
        teamA: "Senegal",
        teamB: "Iraq",
        flagA: "🇸🇳",
        flagB: "🇮🇶",
        date: "2026-06-27T01:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-63",
        teamA: "Cabo Verde",
        teamB: "Saudi Arabia",
        flagA: "🇨🇻",
        flagB: "🇸🇦",
        date: "2026-06-27T06:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-64",
        teamA: "Uruguay",
        teamB: "Spain",
        flagA: "🇺🇾",
        flagB: "🇪🇸",
        date: "2026-06-27T06:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-65",
        teamA: "New Zealand",
        teamB: "Belgium",
        flagA: "🇳🇿",
        flagB: "🇧🇪",
        date: "2026-06-27T09:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-66",
        teamA: "Egypt",
        teamB: "Iran",
        flagA: "🇪🇬",
        flagB: "🇮🇷",
        date: "2026-06-27T09:00:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-67",
        teamA: "Panama",
        teamB: "England",
        flagA: "🇵🇦",
        flagB: "🏴\u200d󠁧\u200d󠁢\u200d󠁥\u200d󠁮\u200d󠁧\u200d󠁿",
        date: "2026-06-28T03:00:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-68",
        teamA: "Croatia",
        teamB: "Ghana",
        flagA: "🇭🇷",
        flagB: "🇬🇭",
        date: "2026-06-28T03:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-69",
        teamA: "Colombia",
        teamB: "Portugal",
        flagA: "🇨🇴",
        flagB: "🇵🇹",
        date: "2026-06-28T05:30:00+06:00",
        channelId: "tsports"
    },
    {
        id: "fifa-70",
        teamA: "DR Congo",
        teamB: "Uzbekistan",
        flagA: "🇨🇩",
        flagB: "🇺🇿",
        date: "2026-06-28T05:30:00+06:00",
        channelId: "gtv"
    },
    {
        id: "fifa-71",
        teamA: "Algeria",
        teamB: "Austria",
        flagA: "🇩🇿",
        flagB: "🇦🇹",
        date: "2026-06-28T08:00:00+06:00",
        channelId: "ptvsports"
    },
    {
        id: "fifa-72",
        teamA: "Jordan",
        teamB: "Argentina",
        flagA: "🇯🇴",
        flagB: "🇦🇷",
        date: "2026-06-28T08:00:00+06:00",
        channelId: "tsports"
    }
];

// DOM Elements
const drawerScheduleList = document.getElementById('drawer-schedule-list');
const scheduleDrawer = document.getElementById('schedule-drawer');
const drawerOverlay = document.getElementById('drawer-overlay');
const channelGrid = document.getElementById('channel-grid');
const video = document.getElementById('video');
const youtubePlayer = document.getElementById('youtube-player');
const mixedContentModal = document.getElementById('mixed-content-modal');
const videoWrapper = document.getElementById('video-wrapper');
const playerOverlay = document.getElementById('player-overlay');
const playerInfo = document.getElementById('player-info');
const currentTitle = document.getElementById('current-title');
const searchInput = document.getElementById('search');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const volumeIndicator = document.getElementById('volume-indicator');

let currentHls = null;
let currentChannelId = null;
let selectedCategory = 'all';
let favorites = JSON.parse(localStorage.getItem('iptv_favorites')) || [];

// Initialize App
function initApp() {
    // Initial render
    filterByCategory('all');
    renderDrawerSchedule();
}

// Render Grid Cards
function renderChannelGrid(filteredChannels) {
    channelGrid.innerHTML = '';
    
    if (filteredChannels.length === 0) {
        channelGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <p style="font-size: 16px; margin-bottom: 8px;">কোনো চ্যানেল পাওয়া যায়নি</p>
            </div>
        `;
        return;
    }
    
    filteredChannels.forEach(ch => {
        const isFav = favorites.includes(ch.id);
        const card = document.createElement('div');
        card.className = `channel-card ${currentChannelId === ch.id ? 'playing' : ''}`;
        card.setAttribute('data-id', ch.id);
        
        let iconClass = 'tv-icon';
        if (ch.category === 'sports') iconClass = 'sports-icon';
        if (ch.category === 'news') iconClass = 'news-icon';
        
        let logoContent = ch.logo;
        if (ch.logo && (ch.logo.startsWith('http://') || ch.logo.startsWith('https://'))) {
            const initials = ch.name.split(' ').map(w => w[0]).join('').substring(0, 3).toUpperCase();
            logoContent = `<img src="${ch.logo}" alt="${ch.name}" class="channel-logo-img" onerror="this.style.display='none';this.parentNode.innerHTML='<span style=&quot;font-size:14px;font-weight:700;letter-spacing:1px;color:#fff;&quot;>${initials}</span>';">`;
        }
        
        card.innerHTML = `
            <div class="card-top">
                <div class="card-icon ${iconClass}">${logoContent}</div>
                <div class="badge-group" style="display: flex; gap: 6px;">
                    <div class="card-badge ${ch.isLocal ? 'local-badge' : 'global-badge'}">${ch.isLocal ? '🏠 Local' : '🌐 Global'}</div>
                    <div class="card-badge ${ch.quality.toLowerCase()}">${ch.quality}</div>
                </div>
            </div>
            <div class="card-name">${ch.name}</div>
            <div class="card-category">${ch.category.toUpperCase()} • LIVE</div>
            <span class="card-fav-icon ${isFav ? 'starred' : ''}" onclick="toggleFavorite(event, '${ch.id}')">★</span>
        `;
        
        card.onclick = (e) => {
            if (e.target.classList.contains('card-fav-icon')) return;
            playChannel(ch.id);
        };
        channelGrid.appendChild(card);
    });
}

// Helper to analyze match date against current system clock
function getMatchTimingStatus(dateString) {
    const matchDate = new Date(dateString);
    const today = new Date();
    
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    
    const isToday = matchDate.getFullYear() === today.getFullYear() &&
                    matchDate.getMonth() === today.getMonth() &&
                    matchDate.getDate() === today.getDate();
                    
    const isTomorrow = matchDate.getFullYear() === tomorrow.getFullYear() &&
                       matchDate.getMonth() === tomorrow.getMonth() &&
                       matchDate.getDate() === tomorrow.getDate();
                       
    // Match is live if start time has passed and it's within 2 hours 30 mins
    const currentTime = today.getTime();
    const matchTime = matchDate.getTime();
    const matchEndTime = matchTime + (2.5 * 60 * 60 * 1000); // 2.5 hours
    const isLive = currentTime >= matchTime && currentTime <= matchEndTime;
    
    // Format Time String nicely
    const hours = matchDate.getHours();
    const minutes = matchDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const timeStr = `${formattedHours}:${formattedMinutes} ${ampm}`;
    
    let timeLabel = '';
    if (isToday) timeLabel = `Today, ${timeStr}`;
    else if (isTomorrow) timeLabel = `Tomorrow, ${timeStr}`;
    else {
        const day = matchDate.getDate();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[matchDate.getMonth()];
        timeLabel = `${day} ${month}, ${timeStr}`;
    }
    
    return {
        isToday,
        isTomorrow,
        isLive,
        timeLabel,
        showInSchedule: isToday || isTomorrow
    };
}

// Render FIFA World Cup Schedule in Sidebar (Filtered to show only Today & Tomorrow matches)
function renderDrawerSchedule() {
    drawerScheduleList.innerHTML = '';
    
    // Filter matches
    const filteredMatches = scheduleMatches.filter(match => {
        const timing = getMatchTimingStatus(match.date);
        return timing.showInSchedule;
    });
    
    if (filteredMatches.length === 0) {
        drawerScheduleList.innerHTML = `
            <div style="text-align: center; padding: 20px; color: var(--text-muted); font-size: 13px;">
                আজকে বা আগামীকাল কোনো ম্যাচ নেই
            </div>
        `;
        return;
    }
    
    // Sort matches: Live first, then by date
    filteredMatches.sort((a, b) => {
        const tA = getMatchTimingStatus(a.date);
        const tB = getMatchTimingStatus(b.date);
        if (tA.isLive && !tB.isLive) return -1;
        if (!tA.isLive && tB.isLive) return 1;
        return new Date(a.date) - new Date(b.date);
    });
    
    filteredMatches.forEach(match => {
        const timing = getMatchTimingStatus(match.date);
        const item = document.createElement('div');
        item.className = `drawer-match-item ${timing.isLive ? 'live' : ''}`;
        
        item.innerHTML = `
            <div class="match-top">
                <span class="match-label">FIFA WORLD CUP</span>
                ${timing.isLive ? '<span class="match-live-tag">🔴 LIVE</span>' : ''}
            </div>
            <div class="match-teams">
                <span>${match.flagA} ${match.teamA}</span>
                <span class="vs">VS</span>
                <span>${match.teamB} ${match.flagB}</span>
            </div>
            <div class="match-bottom">
                <span>${timing.timeLabel}</span>
                <span class="match-action">${timing.isLive ? 'Watch Live ⚡' : 'Tune Channel'}</span>
            </div>
        `;
        
        item.onclick = () => {
            playChannel(match.channelId);
            toggleScheduleDrawer(false); // Auto close drawer after channel select
        };
        
        drawerScheduleList.appendChild(item);
    });
}

// Play Selected Channel (with Autoplay Mute handling and YouTube Player fallback)
function playChannel(id, isAutoplay = false) {
    const channel = channels.find(c => c.id === id);
    if (!channel) return;
    
    currentChannelId = id;
    
    // Show the player section
    const playerSection = document.getElementById('player-section');
    if (playerSection) {
        playerSection.style.display = 'block';
    }
    
    // Toggle Network Info Banner (only show for Local channels)
    const netBanner = document.getElementById('network-info-banner');
    if (netBanner) {
        if (channel.isLocal) {
            netBanner.style.display = 'flex';
        } else {
            netBanner.style.display = 'none';
        }
    }
    
    // Hide the unmute overlay notice
    const unmuteOverlay = document.getElementById('unmute-overlay');
    if (unmuteOverlay) unmuteOverlay.style.display = 'none';
    
    // Update Active states in UI
    document.querySelectorAll('.channel-card').forEach(card => {
        if (card.getAttribute('data-id') === id) card.classList.add('playing');
        else card.classList.remove('playing');
    });
    
    // Show player elements, hide overlay
    playerOverlay.classList.add('hidden');
    playerInfo.style.display = 'flex';
    currentTitle.innerText = channel.name;
    
    // Reset/Destroy old HLS instance
    if (currentHls) {
        currentHls.destroy();
        currentHls = null;
    }
    video.pause();
    
    if (channel.isYoutube) {
        // Hide standard video, show YouTube player
        video.style.display = 'none';
        youtubePlayer.style.display = 'block';
        youtubePlayer.src = channel.url;
        
        // Hide standard custom controls since YouTube handles them natively
        document.querySelector('.player-controls').style.display = 'none';
    } else {
        // Show standard video, hide YouTube player
        video.style.display = 'block';
        youtubePlayer.style.display = 'none';
        youtubePlayer.src = '';
        
        // Restore controls
        document.querySelector('.player-controls').style.display = 'flex';
        
        // Autoplay rules: Try unmuted initially (will fall back to muted if blocked)
        video.muted = false;
        updateVolumeButtonState();
        
        if (Hls.isSupported()) {
            const hlsConfig = {
                maxBufferSize: 30 * 1024 * 1024,
                maxBufferLength: 30,
                liveSyncDuration: 3,
                enableWorker: true,
                lowLatencyMode: true,
                capLevelToPlayerSize: false
            };
            
            const hls = new Hls(hlsConfig);
            currentHls = hls;
            
            hls.loadSource(channel.url);
            hls.attachMedia(video);
            
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                const playPromise = video.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        console.log("Stream playback started!");
                        const unmuteOverlay = document.getElementById('unmute-overlay');
                        if (unmuteOverlay) unmuteOverlay.style.display = 'none';
                    }).catch(error => {
                        console.log("Playback failed. Muting to autoplay.");
                        video.muted = true;
                        updateVolumeButtonState();
                        
                        const unmuteOverlay = document.getElementById('unmute-overlay');
                        if (unmuteOverlay) unmuteOverlay.style.display = 'flex';
                        
                        // Automatically unmute when the user clicks anywhere on the page
                        document.addEventListener('click', function autoUnmute() {
                            if (video.muted) {
                                video.muted = false;
                                updateVolumeButtonState();
                                if (unmuteOverlay) unmuteOverlay.style.display = 'none';
                            }
                            document.removeEventListener('click', autoUnmute);
                        }, { once: true });
                        
                        video.play();
                    });
                }
                
                const levels = hls.levels;
                if (levels && levels.length > 0) {
                    hls.currentLevel = levels.length - 1; // Play highest quality
                }
            });
            
            hls.on(Hls.Events.ERROR, function (event, data) {
                if (data.fatal) {
                    if (window.location.protocol === 'https:' && channel.url.startsWith('http://')) {
                        // Mixed content check (only for local HTTP streams loaded on HTTPS page)
                        toggleMixedContentModal(true);
                    } else {
                        switch(data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            console.log("Network error fatal. Retrying...", data);
                            hls.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            console.log("Media error fatal. Recovering...", data);
                            hls.recoverMediaError();
                            break;
                        default:
                            console.error("Fatal error loading stream. Destroying hls.", data);
                            hls.destroy();
                            break;
                        }
                    }
                }
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = channel.url;
            video.addEventListener('canplay', function() {
                video.play().then(() => {
                    const unmuteOverlay = document.getElementById('unmute-overlay');
                    if (unmuteOverlay) unmuteOverlay.style.display = 'none';
                }).catch(e => {
                    video.muted = true;
                    updateVolumeButtonState();
                    
                    const unmuteOverlay = document.getElementById('unmute-overlay');
                    if (unmuteOverlay) unmuteOverlay.style.display = 'flex';
                    
                    // Automatically unmute when the user clicks anywhere on the page
                    document.addEventListener('click', function autoUnmute() {
                        if (video.muted) {
                            video.muted = false;
                            updateVolumeButtonState();
                            if (unmuteOverlay) unmuteOverlay.style.display = 'none';
                        }
                        document.removeEventListener('click', autoUnmute);
                    }, { once: true });
                    
                    video.play();
                });
            });
        }
    }
    
    // Close sidebar on mobile
    if (window.innerWidth <= 1024) {
        toggleSidebar(false);
    }
    
    // Scroll to player (only if user initiated)
    if (!isAutoplay) {
        videoWrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function unmuteVideo() {
    video.muted = false;
    updateVolumeButtonState();
    const unmuteOverlay = document.getElementById('unmute-overlay');
    if (unmuteOverlay) unmuteOverlay.style.display = 'none';
}

function toggleMute() {
    video.muted = !video.muted;
    updateVolumeButtonState();
    if (!video.muted) {
        const unmuteOverlay = document.getElementById('unmute-overlay');
        if (unmuteOverlay) unmuteOverlay.style.display = 'none';
    }
}

function updateVolumeButtonState() {
    if (video.muted) {
        volumeIndicator.innerText = "🔇";
        volumeIndicator.title = "Unmute Sound";
    } else {
        volumeIndicator.innerText = "🔊";
        volumeIndicator.title = "Mute Sound";
    }
}

// Favorites management
function toggleFavorite(event, channelId) {
    event.stopPropagation();
    
    const index = favorites.indexOf(channelId);
    if (index === -1) {
        favorites.push(channelId);
    } else {
        favorites.splice(index, 1);
    }
    
    localStorage.setItem('iptv_favorites', JSON.stringify(favorites));
    
    filterChannels();
}

// Filter channels based on search and category tabs
function filterChannels() {
    const query = searchInput.value.toLowerCase();
    
    const filtered = channels.filter(ch => {
        const matchesSearch = ch.name.toLowerCase().includes(query);
        let matchesCategory = false;
        
        if (selectedCategory === 'all') {
            matchesCategory = true;
        } else if (selectedCategory === 'favorites') {
            matchesCategory = favorites.includes(ch.id);
        } else if (selectedCategory === 'worldcup') {
            matchesCategory = !!ch.isWorldCup;
        } else {
            matchesCategory = ch.category === selectedCategory;
        }
        
        return matchesSearch && matchesCategory;
    });
    
    renderChannelGrid(filtered);
}

function filterByCategory(category) {
    selectedCategory = category;
    
    // Update main section tabs active state
    document.querySelectorAll('.cat-tab').forEach(tab => {
        if (tab.getAttribute('data-cat') === category) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Update sidebar navigation categories active state
    document.querySelectorAll('.sidebar-cat-item').forEach(item => {
        if (item.getAttribute('data-cat') === category) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Update main section title
    const sectionTitle = document.getElementById('section-title');
    if (sectionTitle) {
        const titles = {
            all: "All Channels",
            worldcup: "World Cup Special",
            sports: "Sports Channels",
            tv: "TV Channels",
            news: "News Channels",
            favorites: "Favorite Channels",
            kids: "Kids Channels"
        };
        const emojis = {
            all: "📺",
            worldcup: "🏆",
            sports: "⚽",
            tv: "📺",
            news: "📰",
            favorites: "⭐",
            kids: "👶"
        };
        sectionTitle.innerHTML = `<span class="emoji">${emojis[category] || "📺"}</span> ${titles[category] || "Channels"}`;
    }
    
    filterChannels();
}

// Toggle Sidebar on mobile
function toggleSidebar(forceState = null) {
    const isOpen = forceState !== null ? forceState : !sidebar.classList.contains('open');
    if (isOpen) {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('visible');
    } else {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('visible');
    }
}

// Toggle sliding schedule drawer
function toggleScheduleDrawer(show) {
    if (show) {
        scheduleDrawer.classList.add('open');
        drawerOverlay.classList.add('visible');
        renderDrawerSchedule(); // Refresh matches list
    } else {
        scheduleDrawer.classList.remove('open');
        drawerOverlay.classList.remove('visible');
    }
}

// Fullscreen controls with native support for TV, Mobile (iOS/Android), and Desktop
function toggleFullscreen() {
    const isFullscreen = document.fullscreenElement || 
                         document.webkitFullscreenElement || 
                         document.mozFullScreenElement || 
                         document.msFullscreenElement ||
                         video.webkitDisplayingFullscreen;

    if (!isFullscreen) {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Safari / iOS
        } else if (video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen(); // iOS iPhone fallback
        } else if (videoWrapper.requestFullscreen) {
            videoWrapper.requestFullscreen();
        }
    } else {
        const exitFS = document.exitFullscreen || 
                       document.webkitExitFullscreen || 
                       document.webkitCancelFullScreen ||
                       document.mozCancelFullScreen || 
                       document.msExitFullscreen;
        if (exitFS) {
            exitFS.call(document);
        } else if (video.webkitExitFullscreen) {
            video.webkitExitFullscreen();
        }
    }
}

function togglePiP() {
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
    } else if (document.pictureInPictureEnabled && video.readyState >= 1) {
        video.requestPictureInPicture();
    }
}

// Toggle Mixed Content helper modal
function toggleMixedContentModal(show) {
    if (show) {
        mixedContentModal.classList.add('visible');
    } else {
        mixedContentModal.classList.remove('visible');
    }
}

// Run initial configurations
window.onload = initApp;