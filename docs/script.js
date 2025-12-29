
document.addEventListener('DOMContentLoaded', function() {
    // Slide-in animation observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 400);
            }
        });
    }, {
        threshold: 0.1
    });

    const slideElements = document.querySelectorAll('.slide-in');
    
    slideElements.forEach((el) => {
        observer.observe(el);
        
        // FALLBACK: If element is already in viewport, trigger immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            setTimeout(() => {
                el.classList.add('active');
            }, Array.from(slideElements).indexOf(el) * 500);
        }
    });

    // Mobile tap toggle
    document.querySelectorAll('.grid-item-small, .grid-item-large').forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('clicked');
        });
    });
});

