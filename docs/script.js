
document.addEventListener('DOMContentLoaded', function() {
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

    document.querySelectorAll('.slide-in').forEach((el) => {
        observer.observe(el);
    });
});