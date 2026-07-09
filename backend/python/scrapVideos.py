import requests
import re
import json
import html  # Dodane do znaków specjalnych
from datetime import datetime
from bs4 import BeautifulSoup

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

def extract_video_id(url):
    match = re.search(r'v=([^&]+)', url)
    if match:
        return match.group(1)
    return None

def find_author_avatar(html_text, author=None):
    soup = BeautifulSoup(html_text, 'html.parser')

    def extract_image_url(img_tag):
        for attribute_name in ('src', 'data-src', 'data-thumb', 'data-lazy-src'):
            image_url = img_tag.get(attribute_name)
            if image_url and 'yt3.ggpht' in image_url:
                return image_url

        srcset = img_tag.get('srcset')
        if srcset:
            first_candidate = srcset.split(',')[0].strip().split(' ')[0]
            if 'yt3.ggpht' in first_candidate:
                return first_candidate
        return None

    image_candidates = []
    if author:
        image_candidates.extend(soup.find_all('img', alt=author))

    image_candidates.extend(
        soup.find_all(
            'img',
            class_=lambda class_name: class_name and 'yt-img-shadow' in class_name.split(),
        )
    )

    for img_tag in image_candidates:
        image_url = extract_image_url(img_tag)
        if image_url:
            return image_url

    if author:
        author_patterns = [
            rf'"a11yLabel":"Wyświetl kanał {re.escape(author)}"',
            rf'"title":\{{"runs":\[\{{"text":"{re.escape(author)}"',
            rf'"author":"{re.escape(author)}"',
        ]

        for author_pattern in author_patterns:
            author_match = re.search(author_pattern, html_text)
            if not author_match:
                continue

            search_start = max(0, author_match.start() - 1500)
            search_end = min(len(html_text), author_match.end() + 4000)
            nearby_html = html_text[search_start:search_end]
            image_match = re.search(r'https://yt3\.ggpht\.com/[^"\\]+', nearby_html)
            if image_match:
                return image_match.group(0)

    return None

def scrap_video(url, video_id_num):
    video_id = extract_video_id(url)
    if not video_id:
        return None

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'Accept-Language': 'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7'
    }    

    cookies = {'CONSENT': 'YES+cb.20210328-17-p0.pl+FX+374'}
    
    try:
        response = requests.get(url, headers=headers, cookies=cookies)
        response.raise_for_status()
        html_text = response.text

        title_match = re.search(r'<meta name="title" content="([^"]+)"', html_text)
        if not title_match:
            title_match = re.search(r'<meta property="og:title" content="([^"]+)"', html_text)
        # NAPRAWA A: Odkodowanie znaków specjalnych
        title = html.unescape(title_match.group(1)) if title_match else "Unknown Title"

        author_match = re.search(r'"author":"([^"]+)"', html_text)
        # NAPRAWA A: Odkodowanie znaków specjalnych u autora
        author = html.unescape(author_match.group(1)) if author_match else "Unknown Author"

        author_src = find_author_avatar(html_text, author)

        views_match = re.search(r'"viewCount":"(\d+)"', html_text)
        views = int(views_match.group(1)) if views_match else 0

        date_match = re.search(r'"uploadDate"\s*:\s*"([^"]+)"', html_text)
        if not date_match:
            date_match = re.search(r'"datePublished"\s*:\s*"([^"]+)"', html_text)
        date = date_match.group(1) if date_match else "Unknown Date"
        
        days_from_today = None

        if date != "Unknown Date":
            try:
                # NAPRAWA B: Odcinamy część z godziną po literze "T"
                date_only = date.split('T')[0]
                published_date = datetime.strptime(date_only, "%Y-%m-%d").date()
                days_from_today = (datetime.now().date() - published_date).days
            except ValueError:
                days_from_today = None

        video_info = {
            "id": video_id,
            "number": video_id_num,
            "title": title,
            "author": author,   
            "url": url,
            "img_src": f"https://i.ytimg.com/vi/{video_id}/hq720.jpg",
            "author_src": author_src,
            "views": views,
            "date": date,
            "days_from_today": days_from_today
        }
        
        return video_info
    except requests.exceptions.RequestException as e:
        print(f"Error fetching video info for {url}: {e}")
        return None

def main():
    video_data = []
    for idx, url in enumerate(VIDEO_URLS, start = 1):
        try:
            video_info = scrap_video(url, idx)
            if video_info:
                video_data.append(video_info)
                print(f"Scraped: {video_info['title']}")
        except Exception as e:
            print(f"Error scraping video at {url}: {e}")

    with open('public/videos.json', 'w', encoding='utf-8') as f:
        json.dump(video_data, f, ensure_ascii=False, indent=2)
    
    print(f'Saved {len(video_data)} video info to public/videos.json')

if __name__ == "__main__":
    main()