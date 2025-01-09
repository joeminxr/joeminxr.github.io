// NEW EDIT: Restart GIFs on hover
document.querySelectorAll('.hover-gif').forEach(gif => {
    gif.addEventListener('mouseover', () => {
        const src = gif.src; // Store the current source
        gif.src = ''; // Clear the source
        gif.src = src; // Reassign the source to restart the GIF
    });
});