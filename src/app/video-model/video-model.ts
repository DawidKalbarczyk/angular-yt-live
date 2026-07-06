export type Video = {
    id: number;
    title: string;
    author: string;
    url: string;
    img_src: string;
}

const rawVideoInfo: [number, string, string, string, string][] = [
    [1, 'MCP vs API: Why traditional APIs are failing AI agents', 'Google Cloud Tech', 'https://www.youtube.com/watch?v=185XGEMefgc&pp=ugUHEgVlbi1VUw%3D%3D', 'images/hq720.avif'],
    [2, 'Interview with a DBA (Database Administrator)', 'Kai Lentit', 'https://www.youtube.com/watch?v=5KyfW79Ld4g&pp=0gcJCUwLAYcqIYzv', 'images/hq720%20(1).avif'],
    [3, '3 A.M Coding Session - Chillstep Beats to Keep You Going', 'Cosmic Hippo', 'https://www.youtube.com/watch?v=Yd7vDterctQ', 'images/hq720%20(2).avif'],
    [4, 'Just One More Drink -- Jazz Noir', 'Toms Jazz Lounge', 'https://www.youtube.com/watch?v=7gtIh5dF9Xk', 'images/hq720%20(3).avif'],
    [5, "Should you still learn to code in 2026? (Meta Engineer's Take)", 'Jason Ku', 'https://www.youtube.com/watch?v=sq67daxRZ6c&pp=ugUHEgVlbi1VUw%3D%3D', 'images/hq720%20(4).avif'],
    [6, 'CRAZIEST JOB INTERVIEW EVER!!!!', 'Nathan Doan Comedy', 'https://www.youtube.com/watch?v=yuhvHYgtKIo&pp=ugUEEgJlbtIHCQlMCwGHKiGM7w%3D%3D', 'images/hqdefault.avif'],
    [7, 'Witcher 3 - Velen Day and Night - Music & Ambience', 'Fantasy Tavern 4 you', 'https://www.youtube.com/watch?v=Y8l3yyh8I8M', 'images/hq720%20(5).avif'],
    [8, "it's late, go to sleep", 'i miss her.', 'https://www.youtube.com/watch?v=16F8Slg3Ydg', 'images/hq720%20(6).avif'],
    [9, 'Why (almost) every JavaScript developer should learn TypeScript', 'Maximilian Schwarzmüller', 'https://www.youtube.com/watch?v=7YYuZ_YtxmQ&pp=ugUEEgJlbtIHCQlMCwGHKiGM7w%3D%3D', 'images/hq720%20(7).avif'],
    [10, 'Skyrim, but if ANYONE is unhappy then 5 bears spawn', 'DougDoug', 'https://www.youtube.com/watch?v=qx7ul2ge6AM&pp=0gcJCUwLAYcqIYzv', 'images/hq720%20(8).avif'],
    [11, '25 Rust Coding Challenges Every Junior Developer Should Solve', 'Dev Level Up', 'https://www.youtube.com/watch?v=3gkiudGNGwY', 'images/hq720%20(9).avif'],
    [12, 'Fallen angel in a ruined cathedral - Dark Fantasy Cello Ambient', 'SongLines Lyrics', 'https://www.youtube.com/watch?v=tqXfoJsGQEE', 'images/hq720%20(10).avif'],
    [13, 'i5 2500K + GTX 750 Ti 2GB in 2026 - Test in 70 Games', 'Krow Benchmarks', 'https://www.youtube.com/watch?v=NZ1jsUtm_co', 'images/hq720%20(11).avif'],
    [14, 'SKYRIM Kirbykings Modlist v2.8 Coven of Crones Gameplay Showcase Part 18', 'Kimutkirby', 'https://www.youtube.com/watch?v=xtTqbvsY2L4', 'images/hq720_custom_3.avif'],
    [15, 'Task vs ValueTask in C#', 'IAmTimCorey', 'https://www.youtube.com/watch?v=hg3R0V3ulvQ', 'images/hq720%20(12).avif'],
    [16, 'Chill Lofi Music [chill lo-fi hip hop beats]', 'Settle', 'https://www.youtube.com/watch?v=S_bON2ei8iA&pp=0gcJCUwLAYcqIYzv', 'images/hq720%20(13).avif'],
];

export const videos: Video[] = rawVideoInfo.map((
    [id, title, author, url, img_src]) => ({
    id, title, author, url, img_src
}));
   
