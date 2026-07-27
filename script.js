// =========================================================================================================================
// [TAG: DATABASE] قاعدة بيانات الأفلام والروابط (مع إضافة تصنيف Genre لكل عنصر)
// =========================================================================================================================

const moviesDatabase = [
    { id: 4, title: "مثال سيرفر VidAPI (IMDB)", desc: "مثال تطبيقي لتشغيل فيلم باستخدام الـ ID الخاص بـ IMDB عبر سيرفر الاستضافة VidAPI", category: "افلام", genre: "أكشن", poster: "https://via.placeholder.com/800x450", likes: 45, comments: [], sources: [{ label: "سيرفر VidAPI", src: "https://vaplayer.ru/embed/movie/tt23779058" }] },
    { id: 5, title: "مثال سيرفر VidAPI (TMDB)", desc: "مثال تطبيقي لتشغيل فيلم باستخدام الـ ID الخاص بـ TMDB عبر سيرفر الاستضافة VidAPI", category: "افلام", genre: "خيال علمي", poster: "https://via.placeholder.com/800x450", likes: 20, comments: [], sources: [{ label: "سيرفر VidAPI", src: "https://vaplayer.ru/embed/movie/1147301" }] },
    
    { id: 6, title: "عنوان الفيديو 6", desc: "وصف الفيديو هنا...", category: "افلام", genre: "أكشن", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 7, title: "عنوان الفيديو 7", desc: "وصف الفيديو هنا...", category: "مسلسلات", genre: "دراما", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 8, title: "عنوان الفيديو 8", desc: "وصف الفيديو هنا...", category: "افلام", genre: "رعب", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 9, title: "عنوان الفيديو 9", desc: "وصف الفيديو هنا...", category: "افلام", genre: "كوميدي", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 10, title: "عنوان الفيديو 10", desc: "وصف الفيديو هنا...", category: "افلام", genre: "أكشن", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 11, title: "عنوان الفيديو 11", desc: "وصف الفيديو هنا...", category: "افلام", genre: "دراما", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 12, title: "عنوان الفيديو 12", desc: "وصف الفيديو هنا...", category: "افلام", genre: "رعب", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 13, title: "عنوان الفيديو 13", desc: "وصف الفيديو هنا...", category: "افلام", genre: "خيال علمي", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 14, title: "عنوان الفيديو 14", desc: "وصف الفيديو هنا...", category: "افلام", genre: "أكشن", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 15, title: "عنوان الفيديو 15", desc: "وصف الفيديو هنا...", category: "افلام", genre: "كوميدي", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 16, title: "عنوان الفيديو 16", desc: "وصف الفيديو هنا...", category: "افلام", genre: "أكشن", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 17, title: "عنوان الفيديو 17", desc: "وصف الفيديو هنا...", category: "افلام", genre: "دراما", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 18, title: "عنوان الفيديو 18", desc: "وصف الفيديو هنا...", category: "افلام", genre: "رعب", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 19, title: "عنوان الفيديو 19", desc: "وصف الفيديو هنا...", category: "افلام", genre: "خيال علمي", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 20, title: "عنوان الفيديو 20", desc: "وصف الفيديو هنا...", category: "افلام", genre: "أكشن", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 21, title: "عنوان الفيديو 21", desc: "وصف الفيديو هنا...", category: "افلام", genre: "كوميدي", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 22, title: "عنوان الفيديو 22", desc: "وصف الفيديو هنا...", category: "افلام", genre: "أكشن", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 23, title: "عنوان الفيديو 23", desc: "وصف الفيديو هنا...", category: "افلام", genre: "دراما", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 24, title: "عنوان الفيديو 24", desc: "وصف الفيديو هنا...", category: "افلام", genre: "رعب", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 25, title: "عنوان الفيديو 25", desc: "وصف الفيديو هنا...", category: "افلام", genre: "خيال علمي", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 26, title: "عنوان الفيديو 26", desc: "وصف الفيديو هنا...", category: "افلام", genre: "أكشن", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 27, title: "عنوان الفيديو 27", desc: "وصف الفيديو هنا...", category: "افلام", genre: "كوميدي", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 28, title: "عنوان الفيديو 28", desc: "وصف الفيديو هنا...", category: "افلام", genre: "أكشن", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 29, title: "عنوان الفيديو 29", desc: "وصف الفيديو هنا...", category: "افلام", genre: "دراما", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 30, title: "عنوان الفيديو 30", desc: "وصف الفيديو هنا...", category: "افلام", genre: "رعب", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 31, title: "عنوان الفيديو 31", desc: "وصف الفيديو هنا...", category: "افلام", genre: "خيال علمي", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] },
    { id: 32, title: "عنوان الفيديو 32", desc: "وصف الفيديو هنا...", category: "افلام", genre: "أكشن", poster: "https://via.placeholder.com/800x450", likes: 0, comments: [], sources: [{ label: "سيرفر 1", src: "ضع_الرابط_هنا" }] }
];

