// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    window.toggleMobileMenu = function() {
        const isActive = mobileMenu.classList.contains('active');
        
        if (isActive) {
            mobileMenu.classList.remove('active');
            hamburgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        } else {
            mobileMenu.classList.add('active');
            hamburgerIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        }
    };

    // Close mobile menu
    window.closeMobileMenu = function() {
        mobileMenu.classList.remove('active');
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    };

    // Mobile dropdown toggle
    window.toggleMobileDropdown = function(button) {
        const dropdownMenu = button.nextElementSibling;
        const chevron = button.querySelector('.chevron');
        const isActive = dropdownMenu.classList.contains('active');
        
        // Close all other dropdowns
        document.querySelectorAll('.mobile-dropdown-menu.active').forEach(menu => {
            if (menu !== dropdownMenu) {
                menu.classList.remove('active');
                menu.previousElementSibling.querySelector('.chevron').textContent = '▼';
            }
        });
        
        // Toggle current dropdown
        if (isActive) {
            dropdownMenu.classList.remove('active');
            chevron.textContent = '▼';
        } else {
            dropdownMenu.classList.add('active');
            chevron.textContent = '▲';
        }
    };

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            closeMobileMenu();
        }
    });

    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    document.querySelectorAll('.service-card, .section-title').forEach(el => {
        observer.observe(el);
    });
});

// Form handling (for contact forms)
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simple form validation
    const requiredFields = ['name', 'email', 'message'];
    const errors = [];
    
    requiredFields.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            errors.push(field);
        }
    });
    
    if (errors.length > 0) {
        alert('Please fill in all required fields: ' + errors.join(', '));
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    event.target.reset();
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization - lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is loaded
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Dropdown functionality for desktop
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        let timeoutId;
        
        dropdown.addEventListener('mouseenter', function() {
            clearTimeout(timeoutId);
            const menu = this.querySelector('.dropdown-menu');
            if (menu) {
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
                menu.style.transform = 'translateY(0)';
            }
        });
        
        dropdown.addEventListener('mouseleave', function() {
            const menu = this.querySelector('.dropdown-menu');
            timeoutId = setTimeout(() => {
                if (menu) {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                    menu.style.transform = 'translateY(-0.5rem)';
                }
            }, 150);
        });
    });
});

// Contact button click tracking (for analytics if needed)
document.addEventListener('DOMContentLoaded', function() {
    const contactButtons = document.querySelectorAll('.contact-button, a[href*="contact"]');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track contact button clicks (placeholder for analytics)
            console.log('Contact button clicked:', this.href || this.textContent);
        });
    });
});

// Video loading optimization
document.addEventListener('DOMContentLoaded', function() {
    const videoIframes = document.querySelectorAll('iframe[src*="youtube"]');
    
    videoIframes.forEach(iframe => {
        // Add loading attribute for better performance
        iframe.setAttribute('loading', 'lazy');
        
        // Optional: Replace with thumbnail and load on click for better performance
        // This is commented out but can be implemented for better page speed
        /*
        const wrapper = iframe.parentElement;
        const thumbnail = document.createElement('div');
        thumbnail.className = 'video-thumbnail';
        thumbnail.innerHTML = `
            <img src="https://img.youtube.com/vi/c5s3ZviV9-c/maxresdefault.jpg" alt="Video thumbnail">
            <div class="play-button">▶</div>
        `;
        
        thumbnail.addEventListener('click', function() {
            wrapper.innerHTML = iframe.outerHTML;
        });
        
        wrapper.innerHTML = thumbnail.outerHTML;
        */
    });
});