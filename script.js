console.log('✓ JavaScript loaded successfully!');

// Sample profile data
const profiles = [
    { id: 1, name: "Priya Sharma", gender: "women", age: 26, location: "Delhi", education: "B.Tech", caste: "Brahmin" },
    { id: 2, name: "Anjali Desai", gender: "women", age: 24, location: "Mumbai", education: "B.Sc", caste: "Jain" },
    { id: 3, name: "Neha Gupta", gender: "women", age: 27, location: "Bangalore", education: "MBA", caste: "Marwari" },
    { id: 4, name: "Rajesh Kumar", gender: "men", age: 28, location: "Delhi", education: "B.Tech", caste: "Punjabi" },
    { id: 5, name: "Arjun Singh", gender: "men", age: 30, location: "Mumbai", education: "MBA", caste: "Rajput" },
    { id: 6, name: "Vikram Patel", gender: "men", age: 26, location: "Ahmedabad", education: "B.Com", caste: "Gujarati" },
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
                ${profile.gender === 'women' ? '👰' : '🤵'}
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
                    <button class="btn-interest" onclick="handleInterest('${profile.name}')">Send Interest</button>
                    <button class="btn-contact" onclick="openModal('register-modal')">Contact</button>
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