// =========================================================================
// [TAG: GLOBAL VARIABLES] المتغيرات العامة للنظام
// =========================================================================
let currentUser = null; 
let currentVideoId = null;
let favorites = JSON.parse(localStorage.getItem('myflix_favorites')) || [];
let likesData = JSON.parse(localStorage.getItem('myflix_likes')) || {}; 
let continueWatching = JSON.parse(localStorage.getItem('myflix_continue')) || {};
let currentVideoSrc = ""; 
let hlsPlayer = null;

if (!history.state) {
    history.replaceState({ view: 'home' }, '');
}

window.addEventListener('popstate', function(event) {
    if (event.state) {
        if (event.state.view === 'player' && event.state.movie) {
            openPlayer(event.state.movie, true);
        } else if (event.state.view === 'about') {
            showAboutUs(null, true);
        } else {
            showHomeView(true);
        }
    } else {
        showHomeView(true);
    }
});

// =========================================================================
// [TAG: UI NOTIFICATIONS] وظيفة الإشعارات السريعة (Toast)
// =========================================================================
function showToast(message) {
    const toast = document.getElementById("custom-toast");
    const msgEl = document.getElementById("toast-msg");
    msgEl.innerText = message;
    
    toast.className = "show";
    setTimeout(function() {
        toast.className = toast.className.replace("show", "");
    }, 3500);
}

// =========================================================================
// [TAG: AUTHENTICATION] نظام تسجيل الدخول عبر حساب Google
// =========================================================================
function handleCredentialResponse(response) {
    const responsePayload = parseJwt(response.credential);
    const googleId = responsePayload.sub;
    const defaultUsername = "@" + responsePayload.name.replace(/\s+/g, '').toLowerCase() + Math.floor(Math.random() * 1000);
    const savedProfile = JSON.parse(localStorage.getItem('myflix_user_' + googleId));

    currentUser = {
        id: googleId,
        name: responsePayload.name,
        username: savedProfile ? savedProfile.username : defaultUsername,
        picture: responsePayload.picture
    };

    updateUserProfileUI();
    showToast("تم تسجيل الدخول بنجاح، أهلاً بك " + currentUser.name);
}

