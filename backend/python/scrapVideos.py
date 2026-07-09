import json
from datetime import datetime
import yt_dlp

VIDEO_URLS = [
    'https://www.youtube.com/watch?v=185XGEMefgc&pp=ugUHEgVlbi1VUw%3D%3D',
    'https://www.youtube.com/watch?v=5KyfW79Ld4g&pp=0gcJCUwLAYcqIYzv',
    'https://www.youtube.com/watch?v=Yd7vDterctQ',
    'https://www.youtube.com/watch?v=7gtIh5dF9Xk',
    'https://www.youtube.com/watch?v=sq67daxRZ6c&pp=ugUHEgVlbi1VUw%3D%3D',
    'https://www.youtube.com/watch?v=XRzhKy_hheo',
    'https://www.youtube.com/watch?v=Y8l3yyh8I8M',
    'https://www.youtube.com/watch?v=16F8Slg3Ydg',
    'https://www.youtube.com/watch?v=7YYuZ_YtxmQ&pp=ugUEEgJlbtIHCQlMCwGHKiGM7w%3D%3D',
    'https://www.youtube.com/watch?v=qx7ul2ge6AM&pp=0gcJCUwLAYcqIYzv',
    'https://www.youtube.com/watch?v=3gkiudGNGwY',
    'https://www.youtube.com/watch?v=tqXfoJsGQEE',
    'https://www.youtube.com/watch?v=JWKadu0ks20&pp=ugUHEgVlbi1VUw%3D%3D',
    'https://www.youtube.com/watch?v=xtTqbvsY2L4',
    'https://www.youtube.com/watch?v=hg3R0V3ulvQ',
    'https://www.youtube.com/watch?v=DMMyLDapGy8',
    'https://www.youtube.com/watch?v=185XGEMefgc&pp=ugUHEgVlbi1VUw%3D%3D',
    'https://www.youtube.com/watch?v=5KyfW79Ld4g&pp=0gcJCUwLAYcqIYzv',
    'https://www.youtube.com/watch?v=Yd7vDterctQ',
    'https://www.youtube.com/watch?v=7gtIh5dF9Xk',
    'https://www.youtube.com/watch?v=sq67daxRZ6c&pp=ugUHEgVlbi1VUw%3D%3D',
    'https://www.youtube.com/watch?v=XRzhKy_hheo',
    'https://www.youtube.com/watch?v=Y8l3yyh8I8M',
    'https://www.youtube.com/watch?v=16F8Slg3Ydg',
    'https://www.youtube.com/watch?v=7YYuZ_YtxmQ&pp=ugUEEgJlbtIHCQlMCwGHKiGM7w%3D%3D',
    'https://www.youtube.com/watch?v=qx7ul2ge6AM&pp=0gcJCUwLAYcqIYzv',
    'https://www.youtube.com/watch?v=3gkiudGNGwY',
    'https://www.youtube.com/watch?v=tqXfoJsGQEE',
    'https://www.youtube.com/watch?v=JWKadu0ks20&pp=ugUHEgVlbi1VUw%3D%3D',
    'https://www.youtube.com/watch?v=xtTqbvsY2L4',
    'https://www.youtube.com/watch?v=hg3R0V3ulvQ',
    'https://www.youtube.com/watch?v=DMMyLDapGy8'
]

_avatar_cache = {}


def _pick_avatar_url(thumbnails):
   
    if not thumbnails:
        return None

    avatar_candidates = [
        t for t in thumbnails
        if 'avatar' in (t.get('id') or '').lower()
    ]

    if not avatar_candidates:
        avatar_candidates = [
            t for t in thumbnails
            if 'banner' not in (t.get('id') or '').lower()
        ]

    if not avatar_candidates:
        return None

   
    square_candidates = [
        t for t in avatar_candidates
        if t.get('width') and t.get('height') and t['width'] == t['height']
    ]
    if square_candidates:
        avatar_candidates = square_candidates

    best = max(avatar_candidates, key=lambda t: t.get('width', 0) or 0)
    return best.get('url')


def get_channel_avatar(channel_url):
    if not channel_url:
        return None

    if channel_url in _avatar_cache:
        return _avatar_cache[channel_url]

    ydl_opts = {
        'quiet': True,
        'no_warnings': True,
        'skip_download': True,
        'extract_flat': True,  
    }

    avatar_url = None
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            channel_info = ydl.extract_info(channel_url, download=False)

        thumbnails = channel_info.get('thumbnails', []) if channel_info else []
        avatar_url = _pick_avatar_url(thumbnails)

        
        if not avatar_url:
            ydl_opts_full = dict(ydl_opts, extract_flat=False)
            with yt_dlp.YoutubeDL(ydl_opts_full) as ydl:
                channel_info = ydl.extract_info(channel_url, download=False)
            thumbnails = channel_info.get('thumbnails', []) if channel_info else []
            avatar_url = _pick_avatar_url(thumbnails)

    except Exception as e:
        print(f"Error fetching channel avatar for {channel_url}: {e}")
        avatar_url = None

    _avatar_cache[channel_url] = avatar_url
    return avatar_url


def scrap_video(url, video_id_num):
    ydl_opts = {
        'quiet': True,
        'no_warnings': True,
        'skip_download': True,
        'extract_flat': False,
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=False)

        upload_date = info.get('upload_date')  # format: YYYYMMDD
        days_from_today = None
        if upload_date:
            try:
                published_date = datetime.strptime(upload_date, "%Y%m%d").date()
                days_from_today = (datetime.now().date() - published_date).days
            except ValueError:
                days_from_today = None

        video_id = info.get('id')


        channel_url = info.get('channel_url') or info.get('uploader_url')
        if not channel_url:
            print(f"Warning: no channel_url/uploader_url for video {url}, avatar won't be fetched")
        author_src = get_channel_avatar(channel_url)
        if channel_url and not author_src:
            print(f"Warning: could not resolve avatar for channel {channel_url}")

        video_info = {
            "id": video_id,
            "number": video_id_num,
            "title": info.get('title', 'Unknown Title'),
            "author": info.get('uploader', 'Unknown Author'),
            "url": url,
            "img_src": info.get('thumbnail') or f"https://i.ytimg.com/vi/{video_id}/hq720.jpg",
            "author_src": author_src,
            "views": info.get('view_count', 0),
            "date": upload_date,
            "days_from_today": days_from_today
        }

        return video_info

    except Exception as e:
        print(f"Error fetching video info for {url}: {e}")
        return None


def main():
    video_data = []
    for idx, url in enumerate(VIDEO_URLS, start=1):
        try:
            video_info = scrap_video(url, idx)
            if video_info:
                video_data.append(video_info)
                print(f"Scraped: {video_info['title']} (author_src: {'OK' if video_info['author_src'] else 'BRAK'})")
        except Exception as e:
            print(f"Error scraping video at {url}: {e}")

    with open('public/videos.json', 'w', encoding='utf-8') as f:
        json.dump(video_data, f, ensure_ascii=False, indent=2)

    print(f'Saved {len(video_data)} video info to public/videos.json')


if __name__ == "__main__":
    main()