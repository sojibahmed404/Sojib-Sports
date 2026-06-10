// Channel Data with categories and metadata
const channels = [
    { 
        id: "tsports", 
        name: "T Sports HD", 
        url: "http://172.16.29.2:8090/hls/tsportshd.m3u8", 
        category: "sports", 
        quality: "HD", 
        logo: "⚽" 
    },
    { 
        id: "ptvsports", 
        name: "PTV Sports HD", 
        url: "http://10.99.99.99:8082/PTV-SPORTS-HD/tracks-v1a1/mono.m3u8?token=f76b92709d51803cdf1d7d4fc663f3c1dab8dcaa-ff92cc862d458b4b124afe2887cfe34d-1781121462-1781110662", 
        category: "sports", 
        quality: "HD", 
        logo: "🏏" 
    },
    { 
        id: "asports", 
        name: "A Sports HD", 
        url: "http://10.99.99.99:8082/A.SPORTS.HD/tracks-v1a1/mono.m3u8?token=1fc198421320e78f938a760162f4e2ed0cb60ce-194b2c0ebe8e327b2fa81b2632343df6-1781121503-1781110703", 
        category: "sports", 
        quality: "HD", 
        logo: "🏏" 
    },
    { 
        id: "starsports1", 
        name: "Star Sports 1 HD", 
        url: "http://10.99.99.99:8082/STAR.SPORTS1.HD/tracks-v1a1/mono.m3u8?token=584c34f8a8c5cc19ea4d71ec4c197dea3f390bcd-a3bfbf778837d5fe510761d2abc49e2f-1781121527-1781110727", 
        category: "sports", 
        quality: "HD", 
        logo: "⚽" 
    },
    { 
        id: "starsports_sel1", 
        name: "Star Sports Select 1", 
        url: "http://10.99.99.99:8082/STAR.SPORTS-SEL1.HD/tracks-v1a1/mono.m3u8?token=2ffbde34d181225ce3397392dfdd02e7f82be7c9-b18f43a4c8247927c4185846fcee8711-1781121674-1781110874", 
        category: "sports", 
        quality: "HD", 
        logo: "🎾" 
    },
    { 
        id: "starsports2", 
        name: "Star Sports 2 HD", 
        url: "http://10.99.99.99:8082/STAR.SPORTS2.HD/tracks-v1a1/mono.m3u8?token=92b017e7341faad5fd0c5cb3e9b1ccce3a372d10-062b567865df0985e6d9b2504833dec3-1781121722-1781110922", 
        category: "sports", 
        quality: "HD", 
        logo: "🏏" 
    },
    { 
        id: "starsports3", 
        name: "Star Sports 3", 
        url: "http://10.99.99.99:8082/STAR-SPORTS.3/tracks-v1a1/mono.m3u8?token=cc0f0661eab1a591800d92be9f2862773651026d-6568b9bf44165b0a334da00efc51d8af-1781121748-1781110948", 
        category: "sports", 
        quality: "SD", 
        logo: "⚽" 
    },
    { 
        id: "gtv", 
        name: "GTV HD", 
        url: "http://172.16.29.2:8090/hls/gazitvhd.m3u8", 
        category: "tv", 
        quality: "HD", 
        logo: "📺" 
    },
    { 
        id: "somoy", 
        name: "Somoy TV", 
        url: "http://172.16.29.2:8090/hls/somoytv.m3u8", 
        category: "news", 
        quality: "SD", 
        logo: "📰" 
    },
    { 
        id: "atnbangla", 
        name: "ATN Bangla HD", 
        url: "http://10.99.99.99:8082/ATN.BANGLA.HD/tracks-v1a1/mono.m3u8?token=30c2fb508a19d00cef9f0c7223fa80f2a167af4d-ab7c636effc30bce2e83d128ed28941c-1781121271-1781110471", 
        category: "tv", 
        quality: "HD", 
        logo: "📺" 
    },
    { 
        id: "independent", 
        name: "Independent TV HD", 
        url: "http://10.99.99.99:8082/INDEPENDENT.TV/tracks-v1a1/mono.m3u8?token=9e6da90dc8976af1709c55b557be0c306918722c-b8b536f2ecb19bda250b31894b3ab6af-1781121416-1781110616", 
        category: "news", 
        quality: "HD", 
        logo: "📰" 
    },
    { 
        id: "somoy_yt", 
        name: "Somoy TV (YouTube Live)", 
        url: "https://www.youtube.com/embed/live_stream?channel=UC751P3_F3D6S32p09L5R1iA", 
        category: "news", 
        quality: "HD", 
        logo: "📰",
        isYoutube: true
    },
    { 
        id: "jamuna_yt", 
        name: "Jamuna TV (YouTube Live)", 
        url: "https://www.youtube.com/embed/live_stream?channel=UCN6sm8iHiPd0cnoUardDAnw", 
        category: "news", 
        quality: "HD", 
        logo: "📰",
        isYoutube: true
    },
    { 
        id: "independent_yt", 
        name: "Independent TV (YouTube Live)", 
        url: "https://www.youtube.com/embed/live_stream?channel=UC7g3bU5z2Y3W57-y-N5K5yA", 
        category: "news", 
        quality: "HD", 
        logo: "📰",
        isYoutube: true
    },
    { 
        id: "channel24_yt", 
        name: "Channel 24 (YouTube Live)", 
        url: "https://www.youtube.com/embed/live_stream?channel=UCHLqIOMPk20w-6cFgkA90jw", 
        category: "tv", 
        quality: "HD", 
        logo: "📺",
        isYoutube: true
    },
    { 
        id: "ekattor_yt", 
        name: "Ekattor TV (YouTube Live)", 
        url: "https://www.youtube.com/embed/live_stream?channel=UCuB48s1rE2f-N1Ww4p7l_Ig", 
        category: "news", 
        quality: "HD", 
        logo: "📰",
        isYoutube: true
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
const sidebarNav = document.getElementById('sidebar-nav');
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
const autoplayBanner = document.getElementById('autoplay-banner');
const volumeIndicator = document.getElementById('volume-indicator');

let currentHls = null;
let currentChannelId = null;
let selectedCategory = 'all';
let favorites = JSON.parse(localStorage.getItem('iptv_favorites')) || [];

// Initialize App
function initApp() {
    // Apply saved accent theme
    const savedTheme = localStorage.getItem('iptv_theme') || 'rose';
    setAccent(savedTheme);

    // Initial render
    renderSidebarNav();
    renderChannelGrid(channels);
    renderDrawerSchedule();

    // Autoplay implementation: Load and play T Sports HD immediately on load
    const defaultChannelId = "tsports";
    playChannel(defaultChannelId, true); // Pass true to enable autoplay logic
}

// Render the Sidebar categories and listings
function renderSidebarNav() {
    const categories = {
        favorites: { title: "⭐ Favorites", icon: "⭐", class: "sports", list: [] },
        sports: { title: "Sports Channels", icon: "⚽", class: "sports", list: [] },
        tv: { title: "TV Entertainment", icon: "📺", class: "tv", list: [] },
        news: { title: "News Channels", icon: "📰", class: "news", list: [] }
    };
    
    // Group favorites
    channels.forEach(ch => {
        if (favorites.includes(ch.id)) {
            categories.favorites.list.push(ch);
        }
        if (categories[ch.category]) {
            categories[ch.category].list.push(ch);
        }
    });
    
    let html = '';
    
    for (const [key, cat] of Object.entries(categories)) {
        if (cat.list.length === 0) {
            if (key === 'favorites') continue; // Hide favorites section if empty
        }
        
        html += `
            <div class="nav-category" id="cat-sec-${key}">
                <div class="nav-category-title">
                    <span class="cat-icon">${cat.icon}</span>
                    <span>${cat.title}</span>
                    <span class="cat-count">${cat.list.length}</span>
                </div>
                <ul class="channel-list">
        `;
        
        cat.list.forEach(ch => {
            const isFav = favorites.includes(ch.id);
            html += `
                <li class="channel-item ${currentChannelId === ch.id ? 'active' : ''}" data-id="${ch.id}">
                    <div class="ch-icon ${cat.class}" onclick="playChannel('${ch.id}')">${ch.logo}</div>
                    <div class="ch-info" onclick="playChannel('${ch.id}')">
                        <div class="ch-name">${ch.name}</div>
                        <div class="ch-quality ${ch.quality.toLowerCase()}">${ch.quality} Stream</div>
                    </div>
                    <span class="fav-btn-star ${isFav ? 'starred' : ''}" onclick="toggleFavorite(event, '${ch.id}')">★</span>
                    <div class="live-dot" onclick="playChannel('${ch.id}')"></div>
                </li>
            `;
        });
        
        html += `
                </ul>
            </div>
        `;
    }
    
    sidebarNav.innerHTML = html;
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
                <div class="card-badge ${ch.quality.toLowerCase()}">${ch.quality}</div>
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
    document.querySelectorAll('.channel-item').forEach(item => {
        if (item.getAttribute('data-id') === id) item.classList.add('active');
        else item.classList.remove('active');
    });
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
        autoplayBanner.style.display = 'none';
    } else {
        // Show standard video, hide YouTube player
        video.style.display = 'block';
        youtubePlayer.style.display = 'none';
        youtubePlayer.src = '';
        
        // Restore controls
        document.querySelector('.player-controls').style.display = 'flex';
        
        // Autoplay rules: Muted initially to bypass browser restrictions
        if (isAutoplay) {
            video.muted = true;
            updateVolumeButtonState();
            autoplayBanner.style.display = 'block';
        } else {
            video.muted = false;
            updateVolumeButtonState();
        }
        
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
                        autoplayBanner.style.display = 'block';
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
                    if (window.location.protocol === 'https:') {
                        // Mixed content check
                        toggleMixedContentModal(true);
                    } else {
                        switch(data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            hls.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            hls.recoverMediaError();
                            break;
                        default:
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
                    autoplayBanner.style.display = 'block';
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

// Unmute function linked to the banner click and UI buttons
function unmuteVideo() {
    video.muted = false;
    updateVolumeButtonState();
    autoplayBanner.style.display = 'none';
}

function toggleMute() {
    video.muted = !video.muted;
    updateVolumeButtonState();
    if (!video.muted) {
        autoplayBanner.style.display = 'none';
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
    
    renderSidebarNav();
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
        } else {
            matchesCategory = ch.category === selectedCategory;
        }
        
        return matchesSearch && matchesCategory;
    });
    
    renderChannelGrid(filtered);
}

function filterByCategory(category) {
    selectedCategory = category;
    
    document.querySelectorAll('.cat-tab').forEach(tab => {
        if (tab.getAttribute('data-cat') === category) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    filterChannels();
}

// Accent Color Theme Customizer
function setAccent(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('iptv_theme', themeName);
    
    document.querySelectorAll('.theme-btn').forEach(btn => {
        if (btn.getAttribute('data-color') === themeName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function toggleThemePanel() {
    const panel = document.getElementById('theme-panel');
    panel.classList.toggle('open');
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

// Fullscreen controls
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        if (videoWrapper.requestFullscreen) {
            videoWrapper.requestFullscreen();
        } else if (videoWrapper.webkitRequestFullscreen) {
            videoWrapper.webkitRequestFullscreen();
        } else if (video.requestFullscreen) {
            video.requestFullscreen();
        }
    } else {
        document.exitFullscreen();
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