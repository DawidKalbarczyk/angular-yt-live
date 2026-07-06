export type Video = {
    id: number;
    title: string;
    author: string;
    url: string;
    img_src: string;
    author_src: string;
    views: number;
    date: Date;
}

const rawVideoInfo: [number, string, string, string, string, string, number, Date][] = [
    [1, 'MCP vs API: Why traditional APIs are failing AI agents', 'Google Cloud Tech', 'https://www.youtube.com/watch?v=185XGEMefgc&pp=ugUHEgVlbi1VUw%3D%3D', 'images/minatures/hq720.avif', 'images/authors/channels4_profile.jpg', 29000000, new Date(2024, 3, 1)],
    [2, 'Interview with a DBA (Database Administrator)', 'Kai Lentit', 'https://www.youtube.com/watch?v=5KyfW79Ld4g&pp=0gcJCUwLAYcqIYzv', 'images/minatures/hq720%20(1).avif', 'images/authors/channels4_profile%20(1).jpg', 1500000, new Date(2023, 0, 1)],
    [3, '3 A.M Coding Session - Chillstep Beats to Keep You Going', 'Cosmic Hippo', 'https://www.youtube.com/watch?v=Yd7vDterctQ', 'images/minatures/hq720%20(2).avif', 'images/authors/channels4_profile%20(2).jpg', 800000, new Date(2023, 12, 1)],
    [4, 'Just One More Drink -- Jazz Noir', 'Toms Jazz Lounge', 'https://www.youtube.com/watch?v=7gtIh5dF9Xk', 'images/minatures/hq720%20(3).avif', 'images/authors/channels4_profile%20(3).jpg', 1200000, new Date(2024, 12, 2)],
    [5, "Should you still learn to code in 2026? (Meta Engineer's Take)", 'Jason Ku', 'https://www.youtube.com/watch?v=sq67daxRZ6c&pp=ugUHEgVlbi1VUw%3D%3D', 'images/minatures/hq720%20(4).avif', 'images/authors/channels4_profile%20(4).jpg', 3500000, new Date(2024, 12, 1)],
    [6, 'CRAZIEST JOB INTERVIEW EVER!!!!', 'Nathan Doan Comedy', 'https://www.youtube.com/watch?v=yuhvHYgtKIo&pp=ugUEEgJlbtIHCQlMCwGHKiGM7w%3D%3D', 'images/minatures/hqdefault.avif', 'images/authors/channels4_profile%20(5).jpg', 5589999999999999, new Date(2024, 12, 1)],
    [7, 'Witcher 3 - Velen Day and Night - Music & Ambience', 'Fantasy Tavern 4 you', 'https://www.youtube.com/watch?v=Y8l3yyh8I8M', 'images/minatures/hq720%20(5).avif', 'images/authors/channels4_profile%20(6).jpg', 1000000, new Date(2024, 6, 19)],
    [8, "it's late, go to sleep", 'i miss her.', 'https://www.youtube.com/watch?v=16F8Slg3Ydg', 'images/minatures/hq720%20(6).avif', 'images/authors/channels4_profile%20(7).jpg', 500000, new Date(2023, 12, 1)],
    [9, 'Why (almost) every JavaScript developer should learn TypeScript', 'Maximilian Schwarzmüller', 'https://www.youtube.com/watch?v=7YYuZ_YtxmQ&pp=ugUEEgJlbtIHCQlMCwGHKiGM7w%3D%3D', 'images/minatures/hq720%20(7).avif', 'images/authors/channels4_profile%20(8).jpg', 4500000, new Date(2024, 12, 1)],
    [10, 'Skyrim, but if ANYONE is unhappy then 5 bears spawn', 'DougDoug', 'https://www.youtube.com/watch?v=qx7ul2ge6AM&pp=0gcJCUwLAYcqIYzv', 'images/minatures/hq720%20(8).avif', 'images/authors/channels4_profile%20(9).jpg', 3000000, new Date(2024, 4, 1)],
    [11, '25 Rust Coding Challenges Every Junior Developer Should Solve', 'Dev Level Up', 'https://www.youtube.com/watch?v=3gkiudGNGwY', 'images/minatures/hq720%20(9).avif', 'images/authors/channels4_profile%20(10).jpg', 2500000, new Date(2023, 3, 1)],
    [12, 'Fallen angel in a ruined cathedral - Dark Fantasy Cello Ambient', 'SongLines Lyrics', 'https://www.youtube.com/watch?v=tqXfoJsGQEE', 'images/minatures/hq720%20(10).avif', 'images/authors/channels4_profile%20(11).jpg', 999, new Date(2012, 12, 1)],
    [13, 'i5 2500K + GTX 750 Ti 2GB in 2026 - Test in 70 Games', 'Krow Benchmarks', 'https://www.youtube.com/watch?v=N1jsUtm_co', 'images/minatures/hq720%20(11).avif', 'images/authors/channels4_profile%20(12).jpg', 1011, new Date(2025, 7, 1)],
    [14, 'SKYRIM Kirbykings Modlist v2.8 Coven of Crones Gameplay Showcase Part 18', 'Kimutkirby', 'https://www.youtube.com/watch?v=xtTqbvsY2L4', 'images/minatures/hq720_custom_3.avif', 'images/authors/channels4_profile%20(13).jpg', 91919, new Date(2009, 10, 1)],
    [15, 'Task vs ValueTask in C#', 'IAmTimCorey', 'https://www.youtube.com/watch?v=hg3R0V3ulvQ', 'images/minatures/hq720%20(12).avif', 'images/authors/channels4_profile%20(14).jpg', 99991111, new Date(2024, 6, 1)],
    [16, 'Chill Lofi Music [chill lo-fi hip hop beats]', 'Settle', 'https://www.youtube.com/watch?v=S_bO2ei8iA&pp=0gcJCUwLAYcqIYzv', 'images/minatures/hq720%20(13).avif', 'images/authors/channels4_profile%20(15).jpg', 500000, new Date(2023, 2, 1)],
];

export const videos: Video[] = rawVideoInfo.map((
    [id, title, author, url, img_src, author_src, views, date]) => ({
    id, title, author, url, img_src, author_src, views, date
}));
   
