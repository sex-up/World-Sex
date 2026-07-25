import json
import requests
from bs4 import BeautifulSoup

# اسم ملف الروابط
JSON_FILE = 'links.json'

def get_fresh_link_from_source(movie_id):
    """
    هنا تحط اللوجيك (الكود) الخاص بك لجلب الرابط الجديد لكل فيلم.
    مثلاً: لو بتدخل على موقع معين تسحب منه الرابط أو بتستخرج التوكن.
    """
    try:
        # مثال افتراضي: لو بتدخل على صفحة المصدر الخاصة بالفيلم
        # target_url = f"https://example.com/watch/{movie_id}"
        # headers = {'User-Agent': 'Mozilla/5.0'}
        # response = requests.get(target_url, headers=headers)
        # soup = BeautifulSoup(response.text, 'html.parser')
        
        # استخراج الرابط الجديد من الصفحة (ح حسب تصميم الموقع اللي بتسحب منه)
        # new_src = soup.find('source')['src'] 
        
        # حالياً كمثال توضيحي (استبدلها بطريقتك الفعلية):
        new_src = "https://video-nss.xhpingcdn.com/new_token_link_here.m3u8"
        return new_src
        
    except Exception as e:
        print(f"خطأ أثناء جلب الرابط للفيلم {movie_id}: {e}")
        return None

def update_streaming_links():
    # 1. قراءة ملف links.json الحالي
    try:
        with open(JSON_FILE, 'r', encoding='utf-8') as f:
            movies = json.load(f)
    except FileNotFoundError:
        print("ملف links.json غير موجود!")
        return

    updated_count = 0

    # 2. المرور على كل فيلم وتحديث رابطه
    for movie in movies:
        movie_id = movie['id']
        print(f"جاري فحص وتحديث فيلم: {movie['title']}...")
        
        # استدعاء دالة جلب الرابط الجديد
        new_link = get_fresh_link_from_source(movie_id)
        
        if new_link:
            # تحديث أول سيرفر في قائمة الـ sources بالرابط الجديد
            if 'sources' in movie and len(movie['sources']) > 0:
                movie['sources'][0]['src'] = new_link
                updated_count += 1

    # 3. حفظ التعديلات الجديدة في ملف links.json
    with open(JSON_FILE, 'w', encoding='utf-8') as f:
        json.dump(movies, f, ensure_ascii=False, indent=4)
    
    print(f"تم الانتهاء! تم تحديث روابط {updated_count} فيلم بنجاح.")

if __name__ == "__main__":
    update_streaming_links()
