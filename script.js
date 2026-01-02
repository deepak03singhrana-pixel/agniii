document.addEventListener('DOMContentLoaded', () => {
    loadSavedChanges();
    initMobileMenu();
    initThemeLogic();
    initSlideshows();
    initModalDelegation();
    createLogoParticles();
    initCMS();
    initLiveSearch(); 
    initCardClickLogic();
    initLoginState(); 
});

/* --- RICH DESTINATION DATA (UTTARAKHAND EDITION) --- */
const destinationsData = {
   "Sari Village": {
        photos: ["images/sari1.jpg", "images/sari2.jpg", "images/sari3.jpg", "images/sari4.jpg", "images/sari5.jpg", "images/sari6.jpg", "images/sari7.jpg", "images/sari8.jpg", "images/sari9.jpg"],
        description: "Sari is a scenic hamlet in the Rudraprayag district, known as the base camp for the Deoriatal Lake trek.",
        travel: { flight: "Jolly Grant (Dehradun)", train: "Rishikesh", car: "Cab from Rishikesh (6-7 hrs)." },
        reviews: [{ user: "Amit V.", stars: 5, text: "Peaceful village." }]
    },
        description: "Sari is a scenic hamlet in the Rudraprayag district, known as the base camp for the Deoriatal Lake trek. Surrounded by oak and rhododendron forests.",
        travel: { flight: "Jolly Grant Airport (Dehradun)", train: "Rishikesh/Haridwar", car: "Cab from Rishikesh (6-7 hrs)." },
        reviews: [{ user: "Amit V.", stars: 5, text: "Peaceful village with amazing hospitality." }, { user: "Riya S.", stars: 4, text: "Simple homestays, great food." }]
    },
    "Chopta Valley": {
        photos: [
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e", // Mountains (Alps repurposed)
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
            "https://images.unsplash.com/photo-1605540436563-5bca919ae766"
        ],
        description: "Known as the 'Mini Switzerland of India', Chopta is the starting point for the Tungnath and Chandrashila treks. Famous for its meadows and snow-capped views.",
        travel: { flight: "Dehradun (DED)", train: "Rishikesh", car: "Drive via Rudraprayag." },
        reviews: [{ user: "Rahul K.", stars: 5, text: "Camping here is a must!" }]
    },
    "Tungnath Temple": {
        photos: ["https://images.unsplash.com/photo-1483729558449-99ef09a8c325", "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed92"],
        description: "The highest Shiva temple in the world, located at an altitude of 3,680m. It is one of the Panch Kedars and offers spiritual solace.",
        travel: { flight: "Dehradun", train: "Haridwar", car: "Trek 4km from Chopta." },
        reviews: [{ user: "Shivani", stars: 5, text: "Divine energy and tough trek." }]
    },
    "Chandrashila Peak": {
        photos: ["https://images.unsplash.com/photo-1476610182048-b716b8518aae", "https://images.unsplash.com/photo-1516637090014-cb1ab780165e"],
        description: "Chandrashila implies 'Moon Rock'. It offers a majestic 360-degree view of the Himalayas, including Nanda Devi, Trishul, and Chaukhamba peaks.",
        travel: { flight: "Dehradun", train: "Rishikesh", car: "Trek 1km from Tungnath." },
        reviews: [{ user: "Arjun", stars: 5, text: "Sunrise view is unbeatable." }]
    },
    "Deoriatal Lake": {
        photos: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4"],
        description: "A pristine emerald lake perched at 2,438 meters, famous for its reflection of the Chaukhamba peaks on its crystal clear water.",
        travel: { flight: "Dehradun", train: "Haridwar", car: "Trek 2.5km from Sari Village." },
        reviews: [{ user: "Neha", stars: 5, text: "Perfect camping spot." }]
    },
    "Auli Ski Resort": {
        photos: ["https://images.unsplash.com/photo-1493246507139-91e8fad9978e"],
        description: "Auli is a premier ski destination in the Chamoli district, offering panoramic views of the Himalayan peaks and lush oak forests.",
        travel: { flight: "Dehradun", train: "Rishikesh", car: "Cable car from Joshimath." },
        reviews: [{ user: "Vikram", stars: 4, text: "Skiing was fun but cold." }]
    },
    "Valley of Flowers": {
        photos: ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf"],
        description: "A UNESCO World Heritage Site, known for its meadows of endemic alpine flowers and the variety of flora.",
        travel: { flight: "Dehradun", train: "Rishikesh", car: "Trek from Govindghat." },
        reviews: [{ user: "Priya", stars: 5, text: "Colorful paradise." }]
    },
    "Rishikesh": {
        photos: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34"],
        description: "The Yoga Capital of the World and gateway to the Garhwal Himalayas. Famous for Ganga Aarti, rafting, and spirituality.",
        travel: { flight: "Dehradun (Jolly Grant)", train: "Yog Nagari Rishikesh", car: "Well connected." },
        reviews: [{ user: "Sam", stars: 5, text: "Rafting is thrilling." }]
    },
    "Chopta Camping": {
        photos: ["https://images.unsplash.com/photo-1533692328991-0815989768f2", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"],
        description: "Stay in luxury swiss tents amidst the meadows of Chopta. Bonfire, music, and star gazing included.",
        travel: { flight: "Dehradun", train: "Rishikesh", car: "Drive to campsite." },
        reviews: [{ user: "Group10", stars: 5, text: "Best night sky ever." }]
    },
    "Panch Kedar Trek": {
        photos: ["https://images.unsplash.com/photo-1483729558449-99ef09a8c325"],
        description: "A spiritual trekking journey covering the five shrines of Lord Shiva: Kedarnath, Tungnath, Rudranath, Madhyamaheshwar, and Kalpeshwar.",
        travel: { flight: "Dehradun", train: "Rishikesh", car: "Multiple base camps." },
        reviews: [{ user: "Devotee", stars: 5, text: "Life changing experience." }]
    },
    "default": {
        photos: ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"],
        description: "Explore the mystical Himalayas with AGNIII Travel.",
        travel: { flight: "Jolly Grant (Dehradun)", train: "Rishikesh/Haridwar", car: "Taxis available" },
        reviews: [{ user: "Traveler", stars: 5, text: "Highly recommended!" }]
    }
};

