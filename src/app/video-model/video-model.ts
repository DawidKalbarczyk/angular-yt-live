export type Video = {
    id: number;
    title: string;
    author: string;
    url: string;
    img_src: string;
    author_src: string;
}

const rawVideoInfo: [number, string, string, string, string, string][] = [
    [1, 'MCP vs API: Why traditional APIs are failing AI agents', 'Google Cloud Tech', 'https://www.youtube.com/watch?v=185XGEMefgc&pp=ugUHEgVlbi1VUw%3D%3D', 'images/minatures/hq720.avif', 'images/authors/channels4_profile.jpg'],
    [2, 'Interview with a DBA (Database Administrator)', 'Kai Lentit', 'https://www.youtube.com/watch?v=5KyfW79Ld4g&pp=0gcJCUwLAYcqIYzv', 'images/minatures/hq720%20(1).avif', 'images/authors/channels4_profile%20(1).jpg'],
    [3, '3 A.M Coding Session - Chillstep Beats to Keep You Going', 'Cosmic Hippo', 'https://www.youtube.com/watch?v=Yd7vDterctQ', 'images/minatures/hq720%20(2).avif', 'images/authors/channels4_profile%20(2).jpg'],
    [4, 'Just One More Drink -- Jazz Noir', 'Toms Jazz Lounge', 'https://www.youtube.com/watch?v=7gtIh5dF9Xk', 'images/minatures/hq720%20(3).avif', 'images/authors/channels4_profile%20(3).jpg'],
    [5, "Should you still learn to code in 2026? (Meta Engineer's Take)", 'Jason Ku', 'https://www.youtube.com/watch?v=sq67daxRZ6c&pp=ugUHEgVlbi1VUw%3D%3D', 'images/minatures/hq720%20(4).avif', 'images/authors/channels4_profile%20(4).jpg'],
    [6, 'CRAZIEST JOB INTERVIEW EVER!!!!', 'Nathan Doan Comedy', 'https://www.youtube.com/watch?v=yuhvHYgtKIo&pp=ugUEEgJlbtIHCQlMCwGHKiGM7w%3D%3D', 'images/minatures/hqdefault.avif', 'images/authors/channels4_profile%20(5).jpg'],
    [7, 'Witcher 3 - Velen Day and Night - Music & Ambience', 'Fantasy Tavern 4 you', 'https://www.youtube.com/watch?v=Y8l3yyh8I8M', 'images/minatures/hq720%20(5).avif', 'images/authors/channels4_profile%20(6).jpg'],
    [8, "it's late, go to sleep", 'i miss her.', 'https://www.youtube.com/watch?v=16F8Slg3Ydg', 'images/minatures/hq720%20(6).avif', 'images/authors/channels4_profile%20(7).jpg'],
    [9, 'Why (almost) every JavaScript developer should learn TypeScript', 'Maximilian Schwarzmüller', 'https://www.youtube.com/watch?v=7YYuZ_YtxmQ&pp=ugUEEgJlbtIHCQlMCwGHKiGM7w%3D%3D', 'images/minatures/hq720%20(7).avif', 'images/authors/channels4_profile%20(8).jpg'],
    [10, 'Skyrim, but if ANYONE is unhappy then 5 bears spawn', 'DougDoug', 'https://www.youtube.com/watch?v=qx7ul2ge6AM&pp=0gcJCUwLAYcqIYzv', 'images/minatures/hq720%20(8).avif', 'images/authors/channels4_profile%20(9).jpg'],
    [11, '25 Rust Coding Challenges Every Junior Developer Should Solve', 'Dev Level Up', 'https://www.youtube.com/watch?v=3gkiudGNGwY', 'images/minatures/hq720%20(9).avif', 'images/authors/channels4_profile%20(10).jpg'],
    [12, 'Fallen angel in a ruined cathedral - Dark Fantasy Cello Ambient', 'SongLines Lyrics', 'https://www.youtube.com/watch?v=tqXfoJsGQEE', 'images/minatures/hq720%20(10).avif', 'images/authors/channels4_profile%20(11).jpg'],
    [13, 'i5 2500K + GTX 750 Ti 2GB in 2026 - Test in 70 Games', 'Krow Benchmarks', 'https://www.youtube.com/watch?v=NZ1jsUtm_co', 'images/minatures/hq720%20(11).avif', 'images/authors/channels4_profile%20(12).jpg'],
    [14, 'SKYRIM Kirbykings Modlist v2.8 Coven of Crones Gameplay Showcase Part 18', 'Kimutkirby', 'https://www.youtube.com/watch?v=xtTqbvsY2L4', 'images/minatures/hq720_custom_3.avif', 'images/authors/channels4_profile%20(13).jpg'],
    [15, 'Task vs ValueTask in C#', 'IAmTimCorey', 'https://www.youtube.com/watch?v=hg3R0V3ulvQ', 'images/minatures/hq720%20(12).avif', 'images/authors/channels4_profile%20(14).jpg'],
    [16, 'Chill Lofi Music [chill lo-fi hip hop beats]', 'Settle', 'https://www.youtube.com/watch?v=S_bON2ei8iA&pp=0gcJCUwLAYcqIYzv', 'images/minatures/hq720%20(13).avif', 'images/authors/channels4_profile%20(15).jpg'],
];

export const videos: Video[] = rawVideoInfo.map((
    [id, title, author, url, img_src, author_src]) => ({
    id, title, author, url, img_src, author_src
}));
   