function updateUserProfileUI() {
    document.getElementById('google-signin-wrapper').style.display = 'none';
    const profileBox = document.getElementById('userProfileBox');
    document.getElementById('userAvatar').src = currentUser.picture;
    document.getElementById('userName').innerText = currentUser.name;
    document.getElementById('userHandle').innerText = currentUser.username;
    profileBox.style.display = 'flex';
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('0' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

// =========================================================================
// [TAG: PROFILE MODAL] إدارة نافذة تعديل البروفايل
// =========================================================================
function openProfileModal() {
    if (!currentUser) return;
    document.getElementById('editUsernameInput').value = currentUser.username;
    document.getElementById('profileModal').classList.add('active');
}

function closeProfileModal() {
    document.getElementById('profileModal').classList.remove('active');
}

function saveProfileChanges() {
    const newUsername = document.getElementById('editUsernameInput').value.trim();
    if (!newUsername) {
        showToast("يجب إدخال اسم مستخدم صحيح!");
        return;
    }

    currentUser.username = newUsername.startsWith('@') ? newUsername : '@' + newUsername;
    localStorage.setItem('myflix_user_' + currentUser.id, JSON.stringify({ username: currentUser.username }));
    
    updateUserProfileUI();
    closeProfileModal();
    showToast("تم تحديث اسم المستخدم بنجاح!");
    
    if(currentVideoId) {
        const movie = moviesDatabase.find(m => m.id === currentVideoId);
        if(movie) renderComments(movie.comments);
    }
}

// =========================================================================
// [TAG: LIKES & FAVORITES] نظام الإعجابات والمفضلة
// =========================================================================
function toggleFavorite(movieId, event) {
    if(event) event.stopPropagation();
    if (!currentUser) {
        showToast("عذراً، يجب تسجيل الدخول بحساب جوجل أولاً لكي تتمكن من حفظ الفيديوهات.");
        return;
    }

    const index = favorites.indexOf(movieId);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast("تم إزالة الفيديو من المفضلة.");
    } else {
        favorites.push(movieId);
        showToast("تم حفظ الفيديو في المفضلة بنجاح!");
    }
    localStorage.setItem('myflix_favorites', JSON.stringify(favorites));
    renderVideos(moviesDatabase, "movies-list");
    if(currentVideoId === movieId) updatePlayerButtonsState();
}

function toggleLike(movieId, event) {
    if(event) event.stopPropagation();
    if (!currentUser) {
        showToast("يجب تسجيل الدخول أولاً للإعجاب بالفيديو!");
        return;
    }

    if (!likesData[movieId]) likesData[movieId] = [];
    const userIndex = likesData[movieId].indexOf(currentUser.id);
    const movie = moviesDatabase.find(m => m.id === movieId);

    if (userIndex > -1) {
        likesData[movieId].splice(userIndex, 1);
        movie.likes--;
        showToast("تم إزالة الإعجاب.");
    } else {
        likesData[movieId].push(currentUser.id);
        movie.likes++;
        showToast("تم تسجيل إعجابك بالفيديو!");
    }

    localStorage.setItem('myflix_likes', JSON.stringify(likesData));
    renderVideos(moviesDatabase, "movies-list");
    if(currentVideoId === movieId) updatePlayerButtonsState();
}

function toggleFavoriteCurrentVideo() {
    if(currentVideoId) toggleFavorite(currentVideoId, null);
}

function toggleLikeCurrentVideo() {
    if(currentVideoId) toggleLike(currentVideoId, null);
}

function updatePlayerButtonsState() {
    const movie = moviesDatabase.find(m => m.id === currentVideoId);
    if(!movie) return;

    const isFav = favorites.includes(movie.id);
    const favBtn = document.getElementById('playerFavBtn');
    const favText = document.getElementById('playerFavText');
    if (isFav) {
        favBtn.classList.add('active');
        favText.innerText = "محفوظ";
    } else {
        favBtn.classList.remove('active');
        favText.innerText = "حفظ";
    }

    const likedUsers = likesData[movie.id] || [];
    const isLiked = currentUser && likedUsers.includes(currentUser.id);
    const likeBtn = document.getElementById('playerLikeBtn');
    document.getElementById('playerLikeCount').innerText = movie.likes;
    if (isLiked) {
        likeBtn.classList.add('active');
    } else {
        likeBtn.classList.remove('active');
    }
}

// =========================================================================
// [TAG: SHARE & THEATER MODE] المشاركة ووضع السينما (تعتمد على أزرار منفصلة)
// =========================================================================
async function shareCurrentVideo() {
    const movie = moviesDatabase.find(m => m.id === currentVideoId);
    if (!movie) {
        showToast("يرجى اختيار فيديو أولاً لمشاركته!");
        return;
    }

    const shareData = {
        title: movie.title,
        text: `شاهد ${movie.title} على MovieHub!`,
        url: window.location.href
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
            showToast("تمت مشاركة الفيديو بنجاح!");
        } else {
            showToast("عذراً، متصفحك لا يدعم خاصية المشاركة.");
        }
    } catch (error) {
        if (error.name !== "AbortError") {
            showToast("حدث خطأ أثناء المشاركة.");
        }
    }
}

function openTheaterMode() {
    const overlay = document.getElementById("theaterOverlay");
    const container = document.getElementById("playerContainer");
    const closeBtn = document.getElementById("theaterCloseBtn");

    if (overlay) overlay.classList.add("active");
    if (container) container.classList.add("theater-mode");
    if (closeBtn) closeBtn.style.display = "inline-flex";
}

