// Channel Data with categories and metadata
const channels = [
    // --- Public/Global Channels (Work everywhere without permissions) ---
    { 
        id: "btv", 
        name: "BTV National", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "🇧🇩",
        isWorldCup: true
    },
    { 
        id: "tsports", 
        name: "T Sports HD", 
        url: "https://tvsen7.aynaott.com/tsports-hd/tracks-v1a1/mono.ts.m3u8", 
        category: "sports", 
        quality: "HD", 
        logo: "⚽",
        isWorldCup: true
    },
    { 
        id: "ptvsports", 
        name: "PTV Sports HD", 
        url: "https://tvsen5.aynaott.com/PtvSports/index.m3u8", 
        category: "sports", 
        quality: "HD", 
        logo: "🏏",
        isWorldCup: true
    },
    { 
        id: "asports", 
        name: "A Sports HD", 
        url: "https://tvsen6.aynaott.com/asports/index.m3u8", 
        category: "sports", 
        quality: "HD", 
        logo: "🏏",
        isWorldCup: true
    },
    { 
        id: "cricket_gold", 
        name: "Cricket Gold HD (Global)", 
        url: "https://tvsen6.aynaott.com/CricketGold/index.m3u8", 
        category: "sports", 
        quality: "HD", 
        logo: "🏏",
        isWorldCup: true
    },
    {
        id: "fifa_special_6",
        name: "FIFA Special 6 (Live)",
        url: "https://a62dad94.wurl.com/ppc-sysdata_s_p_a_fifa_6-UTC-wfo-0-8581ba69/playlist_3000k_20260611T124901_204389.ts",
        category: "sports",
        quality: "HD",
        logo: "🏆",
        isWorldCup: true
    },
    {
        id: "eurosports",
        name: "Euro Sports HD",
        url: "https://stream.ottplus.bd/live/euro_sports_hd_abr/live/euro_sports_hd/chunks.m3u8",
        category: "sports",
        quality: "HD",
        logo: "⚽",
        isWorldCup: true
    },
    {
        id: "beinsports_esp",
        name: "beIN Sports En Español",
        url: "https://bein-esp-xumo.amagi.tv/playlistR1080p.m3u8",
        category: "sports",
        quality: "HD",
        logo: "⚽",
        isWorldCup: true
    },
    {
        id: "ktvsports",
        name: "KTV Sports HD",
        url: "https://kwtsplta.cdn.mangomolo.com/spl/smil:spl.stream.smil/chunklist_b8000000_t64MTA4MHA=.m3u8",
        category: "sports",
        quality: "HD",
        logo: "🏏",
        isWorldCup: true
    },
    { 
        id: "tycsports", 
        name: "TyC Sports HD", 
        url: "https://amg26268-amg26268c14-freelivesports-emea-10267.playouts.now.amagi.tv/ts-us-e2-n2/playlist/amg26268-sportsstudio-tycsports-freelivesportsemea/playlist.m3u8", 
        category: "sports", 
        quality: "HD", 
        logo: "⚽",
        isWorldCup: true
    },
    { 
        id: "fifaplus", 
        name: "FIFA Plus HD", 
        url: "https://a62dad94.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X0ZJRkFQbHVzRW5nbGlzaF9ITFM/playlist.m3u8", 
        category: "sports", 
        quality: "HD", 
        logo: "🏆",
        isWorldCup: true
    },
    { 
        id: "gtv", 
        name: "GTV HD", 
        url: "https://itpolly.iptv.digijadoo.net/live/gazi_tv/chunks.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "📺",
        isWorldCup: true
    },
    { 
        id: "starjalsha", 
        name: "Star Jalsha HD", 
        url: "https://itpolly.iptv.digijadoo.net/live/star_jalsha_hd/playlist.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "🎭" 
    },
    { 
        id: "zeecinema", 
        name: "Zee Cinema HD", 
        url: "https://itpolly.iptv.digijadoo.net/live/zee_cinema/chunks.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "🎬" 
    },
    { 
        id: "colorsbangla", 
        name: "Colors Bangla HD", 
        url: "https://itpolly.iptv.digijadoo.net/live/colors_bangla_hd/playlist.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "🎨" 
    },
    { 
        id: "atnbangla", 
        name: "ATN Bangla HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "📺" 
    },
    { 
        id: "channeli", 
        name: "Channel i HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "📡" 
    },
    { 
        id: "deeptotv", 
        name: "Deepto TV HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1711/output/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "📺" 
    },
    { 
        id: "channel24", 
        name: "Channel 24 HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "📺" 
    },
    { 
        id: "somoy", 
        name: "Somoy TV HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8", 
        category: "news", 
        quality: "HD", 
        logo: "📰" 
    },
    { 
        id: "jamuna", 
        name: "Jamuna TV HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8", 
        category: "news", 
        quality: "HD", 
        logo: "📰" 
    },
    { 
        id: "independent", 
        name: "Independent TV HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8", 
        category: "news", 
        quality: "HD", 
        logo: "📰" 
    },
    { 
        id: "ekattor", 
        name: "Ekattor TV HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8", 
        category: "news", 
        quality: "HD", 
        logo: "📰" 
    },
    { 
        id: "atnnews", 
        name: "ATN News HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8", 
        category: "news", 
        quality: "HD", 
        logo: "📰" 
    },
    { 
        id: "banglavision", 
        name: "BanglaVision HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "📺" 
    },
    { 
        id: "ntv", 
        name: "NTV HD", 
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "📺" 
    },
    { 
        id: "quran", 
        name: "Saudi Quran Live", 
        url: "https://cdn-globecast.akamaized.net/live/eds/saudi_quran/hls_roku/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "🕋" 
    },
    { 
        id: "sunnah", 
        name: "Saudi Sunnah Live", 
        url: "https://cdn-globecast.akamaized.net/live/eds/saudi_sunnah/hls_roku/index.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "🕌" 
    },
    {
        id: "rajdhani",
        name: "Rajdhani TV",
        url: "https://stream.shariarsuvo.com/hls6/rajdhaniweb.m3u8",
        category: "tv",
        quality: "HD",
        logo: "📺"
    },
    {
        id: "rtv",
        name: "RTV HD",
        url: "https://tvsen5.aynaott.com/RtvHD/index.m3u8",
        category: "tv",
        quality: "HD",
        logo: "📺"
    },
    {
        id: "etv",
        name: "ETV HD",
        url: "https://tvsen6.aynaott.com/etv/index.m3u8",
        category: "tv",
        quality: "HD",
        logo: "📺"
    },
    {
        id: "channel9",
        name: "Channel 9 HD",
        url: "https://tvsen6.aynaott.com/channel9/index.m3u8",
        category: "tv",
        quality: "HD",
        logo: "📺"
    },
    {
        id: "deshtv",
        name: "Desh TV HD",
        url: "https://tvsen6.aynaott.com/deshtv/index.m3u8",
        category: "tv",
        quality: "HD",
        logo: "📺"
    },
    {
        id: "boishakhitv",
        name: "Boishakhi TV HD",
        url: "https://tvsen6.aynaott.com/boishakhitv/index.m3u8",
        category: "tv",
        quality: "HD",
        logo: "📺"
    },
    {
        id: "satv",
        name: "SATV HD",
        url: "https://tvsen6.aynaott.com/satv/index.m3u8",
        category: "tv",
        quality: "HD",
        logo: "📺"
    },
    {
        id: "mytv",
        name: "MYTV HD",
        url: "https://tvsen6.aynaott.com/mytv/index.m3u8",
        category: "tv",
        quality: "HD",
        logo: "📺"
    },
    {
        id: "bijoytv",
        name: "Bijoy TV HD",
        url: "https://tvsen6.aynaott.com/bijoytv/index.m3u8",
        category: "tv",
        quality: "HD",
        logo: "📺"
    },
    {
        id: "massranga",
        name: "Maasranga TV HD",
        url: "https://tvsen5.aynaott.com/maasrangatv/index.m3u8",
        category: "tv",
        quality: "HD",
        logo: "📺"
    },
    {
        id: "asiantv",
        name: "Asian TV HD",
        url: "https://tvsen6.aynaott.com/asiantv/index.m3u8",
        category: "tv",
        quality: "HD",
        logo: "📺"
    },
    {
        id: "banglatv",
        name: "Bangla TV HD",
        url: "https://tvsen6.aynaott.com/banglatv/index.m3u8",
        category: "tv",
        quality: "HD",
        logo: "📺"
    },
    {
        id: "mohonatv",
        name: "Mohona TV HD",
        url: "https://tvsen6.aynaott.com/mohonatv/index.m3u8",
        category: "tv",
        quality: "HD",
        logo: "📺"
    },

    // --- Local Network Channels (Work only on user's ISP network) ---
    { 
        id: "starsports1", 
        name: "Star Sports 1 HD (Local)", 
        url: "http://10.99.99.99:8082/STAR.SPORTS1.HD/tracks-v1a1/mono.m3u8?token=584c34f8a8c5cc19ea4d71ec4c197dea3f390bcd-a3bfbf778837d5fe510761d2abc49e2f-1781121527-1781110727", 
        category: "sports", 
        quality: "HD", 
        logo: "⚽",
        isLocal: true,
        isWorldCup: true
    },
    { 
        id: "starsports_sel1", 
        name: "Star Sports Select 1 (Local)", 
        url: "http://10.99.99.99:8082/STAR.SPORTS-SEL1.HD/tracks-v1a1/mono.m3u8?token=2ffbde34d181225ce3397392dfdd02e7f82be7c9-b18f43a4c8247927c4185846fcee8711-1781121674-1781110874", 
        category: "sports", 
        quality: "HD", 
        logo: "🎾",
        isLocal: true,
        isWorldCup: true
    },
    { 
        id: "starsports2", 
        name: "Star Sports 2 HD (Local)", 
        url: "http://10.99.99.99:8082/STAR.SPORTS2.HD/tracks-v1a1/mono.m3u8?token=92b017e7341faad5fd0c5cb3e9b1ccce3a372d10-062b567865df0985e6d9b2504833dec3-1781121722-1781110922", 
        category: "sports", 
        quality: "HD", 
        logo: "🏏",
        isLocal: true,
        isWorldCup: true
    },
    { 
        id: "starsports3", 
        name: "Star Sports 3 (Local)", 
        url: "http://10.99.99.99:8082/STAR-SPORTS.3/tracks-v1a1/mono.m3u8?token=cc0f0661eab1a591800d92be9f2862773651026d-6568b9bf44165b0a334da00efc51d8af-1781121748-1781110948", 
        category: "sports", 
        quality: "SD", 
        logo: "⚽",
        isLocal: true,
        isWorldCup: true
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

    // Autoplay implementation: Load and play BTV National immediately on load
    const defaultChannelId = "btv";
    playChannel(defaultChannelId, true); // Pass true to enable autoplay logic
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
        
        card.innerHTML = `
            <div class="card-top">
                <div class="card-icon ${iconClass}">${ch.logo}</div>
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
                    }).catch(error => {
                        console.log("Playback failed. Muting to autoplay.");
                        video.muted = true;
                        updateVolumeButtonState();
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
                video.play().catch(e => {
                    video.muted = true;
                    updateVolumeButtonState();
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

function toggleMute() {
    video.muted = !video.muted;
    updateVolumeButtonState();
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
            favorites: "Favorite Channels"
        };
        const emojis = {
            all: "📺",
            worldcup: "🏆",
            sports: "⚽",
            tv: "📺",
            news: "📰",
            favorites: "⭐"
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