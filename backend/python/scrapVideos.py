import yt_dlp
import json
from datetime import datetime

def scrap_video(url, video_id_num):
    ydl_opts = {
        'quiet': True,
        'skip_download': True,
        'extract_flat': False,
    }
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=False)

        upload_date = info.get('upload_date')  # format: YYYYMMDD
        days_from_today = None
        if upload_date:
            published_date = datetime.strptime(upload_date, "%Y%m%d").date()
            days_from_today = (datetime.now().date() - published_date).days

        return {
            "id": info.get('id'),
            "number": video_id_num,
            "title": info.get('title', 'Unknown Title'),
            "author": info.get('uploader', 'Unknown Author'),
            "url": url,
            "img_src": info.get('thumbnail'),
            "author_src": info.get('channel_thumbnail') or info.get('uploader_avatar'),
            "views": info.get('view_count', 0),
            "date": upload_date,
            "days_from_today": days_from_today
        }
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None