function closeTheaterMode() {
    const overlay = document.getElementById("theaterOverlay");
    const container = document.getElementById("playerContainer");
    const closeBtn = document.getElementById("theaterCloseBtn");

    if (overlay) overlay.classList.remove("active");
    if (container) container.classList.remove("theater-mode");
    if (closeBtn) closeBtn.style.display = "none";
}

// =========================================================================
// [TAG: COMMENTS] نظام إدارة التعليقات
// =========================================================================
function addComment() {
    if (!currentUser) {
        showToast("يجب تسجيل الدخول أولاً بحساب جوجل لتتمكن من كتابة التعليقات!");
        return;
    }

    const input = document.getElementById('commentInput');
    const text = input.value.trim();
    if(!text) return;

    const movie = moviesDatabase.find(m => m.id === currentVideoId);
    if(movie) {
        const commentObj = {
            id: Date.now(),
            userId: currentUser.id,
            name: currentUser.name,
            username: currentUser.username,
            avatar: currentUser.picture,
            text: text
        };
        movie.comments.unshift(commentObj);
        input.value = "";
        renderComments(movie.comments);
        showToast("تم إضافة تعليقك بنجاح.");
    }
}

function renderComments(commentsArray) {
    const container = document.getElementById('commentsList');
    container.innerHTML = "";
    
    if(commentsArray.length === 0) {
        container.innerHTML = "<div style='color: #666; font-size: 13px; padding: 10px;'>لا توجد تعليقات بعد. كن أول من يعلق!</div>";
        return;
    }

    commentsArray.forEach(c => {
        const item = document.createElement('div');
        item.className = 'comment-item';
        item.innerHTML = `
            <div class="comment-left">
                <img src="${c.avatar}" class="comment-avatar" alt="user">
                <div class="comment-content">
                    <div class="comment-user">${c.username}</div>
                    <div class="comment-text">${c.text}</div>
                </div>
            </div>
        `;
        container.appendChild(item);
    });
}

// =========================================================================
// [TAG: NAVIGATION, GENRE FILTER & THEME] التنقل والتصنيفات
// =========================================================================
function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
    const overlay = document.getElementById("sidebarOverlay");
    
    if (sidebar.style.width === "280px") {
        sidebar.style.width = "0";
        overlay.classList.remove("active");
    } else {
        sidebar.style.width = "280px";
        overlay.classList.add("active");
    }
}

function changeTheme(pageType) {
    const root = document.documentElement;
    if (pageType === 'افلام') {
        root.style.setProperty('--bg-color', '#120505'); 
        root.style.setProperty('--accent-color', '#e50914'); 
        root.style.setProperty('--accent-glow', 'rgba(229, 9, 20, 0.4)');
    } else if (pageType === 'مسلسلات') {
        root.style.setProperty('--bg-color', '#050a14'); 
        root.style.setProperty('--accent-color', '#0078ff'); 
        root.style.setProperty('--accent-glow', 'rgba(0, 120, 255, 0.4)');
    } else {
        root.style.setProperty('--bg-color', '#0d0e12');
        root.style.setProperty('--accent-color', '#ffa31a'); 
        root.style.setProperty('--accent-glow', 'rgba(255, 163, 26, 0.35)');
    }
}

function normalizeText(text) {
    return text.replace(/[أإآ]/g, 'ا').toLowerCase();
}

function handleSearch() {
    const query = normalizeText(document.getElementById("searchInput").value);
    const filtered = moviesDatabase.filter(movie => normalizeText(movie.title).includes(query));
    showHomeView(true); 
    renderVideos(filtered, "movies-list");
    
    const titleEl = document.getElementById("home-title");
    titleEl.innerHTML = query ? 
        `<img src="https://img.icons8.com/3d-fluency/94/search.png" class="icon-3d-header" alt="search"> نتائج البحث...` : 
        `<img src="https://img.icons8.com/3d-fluency/94/fire.png" class="icon-3d-header" alt="fire"> أحدث الإضافات`;
}

function filterGenre(genreName, btnElement) {
    document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');

    const filtered = genreName === 'الكل' ? moviesDatabase : moviesDatabase.filter(m => m.genre === genreName);
    renderVideos(filtered, "movies-list");
}