/* --- GLOBAL MODAL FUNCTIONS --- */
window.openDetails = function(title) { openModal(title); }
window.openPhotoGallery = function(title) { openGalleryModal(title); }

// Variables for Details Modal
let currentPhotoList = [], currentPhotoIndex = 0, modalInterval;

// Variables for Gallery Modal (Slideshow)
let galleryPhotos = [];
let galleryIndex = 0;
let galleryInterval;

const elements = { 
    modal: document.getElementById('destination-modal'), 
    modalImg: document.getElementById('modal-main-img'), 
    modalTitle: document.getElementById('modal-title'), 
    modalDesc: document.getElementById('modal-desc'),
    thumbnailContainer: document.getElementById('modal-thumbnails'),
    gmapFrame: document.getElementById('gmap-frame'),
    reviewsContainer: document.getElementById('modal-reviews'),
    modeFlight: document.getElementById('mode-flight'),
    modeTrain: document.getElementById('mode-train'),
    modeCar: document.getElementById('mode-car'),
    
    // Gallery Elements
    galleryModal: document.getElementById('gallery-modal'),
    galleryTitle: document.getElementById('gallery-title'),
    galleryMainImg: document.getElementById('gallery-main-img'),
    galleryThumbsContainer: document.getElementById('gallery-thumbnails')
};

