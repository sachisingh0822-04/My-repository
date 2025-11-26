// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const headerHeight = document.querySelector('.header').offsetHeight;
            
            window.scrollTo({
                top: targetSection.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinksContainer.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(25, 2, 71, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(25, 2, 71, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Certificate Modal Functionality
    const certButtons = document.querySelectorAll('.cert-btn');
    const modal = document.getElementById('certModal');
    const closeBtn = document.querySelector('.close-btn');
    const certImage = document.getElementById('certImage');
    const certTitle = document.getElementById('certTitle');
    const certProvider = document.getElementById('certProvider');

    // Certificate data - replace with your actual certificate image paths
    const certificates = {
        cybersecurity: {
            image: 'Coursera.png', // Replace with your actual image path
            title: 'Fundamentals of Cybersecurity',
            provider: 'Coursera • 2024'
        },
        hedera: {
            image: 'Hedera.png', // Replace with your actual image path
            title: 'Hedera Workshop on Hashgraph Developer Course',
            provider: 'Hedera 2024'
        },
        nptel: {
            image: 'iot.png', // Replace with your actual image path
            title: 'Introduction to Internet Of Things',
            provider: 'NPTEL 2024'
        }
        
    };

    // Open modal when certificate button is clicked
    certButtons.forEach(button => {
        button.addEventListener('click', function() {
            const certType = this.getAttribute('data-cert');
            const certData = certificates[certType];
            
            if (certData) {
                certImage.src = certData.image;
                certImage.alt = certData.title;
                certTitle.textContent = certData.title;
                certProvider.textContent = certData.provider;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside the content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Add animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .cert-item, .activity-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form submission handling (if you add a contact form later)
function handleFormSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    event.target.reset();
}