function filterCategory(category, element, isBackNav = false) {
    document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
    if(element) element.classList.add('active');
    
    let filtered = category === 'الكل' ? moviesDatabase : moviesDatabase.filter(m => m.category === category);
    
    if (category === 'المفضلة') {
        filtered = moviesDatabase.filter(m => favorites.includes(m.id));
    }

    showHomeView(isBackNav);
    renderVideos(filtered, "movies-list");
    
    const titleEl = document.getElementById("home-title");
    let iconSrc = "https://img.icons8.com/3d-fluency/94/fire.png";
    if (category === 'افلام') iconSrc = "https://img.icons8.com/3d-fluency/94/clapperboard.png";
    if (category === 'مسلسلات') iconSrc = "https://img.icons8.com/3d-fluency/94/tv.png";
    if (category === 'المفضلة') iconSrc = "https://img.icons8.com/3d-fluency/94/star.png";

    titleEl.innerHTML = `<img src="${iconSrc}" class="icon-3d-header" alt="icon"> ${category}`;
    changeTheme(category);
    
    if (document.getElementById("mySidebar").style.width === "280px") {
        toggleSidebar(); 
    }
}

function showSkeletonLoader(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    for(let i=0; i<4; i++) {
        const sk = document.createElement("div");
        sk.className = "skeleton-card";
        container.appendChild(sk);
    }
}