// --- MODAL & GALLERY FUNCTIONS (UNCHANGED LOGIC) ---
function openModal(title) {
    const data = destinationsData[title] || destinationsData["default"];
    elements.modalTitle.innerText = title;
    elements.modalDesc.innerText = data.description;
    elements.modeFlight.innerText = data.travel.flight;
    elements.modeTrain.innerText = data.travel.train;
    elements.modeCar.innerText = data.travel.car;

    const mapQuery = encodeURIComponent(title + " Uttarakhand");
    elements.gmapFrame.src = `https://maps.google.com/maps?q=${mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    elements.reviewsContainer.innerHTML = '';
    data.reviews.forEach(r => {
        const stars = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
        const div = document.createElement('div');
        div.className = 'review-item';
        div.innerHTML = `<div class="review-user">${r.user} <span class="review-stars">${stars}</span></div><div class="review-text">"${r.text}"</div>`;
        elements.reviewsContainer.appendChild(div);
    });

    currentPhotoList = data.photos;
    currentPhotoIndex = 0;
    updateModalImage();
    
    elements.thumbnailContainer.innerHTML = '';
    currentPhotoList.forEach((url, idx) => {
        const thumb = document.createElement('img');
        thumb.src = url;
        thumb.classList.add('thumb');
        thumb.onclick = () => { currentPhotoIndex = idx; updateModalImage(); resetModalTimer(); };
        elements.thumbnailContainer.appendChild(thumb);
    });

    elements.modal.style.display = "flex";
    startModalTimer();
}

function openGalleryModal(title) {
    const data = destinationsData[title] || destinationsData["default"];
    if(elements.galleryTitle) elements.galleryTitle.innerText = title;
    galleryPhotos = data.photos;
    galleryIndex = 0;

    elements.galleryThumbsContainer.innerHTML = '';
    galleryPhotos.forEach((url, idx) => {
        const thumb = document.createElement('img');
        thumb.src = url;
        thumb.className = 'gallery-thumb';
        thumb.onclick = () => {
            galleryIndex = idx;
            updateGalleryDisplay();
            resetGalleryTimer();
        };
        elements.galleryThumbsContainer.appendChild(thumb);
    });

    updateGalleryDisplay();
    if(elements.galleryModal) elements.galleryModal.style.display = "flex";
    startGalleryTimer();
}

window.changeGallerySlide = function(step) {
    galleryIndex += step;
    if (galleryIndex >= galleryPhotos.length) galleryIndex = 0;
    if (galleryIndex < 0) galleryIndex = galleryPhotos.length - 1;
    updateGalleryDisplay();
    resetGalleryTimer();
}

function updateGalleryDisplay() {
    if(!elements.galleryMainImg) return;
    elements.galleryMainImg.style.opacity = 0.5;
    setTimeout(() => {
        elements.galleryMainImg.src = galleryPhotos[galleryIndex];
        elements.galleryMainImg.style.opacity = 1;
    }, 200);

    const thumbs = document.querySelectorAll('.gallery-thumb');
    thumbs.forEach((t, i) => {
        if (i === galleryIndex) {
            t.classList.add('active');
            t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            t.classList.remove('active');
        }
    });
}

function startGalleryTimer() {
    clearInterval(galleryInterval);
    galleryInterval = setInterval(() => { window.changeGallerySlide(1); }, 4000);
}

function resetGalleryTimer() { clearInterval(galleryInterval); startGalleryTimer(); }

// --- COMMON & STORAGE FUNCTIONS ---
function initModalDelegation() {
    const closeBtns = document.querySelectorAll('.close-btn');
    closeBtns.forEach(btn => {
        btn.onclick = () => {
            if(elements.modal) elements.modal.style.display = "none";
            if(elements.galleryModal) elements.galleryModal.style.display = "none";
            clearInterval(modalInterval);
            clearInterval(galleryInterval);
        };
    });

    window.onclick = (e) => { 
        if (elements.modal && e.target == elements.modal) { elements.modal.style.display = "none"; clearInterval(modalInterval); }
        if (elements.galleryModal && e.target == elements.galleryModal) { elements.galleryModal.style.display = "none"; clearInterval(galleryInterval); }
    };
}
function updateModalImage() { 
    elements.modalImg.src = currentPhotoList[currentPhotoIndex]; 
    document.querySelectorAll('.thumb').forEach((t, i) => t.classList.toggle('active', i === currentPhotoIndex)); 
}
function startModalTimer() { 
    clearInterval(modalInterval); 
    modalInterval = setInterval(() => { currentPhotoIndex = (currentPhotoIndex + 1) % currentPhotoList.length; updateModalImage(); }, 3000); 
}
function resetModalTimer() { clearInterval(modalInterval); startModalTimer(); }

/* ... [Standard functions: initLiveSearch, initCMS, etc., remain mostly same] ... */
function initLiveSearch() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchDropdown = document.getElementById('search-dropdown');
    
    const getDestinations = () => {
        const cards = document.querySelectorAll('.card');
        let data = [];
        cards.forEach(card => {
            const title = card.querySelector('h3').innerText;
            data.push({ title: title });
        });
        return data;
    };

    if (!searchInput || !searchDropdown) return;
    if (searchForm) searchForm.addEventListener('submit', (e) => e.preventDefault());

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        searchDropdown.innerHTML = ''; 
        if (term.length === 0) {
            searchDropdown.style.display = 'none';
            return;
        }
        const destinations = getDestinations();
        const matches = [...new Set(destinations.map(d => d.title))].filter(title => title.toLowerCase().includes(term));
        if (matches.length > 0) {
            searchDropdown.style.display = 'block';
            matches.forEach(title => {
                const item = document.createElement('div');
                item.innerText = title;
                item.onclick = () => {
                    searchInput.value = title;
                    searchDropdown.style.display = 'none';
                    openModal(title);
                };
                searchDropdown.appendChild(item);
            });
        } else {
            searchDropdown.style.display = 'none';
        }
    });
    document.addEventListener('click', (e) => {
        if (!searchForm.contains(e.target)) searchDropdown.style.display = 'none';
    });
}
const editToggle = document.getElementById('edit-mode-toggle');
let sortables = [];

function initCMS() {
    const panel = document.getElementById('admin-panel');
    if (!panel) return;
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (isAdmin) { panel.style.display = 'flex'; } else { panel.style.display = 'none'; return; }

    if(!editToggle) return;
    editToggle.addEventListener('change', function() {
        const isEditing = this.checked;
        document.body.classList.toggle('editing-active', isEditing);
        sortables.forEach(s => s.option("disabled", !isEditing));
        const editableElements = document.querySelectorAll('.card h3, .card p, .price, .tag');
        editableElements.forEach(el => {
            el.contentEditable = isEditing;
            if(isEditing) el.classList.add('editable-text'); else el.classList.remove('editable-text');
        });
        const images = document.querySelectorAll('.card img');
        images.forEach(img => { if (isEditing) enableImageDrop(img); });
    });
}
function initSortable() {
    const grids = document.querySelectorAll('.grid-container');
    sortables = []; 
    grids.forEach(grid => {
        const sortable = new Sortable(grid, { group: 'shared', animation: 150, disabled: true, ghostClass: 'sortable-ghost' });
        sortables.push(sortable);
    });
}
function enableImageDrop(imgElement) {
    imgElement.addEventListener('dragover', (e) => { e.preventDefault(); });
    imgElement.addEventListener('drop', (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (f) => { imgElement.src = f.target.result; };
            reader.readAsDataURL(file);
        }
    });
}
window.addNewCard = function() {
    const grid = document.querySelector('.grid-container');
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerHTML = `<img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4" alt="New"><div class="card-info"><span class="tag">New</span><h3>New Trek</h3><p>Description.</p><div class="price">₹1000 / night</div><div class="card-actions"><a href="#" class="book-btn">Book Now</a><button class="map-btn" onclick="openDetails('New Trek')"><i class="fas fa-info-circle"></i></button></div></div>`;
    grid.prepend(newCard);
    if(editToggle.checked) { editToggle.checked = false; editToggle.click(); }
};
window.saveChanges = function() {
    try {
        const mainContent = document.getElementById('main-content').innerHTML;
        localStorage.setItem('agniii_layout', mainContent);
        alert('Layout Saved!');
    } catch (e) { alert('Error saving layout: ' + e.message); }
};
function loadSavedChanges() {
    const saved = localStorage.getItem('agniii_layout');
    if (saved) { const main = document.getElementById('main-content'); if(main) main.innerHTML = saved; }
    initSortable();
}
window.clearChanges = function() {
    if(confirm("Reset all layout changes?")) { localStorage.removeItem('agniii_layout'); location.reload(); }
};
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    if (mobileMenu) { mobileMenu.addEventListener('click', () => { navList.classList.toggle('active'); }); }
}
function initSlideshows() {
    const bg1 = document.getElementById('bg-1');
    const bg2 = document.getElementById('bg-2');
    if (bg1 && bg2) {
        const heroImages = ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", "https://images.unsplash.com/photo-1537996194471-e657df975ab4", "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf"];
        let heroIndex = 0;
        let activeBg = 1;
        setInterval(() => {
            heroIndex = (heroIndex + 1) % heroImages.length;
            const nextImg = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${heroImages[heroIndex]}')`;
            if (activeBg === 1) { bg2.style.backgroundImage = nextImg; bg2.style.opacity = 1; bg1.style.opacity = 0; activeBg = 2; } 
            else { bg1.style.backgroundImage = nextImg; bg1.style.opacity = 1; bg2.style.opacity = 0; activeBg = 1; }
        }, 6000);
    }
}
function createLogoParticles() {
    const textSpan = document.querySelector('.logo-text');
    if(!textSpan) return;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    Object.assign(canvas.style, { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1 });
    textSpan.appendChild(canvas);
    let particles = [];
    const resize = () => { canvas.width = textSpan.offsetWidth; canvas.height = textSpan.offsetHeight; };
    window.addEventListener('resize', resize);
    setTimeout(resize, 50);
    const animate = () => {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        const color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        if(particles.length < 20) particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, size: Math.random() * 3, speedY: (Math.random() - 0.5), speedX: (Math.random() - 0.5) });
        particles.forEach((p, i) => {
            p.x += p.speedX; p.y += p.speedY;
            if(p.size > 0.1) p.size -= 0.05; else particles.splice(i, 1);
            ctx.fillStyle = color; ctx.globalAlpha = 0.6;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
        });
        requestAnimationFrame(animate);
    };
    animate();
}
function initThemeLogic() {
    const toggleBtn = document.getElementById('theme-toggle');
    if(localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        if(toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
            toggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }
    const destSelect = document.getElementById('destination-select');
    if(destSelect) {
        destSelect.addEventListener('change', function() {
            // Simple generic theme logic for now
            document.documentElement.style.setProperty('--primary-color', "#FFBF00"); 
        });
    }
}

function initCardClickLogic() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (document.body.classList.contains('editing-active')) return;
            if (e.target.closest('a') || e.target.closest('button')) return;
            const titleElement = this.querySelector('h3');
            if (titleElement) { const title = titleElement.innerText.trim(); openDetails(title); }
        });
    });
}
function initLoginState() {
    const loginBtn = document.querySelector('.btn-login');
    if (!loginBtn) return;
    if (localStorage.getItem('isAdmin') === 'true') {
        loginBtn.textContent = 'Logout'; loginBtn.href = "#"; 
        loginBtn.addEventListener('click', (e) => { e.preventDefault(); localStorage.removeItem('isAdmin'); alert('Logged out successfully!'); window.location.reload(); });
    }
}

