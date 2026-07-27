import json
import time
import re
import requests

JSON_FILE = 'links.json'

def extract_timestamp(url):
    # استخراج وقت الانتهاء (Unix Timestamp) من الرابط مباشرة إذا وجد
    match = re.search(r'(?:end=|,)(\d{10})', url)
    if match:
        return int(match.group(1))
    return int(time.time()) + 3600 # افتراضي ساعة لو التوكن غير موجود

def fetch_fresh_link(source_page_url):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://xhamster.com/'
        }
        
        # إرسال طلب لصفحة الفيلم
        response = requests.get(source_page_url, headers=headers, timeout=15)
        
        if response.status_code == 200:
            html_content = response.text
            
            # 1. محاولة البحث المباشر عن أي رابط ينتهي بـ .m3u8 داخل الصفحة
            m3u8_matches = re.findall(r'https?://[^\s<>"\']+?\.m3u8[^\s<>"\']*', html_content)
            if m3u8_matches:
                clean_link = m3u8_matches[0].replace('\\/', '/')
                new_expiry = extract_timestamp(clean_link)
                return clean_link, new_expiry
            
            # 2. البحث عنه داخل بيانات الـ JSON المخفية في الصفحة
            json_matches = re.findall(r'"h5"\s*:\s*"([^"]+)"', html_content)
            if json_matches:
                clean_link = json_matches[0].replace('\\/', '/')
                if '.m3u8' in clean_link:
                    new_expiry = extract_timestamp(clean_link)
                    return clean_link, new_expiry

    except Exception as e:
        print(f"Error fetching target {source_page_url}: {e}")
        
    return None, None

def monitor_links():
    print("Link sniper script is running and monitoring targets...")
    while True:
        try:
            with open(JSON_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            current_time = time.time()
            updated = False
            
            for item in data:
                for source in item.get('sources', []):
                    current_link = source.get('src', '')
                    
                    # تحديث وقت الانتهاء الحالي من الرابط نفسه
                    expires_at = extract_timestamp(current_link)
                    source['expires_at'] = expires_at
                    
                    time_left = expires_at - current_time
                    
                    # لو الرابط هينتهي خلال أقل من 5 دقائق (300 ثانية)
                    if time_left < 300:
                        page_url = source.get('source_page_url', '')
                        if page_url:
                            print(f"Target expiring soon for [{item['title']}]. Sniffing new link...")
                            new_link, new_expiry = fetch_fresh_link(page_url)
                            
                            if new_link:
                                source['src'] = new_link
                                source['expires_at'] = new_expiry
                                updated = True
                                print(f"Successfully updated link for: {item['title']}")
            
            if updated:
                with open(JSON_FILE, 'w', encoding='utf-8') as f:
                    json.dump(data, f, ensure_ascii=False, indent=2)
                print("links.json database updated successfully.")
                
        except Exception as e:
            print(f"Loop error: {e}")
            
        time.sleep(60) # فحص الأهداف كل دقيقة

if __name__ == '__main__':
    monitor_links()