function renderVideos(moviesArray, containerId) {
    showSkeletonLoader(containerId);
    
    setTimeout(() => {
        const container = document.getElementById(containerId);
        container.innerHTML = ""; 
        
        if(moviesArray.length === 0) {
            container.innerHTML = "<div class='no-results'>عذراً، لم يتم العثور على أي فيديو هنا.</div>";
            return;
        }

        moviesArray.forEach(movie => {
            const card = document.createElement("div");
            card.className = "video-card";
            card.onclick = () => openPlayer(movie); 

            let progressBarHtml = "";
            if (continueWatching[movie.id]) {
                const percent = continueWatching[movie.id].percent || 0;
                progressBarHtml = `
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width: ${percent}%;"></div>
                    </div>`;
            }

            card.innerHTML = `
                <div style="position: relative;">
                    <img src="${movie.poster}" class="video-thumbnail" alt="${movie.title}">
                    ${progressBarHtml}
                </div>
                <div class="video-info">
                    <div class="video-details">
                        <div class="video-title">${movie.title}</div>
                        <div class="video-desc">${movie.desc}</div>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }, 250);
}

function renderContinueWatching() {
    const ids = Object.keys(continueWatching);
    const section = document.getElementById("continueWatchingSection");
    
    if (ids.length === 0) {
        section.style.display = "none";
        return;
    }

    section.style.display = "block";
    const movies = moviesDatabase.filter(m => ids.includes(m.id.toString()));
    renderVideos(movies, "continue-watching-list");
}

function showHomeView(isBackNav = false) {
    if (!isBackNav && history.state?.view !== 'home') {
        history.pushState({ view: 'home' }, '');
    }

    closeTheaterMode(); // إغلاق وضع السينما إذا كان مفعلاً عند العودة للرئيسية
    changeTheme('الكل');

    document.getElementById("home-view").style.display = "block";
    document.getElementById("player-view").style.display = "none";
    document.getElementById("about-view").style.display = "none";
    
    const player = document.getElementById("main-player");
    const iframe = document.getElementById("main-iframe");
    player.pause();
    player.src = "";
    iframe.src = "";
    if (hlsPlayer) {
        hlsPlayer.destroy();
    }
    document.getElementById("playerPoster").style.display = "flex";
    renderContinueWatching();
}

// =========================================================================
// [TAG: VIDEO PLAYER LOGIC] المشغل وحفظ التقدم تلقائياً
// =========================================================================
function openPlayer(movie, isBackNav = false) {
    currentVideoId = movie.id;
    currentVideoSrc = movie.sources[0].src;

    if (!isBackNav) {
        history.pushState({ view: 'player', movie: movie }, '');
    }

    closeTheaterMode(); // إعادة ضبط وضع السينما عند فتح فيديو جديد
    changeTheme(movie.category);
    
    document.getElementById("home-view").style.display = "none";
    document.getElementById("about-view").style.display = "none";
    document.getElementById("player-view").style.display = "block";
    
    const posterEl = document.getElementById("playerPoster");
    posterEl.style.backgroundImage = `url('${movie.poster}')`;
    posterEl.style.display = "flex";

    document.getElementById("player-title").innerText = movie.title;
    document.getElementById("player-desc").innerText = movie.desc;
    
    renderQualityButtons(movie.sources);

    updatePlayerButtonsState();
    renderComments(movie.comments);

    const forYou = moviesDatabase.filter(m => m.id !== movie.id);
    renderVideos(forYou, "for-you-list");
    
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

function renderQualityButtons(sources) {
    const container = document.getElementById("qualityButtonsContainer");
    container.innerHTML = "";

    sources.forEach((source, index) => {
        const btn = document.createElement("button");
        btn.className = `quality-btn ${index === 0 ? 'active' : ''}`;
        btn.innerText = source.label;
        btn.onclick = () => changeVideoQuality(source.src, btn);
        container.appendChild(btn);
    });
}

function changeVideoQuality(newSrc, clickedBtn) {
    currentVideoSrc = newSrc;
    
    document.querySelectorAll('.quality-btn').forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');

    const posterEl = document.getElementById("playerPoster");
    if (posterEl.style.display === "none") {
        startVideoPlayback();
    }
    showToast("تم تغيير السيرفر إلى: " + clickedBtn.innerText);
}

function startVideoPlayback() {
    const posterEl = document.getElementById("playerPoster");
    const player = document.getElementById("main-player");
    const iframe = document.getElementById("main-iframe");
    
    posterEl.style.display = "none";

    player.ontimeupdate = () => {
        if (player.duration) {
            const percent = (player.currentTime / player.duration) * 100;
            continueWatching[currentVideoId] = {
                time: player.currentTime,
                percent: percent
            };
            localStorage.setItem('myflix_continue', JSON.stringify(continueWatching));
        }
    };

    if (currentVideoSrc.includes("iframe") || currentVideoSrc.includes("http") && !currentVideoSrc.includes(".mp4") && !currentVideoSrc.includes(".m3u8") && !currentVideoSrc.includes("video-nss")) {
        if (hlsPlayer) hlsPlayer.destroy();
        player.pause();
        player.style.display = "none";
        
        iframe.src = currentVideoSrc;
        iframe.style.display = "block";
    } else {
        iframe.style.display = "none";
        iframe.src = "";
        player.style.display = "block";

        const savedData = continueWatching[currentVideoId];
        const startAt = savedData ? savedData.time : 0;

        if (currentVideoSrc.includes(".m3u8")) {
            if (Hls.isSupported()) {
                if (hlsPlayer) hlsPlayer.destroy();
                hlsPlayer = new Hls();
                hlsPlayer.loadSource(currentVideoSrc);
                hlsPlayer.attachMedia(player);
                hlsPlayer.on(Hls.Events.MANIFEST_PARSED, function() {
                    if (startAt) player.currentTime = startAt;
                    player.play();
                });
            } else if (player.canPlayType('application/vnd.apple.mpegurl')) {
                player.src = currentVideoSrc;
                player.addEventListener('loadedmetadata', function() {
                    if (startAt) player.currentTime = startAt;
                    player.play();
                });
            }
        } else {
            if (hlsPlayer) hlsPlayer.destroy();
            player.src = currentVideoSrc;
            if (startAt) player.currentTime = startAt;
            player.play();
        }
    }
}

function showAboutUs(element, isBackNav = false) {
    if (!isBackNav && history.state?.view !== 'about') {
        history.pushState({ view: 'about' }, '');
    }

    closeTheaterMode();
    document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
    if(element) element.classList.add('active');
    document.getElementById("home-view").style.display = "none";
    document.getElementById("player-view").style.display = "none";
    document.getElementById("about-view").style.display = "block";
    if (document.getElementById("mySidebar").style.width === "280px") {
        toggleSidebar();
    }
}

// التشغيل المبدئي للواجهة
renderContinueWatching();
renderVideos(moviesDatabase, "movies-list");

