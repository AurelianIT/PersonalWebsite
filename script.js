// Detail Categories Data
const detailCategories = {
    introduction: {
        title: 'Introduction',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
        pages: [
            [
                "I'm lazy right now after finishing this website.",
                "I will fill informations after resting"
            ]
            // [
            //     "I believe in clean code, responsive design, and user-centered development.",
            //     "Every project is an opportunity to grow and improve my skills.",
            //     "Let's build something amazing together!"
            // ]
        ]
    },
    interests: {
        title: 'Interests',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
        pages: [
            [
                "💻 Coding & Programming",
                "🎮 Gaming in my free time",
                "Will update more soon since i'm lazy after making this website",
            ],
            [
                "🎵 Listening to Music while doing something",
                "Will update more Will update more soon since i'm lazy after making this website"
            ]
        ]
    },
    dislikes: {
        title: 'Dislikes',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>',
        pages: [
            [
                "Thinking...(Actually i'm lazy)"
            ]
        ]
    },
    hobbies: {
        title: 'Hobbies',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>',
        pages: [
            [
                " Thinking...",
                "Just kidding, turn next page to know"
            ],
            [
                "YOU GOT TRICKED BY ME, HAHAHAHA"
            ]
        ]
    },
    status: {
        title: 'Status',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
        pages: [
            [
                "💼 Currently: I'm still a university student",
                "📍 Location: Vietnam",
                "💻 Working on: Should i tell :D ?",
                "🎯 Goal: Become a full-stack developer expert",
                "Relationship : I'm focusing on one person, we are taking things slow, for now, we get along well, i enjoy talking with her and want to know her better, i'm willing to spend more and more time so that we can move to next level in the future, i hope she think and feel the same like me "
            ],
            // [
            //     "Relationship : I'm focusing on one person, we are taking things slow but i hope we will get alone well and date in the future, i enjoy talking with her a lot"
            //     // "• None",
            //     // "• Best Project Award",
            //     // "• Tech Club President",
            //     // "• Hackathon Winner"
            // ]
        ]
    },
    university: {
        title: 'University',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>',
        pages: [
            [
                "🎓 University: Sai Gon Univerisity",
                "📚 Major: Web/App Development, AI, Software Engineer ( Still a newbie with basic knowledges only, need to gain more knowledges",
                "📅 Year: Last year",
                "⭐ GPA: Dunno, haven't calculated it yet"
            ],
        ]
    }
};

// Navigation functionality
let currentSection = 'home';
let currentModalData = null;
let currentModalPage = 0;

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
const closeIcon = mobileMenuBtn.querySelector('.close-icon');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Navigation links
const navLinks = document.querySelectorAll('.nav-link');
const mobileLinks = document.querySelectorAll('.mobile-link');

function navigateToSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update active links
    navLinks.forEach(link => {
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    mobileLinks.forEach(link => {
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    currentSection = sectionId;
    
    // Close mobile menu
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToSection(link.dataset.section);
    });
});

mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToSection(link.dataset.section);
    });
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const sunIcon = themeToggle.querySelector('.sun-icon');
const moonIcon = themeToggle.querySelector('.moon-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
});

// Clock functionality
function updateTime() {
    const now = new Date();
    
    // Format time
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    
    // Format date
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    
    document.getElementById('currentTime').textContent = timeString;
    document.getElementById('currentDate').textContent = dateString;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();

// Detail modal functionality
const detailCards = document.querySelectorAll('.detail-card');
const modal = document.getElementById('detailModal');
const modalClose = document.getElementById('modalClose');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalPagination = document.getElementById('modalPagination');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const paginationDots = document.getElementById('paginationDots');

function openModal(categoryKey) {
    const category = detailCategories[categoryKey];
    if (!category) return;
    
    currentModalData = category;
    currentModalPage = 0;
    
    modalIcon.innerHTML = category.icon;
    modalTitle.textContent = category.title;
    
    renderModalPage();
    
    // Show/hide pagination
    if (category.pages.length > 1) {
        modalPagination.classList.remove('hidden');
        renderPaginationDots();
    } else {
        modalPagination.classList.add('hidden');
    }
    
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    currentModalData = null;
    currentModalPage = 0;
}

function renderModalPage() {
    if (!currentModalData) return;
    
    const page = currentModalData.pages[currentModalPage];
    modalBody.innerHTML = page.map(text => `<p>${text}</p>`).join('');
    
    // Update button states
    prevBtn.disabled = currentModalPage === 0;
    nextBtn.disabled = currentModalPage === currentModalData.pages.length - 1;
    
    // Update dots
    updatePaginationDots();
}

function renderPaginationDots() {
    if (!currentModalData) return;
    
    paginationDots.innerHTML = '';
    for (let i = 0; i < currentModalData.pages.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'pagination-dot';
        if (i === currentModalPage) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            currentModalPage = i;
            renderModalPage();
        });
        paginationDots.appendChild(dot);
    }
}

function updatePaginationDots() {
    const dots = paginationDots.querySelectorAll('.pagination-dot');
    dots.forEach((dot, index) => {
        if (index === currentModalPage) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextPage() {
    if (currentModalData && currentModalPage < currentModalData.pages.length - 1) {
        currentModalPage++;
        renderModalPage();
    }
}

function prevPage() {
    if (currentModalData && currentModalPage > 0) {
        currentModalPage--;
        renderModalPage();
    }
}

// Event listeners for modal
detailCards.forEach(card => {
    card.addEventListener('click', () => {
        openModal(card.dataset.detail);
    });
});

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

prevBtn.addEventListener('click', prevPage);
nextBtn.addEventListener('click', nextPage);

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden')) {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            prevPage();
        } else if (e.key === 'ArrowRight') {
            nextPage();
        }
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
});