/* --- BOOKING LOGIC --- */
window.handleBooking = function(e) {
    e.preventDefault(); 
    const name = document.getElementById('b-name').value;
    const email = document.getElementById('b-email').value;
    const dest = document.getElementById('b-dest').value;
    const date = document.getElementById('b-date').value;

    if (dest === "default") { alert("Please select a valid destination."); return; }

    const newBooking = { id: Date.now(), name: name, email: email, destination: dest, date: date, bookedAt: new Date().toLocaleString() };
    const bookings = JSON.parse(localStorage.getItem('agniii_bookings') || '[]');
    bookings.push(newBooking);

    try {
        localStorage.setItem('agniii_bookings', JSON.stringify(bookings));
        alert(`Success! Trip to ${dest} booked for ${name}.`);
        window.location.href = 'index.html'; 
    } catch (err) { alert("Storage full!"); }
};

window.viewBookings = function() {
    const modal = document.getElementById('destination-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.querySelector('.modal-body'); 
    const modalImg = document.querySelector('.slide-container'); 
    const modalThumbs = document.getElementById('modal-thumbnails'); 

    if (!modal) return;
    const bookings = JSON.parse(localStorage.getItem('agniii_bookings') || '[]');
    
    modalTitle.innerText = "📅 Manage Bookings";
    if(modalImg) modalImg.style.display = 'none';
    if(modalThumbs) modalThumbs.style.display = 'none';

    let html = '';
    if (bookings.length === 0) { html = `<div style="padding:40px; text-align:center;"><h3>No bookings found yet.</h3></div>`; } 
    else {
        html = `<div style="overflow-x:auto;"><table class="booking-table"><thead><tr><th>Name</th><th>Destination</th><th>Date</th><th>Action</th></tr></thead><tbody>`;
        bookings.forEach(b => { html += `<tr><td>${b.name}</td><td>${b.destination}</td><td>${b.date}</td><td><button onclick="deleteBooking(${b.id})" class="btn-delete">Delete</button></td></tr>`; });
        html += `</tbody></table></div><div style="text-align:center; margin-top:20px;"><button onclick="clearAllBookings()" class="book-btn" style="background:#dc3545; color:white;">🗑️ Clear Database</button></div>`;
    }

    const contentDiv = document.createElement('div');
    contentDiv.id = 'temp-booking-view';
    contentDiv.innerHTML = html;
    
    modalBody.style.display = 'none'; 
    modalBody.parentNode.insertBefore(contentDiv, modalBody.nextSibling);
    modal.style.display = "flex";

    const cleanup = () => {
        if(modalImg) modalImg.style.display = 'flex';
        if(modalThumbs) modalThumbs.style.display = 'flex';
        modalBody.style.display = 'grid'; 
        const temp = document.getElementById('temp-booking-view');
        if(temp) temp.remove();
    };

    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.onclick = () => { modal.style.display = "none"; cleanup(); };
    window.onclick = (e) => { if (e.target == modal) { modal.style.display = "none"; cleanup(); } };
};

window.deleteBooking = function(id) {
    if(!confirm("Delete this booking?")) return;
    let bookings = JSON.parse(localStorage.getItem('agniii_bookings') || '[]');
    bookings = bookings.filter(b => b.id !== id);
    localStorage.setItem('agniii_bookings', JSON.stringify(bookings));
    viewBookings(); 
};
window.clearAllBookings = function() {
    if(!confirm("WARNING: Delete ALL bookings?")) return;
    localStorage.removeItem('agniii_bookings');
    viewBookings();

};


