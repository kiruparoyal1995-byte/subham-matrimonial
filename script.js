console.log('✓ JavaScript loaded successfully!');

// Sample profile data
const profiles = [
    {
        id: 1,
        name: "Anu Sri",
        gender: "women",
        age: 26,
        location: "Nagapattinam",
        education: "B.Tech",
        caste: "udaiyar",
        image: "https://i.pinimg.com/736x/5b/00/3c/5b003ca0e3fd3b4952ca999ac2c83311.jpg"
    },

    {
        id: 2,
        name: "Dharanika",
        gender: "women",
        age: 24,
        location: "thiruthuraipoondai",
        education: "B.Sc",
        caste: "nadar",
        image: "https://www.yogmaratha.com/upload/profiles/FEMALE167759622063fe163c2ac4c.png"
    },

    {
        id: 3,
        name: "Sangeetha",
        gender: "women",
        age: 27,
        location: "mannargudi",
        education: "MBA",
        caste: "adi diravdar",
        image: "https://www.kppharmacycollege.com/wp-content/uploads/2023/06/IMG-20240320-WA0034.jpg"
    },

    {
        id: 4,
        name: "Rajesh Kumar",
        gender: "men",
        age: 28,
        location: "velankanni",
        education: "ITI",
        caste: "yadavar",
        image: "https://i1.sndcdn.com/avatars-ajg2KaxSBIDAOvzs-INz36g-t500x500.jpg"
    },

    {
        id: 5,
        name: "Vignesh",
        gender: "men",
        age: 28,
        location: "vedaraniyam",
        education: "MBA",
        caste: "vanniyar",
        image: "https://yt3.googleusercontent.com/z24gCA1vdzbwzQafdGhAeEkXekabrfqlHkP19WokXZqq5MzX0DSUGM_ajMlS0xqb0zuxcNXcSg=s900-c-k-c0x00ffffff-no-rj"
    },

    {
        id: 6,
        name: "Vikram",
        gender: "men",
        age: 26,
        location: "nagore",
        education: "B.Com",
        caste: "pillai",
        image: "https://avatars.githubusercontent.com/u/213098137?v=4?s=400"
    }
];

let currentFilter = 'all';

// ==========================================
// 1. LOAD PROFILES ON PAGE LOAD
// ==========================================
window.addEventListener('load', function() {
    console.log('Page loaded, loading profiles...');
    loadProfiles();
});

function loadProfiles() {
    filterProfiles('all');
}

// ==========================================
// 2. FILTER PROFILES BY GENDER
// ==========================================
function filterProfiles(filter) {
    console.log('Filtering profiles by:', filter);
    currentFilter = filter;
    const grid = document.getElementById('profilesGrid');
    
    if (!grid) {
        console.error('Could not find element with id: profilesGrid');
        return;
    }
    
    grid.innerHTML = '';

    // Filter profiles based on gender
    const filtered = filter === 'all' ? profiles : profiles.filter(p => p.gender === filter);

    // Create profile cards
    filtered.forEach(profile => {
        const card = document.createElement('div');
        card.className = 'profile-card';
    
        card.innerHTML = `
    <div class="profile-image">
        <img src="${profile.image}" alt="${profile.name}">
        <div class="verify-badge">✓ Verified</div>
    </div>

    <div class="profile-info">
        <div class="profile-name">${profile.name}</div>

        <div class="profile-details">
            <span><strong>${profile.age}</strong> years, ${profile.location}</span>
            <span>Education: ${profile.education}</span>
            <span>Caste: ${profile.caste}</span>
        </div>

        <div class="profile-actions">
            <button class="btn-interest" onclick="handleInterest('${profile.name}')">
                Send Interest
            </button>

            <button class="btn-contact" onclick="openModal('register-modal')">
                Contact
            </button>
        </div>
    </div>
`;
        grid.appendChild(card);
    });

    // Update active filter button
    updateFilterButtons(filter);
}

// ==========================================
// 3. UPDATE FILTER BUTTON STYLING
// ==========================================
function updateFilterButtons(active) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(active) || (active === 'all' && btn.textContent === 'All')) {
            btn.classList.add('active');
        }
    });
}

// ==========================================
// 4. HANDLE SEND INTEREST
// ==========================================
function handleInterest(name) {
    console.log('Interest sent to:', name);

}

// ==========================================
// 5. OPEN MODAL
// ==========================================
function openModal(modalId) {
    console.log('Opening modal:', modalId);
    const modal = document.getElementById(modalId);
    
    if (!modal) {
        console.error('Modal not found:', modalId);
        return;
    }
    
    modal.classList.add('show');
}

// ==========================================
// 6. CLOSE MODAL
// ==========================================
function closeModal(modalId) {
    console.log('Closing modal:', modalId);
    const modal = document.getElementById(modalId);
    
    if (!modal) {
        console.error('Modal not found:', modalId);
        return;
    }
    
    modal.classList.remove('show');
}

// ==========================================
// 7. HANDLE REGISTRATION FORM SUBMIT
// ==========================================
function handleRegister(e) {
    e.preventDefault(); // Stop form from reloading page
    console.log('Registration form submitted');
    alert('✓ Registration successful! Welcome to Subham Matrimonial. Please check your email to verify your account.');
    closeModal('register-modal');
}

// ==========================================
// 8. HANDLE LOGIN FORM SUBMIT
// ==========================================
function handleLogin(e) {
    e.preventDefault(); // Stop form from reloading page
    console.log('Login form submitted');
    alert('✓ Logged in successfully! Welcome back to Subham Matrimonial.');
    closeModal('login-modal');
}

// ==========================================
// 9. TOGGLE MOBILE MENU
// ==========================================
function toggleMenu() {
    console.log('Menu toggled');
    const menu = document.querySelector('.nav-menu');
    
    if (!menu) {
        console.error('Menu element not found');
        return;
    }
    
    menu.classList.toggle('active');
}

// ==========================================
// 10. CLOSE MODAL WHEN CLICKING OUTSIDE
// ==========================================
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
};

// ==========================================
// 11. SMOOTH SCROLLING FOR NAVIGATION LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                const menu = document.querySelector('.nav-menu');
                if (menu) {
                    menu.classList.remove('active');
                }
            }
        }
    });
});

// ==========================================
// TEST: Verify all functions are loaded
// ==========================================
console.log('✓ All functions loaded and ready!');
console.log('Available functions:');
console.log('- loadProfiles()');
console.log('- filterProfiles(filter)');
console.log('- handleInterest(name)');
console.log('- openModal(modalId)');
console.log('- closeModal(modalId)');
console.log('- handleRegister(event)');
console.log('- handleLogin(event)');
console.log('- toggleMenu()');