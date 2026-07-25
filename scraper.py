import json
import time

JSON_FILE = 'links.json'

def fetch_new_link(source_page_url):
    # ضع هنا كود السحب الخاص بك (مثلاً باستخدام requests أو BeautifulSoup) لاستخراج الرابط الجديد
    new_link = "https://new-direct-link.com/stream.m3u8"
    new_expiry = time.time() + 3600  # مثال: الرابط الجديد صالح لمدة ساعة من الآن
    return new_link, new_expiry

def monitor_links():
    print("Link monitoring service started on Termux...")
    while True:
        try:
            with open(JSON_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            current_time = time.time()
            updated = False
            
            # المرور على جميع الأفلام/المسلسلات في القائمة
            for item in data:
                for source in item.get('sources', []):
                    # التحقق مما إذا كان السيرفر يحتوي على وقت انتهاء
                    if 'expires_at' in source:
                        time_left = source['expires_at'] - current_time
                        
                        # لو باقي أقل من 5 دقائق (300 ثانية) أو انتهى الوقت
                        if time_left < 300:
                            print(f"Updating link for: {item['title']} [{source['label']}]...")
                            page_url = source.get('source_page_url', '')
                            
                            new_link, new_expiry = fetch_new_link(page_url)
                            
                            # تحديث القيم داخل القاموس
                            source['src'] = new_link
                            source['expires_at'] = new_expiry
                            updated = True
            
            # حفظ التحديثات في ملف links.json إذا حدث تغير
            if updated:
                with open(JSON_FILE, 'w', encoding='utf-8') as f:
                    json.dump(data, f, ensure_ascii=False, indent=2)
                print("links.json updated and saved successfully!")
                
        except Exception as e:
            print(f"Error occurred: {e}")
            
        # فحص الروابط كل دقيقة
        time.sleep(60)

if __name__ == '__main__':
    monitor_links()

