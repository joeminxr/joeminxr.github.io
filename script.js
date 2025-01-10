// NEW EDIT: Restart GIFs on hover
document.querySelectorAll('.hover-gif').forEach(gif => {
    gif.addEventListener('mouseover', () => {
        const src = gif.src; // Store the current source
        gif.src = ''; // Clear the source
        gif.src = src; // Reassign the source to restart the GIF
    });
});

// NEW EDIT: Intersection Observer for scroll-based fade-in
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        observer.observe(el);
    });
});
