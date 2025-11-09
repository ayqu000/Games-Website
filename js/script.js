// Smooth hover effect on game cards
document.querySelectorAll('.game-card a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-6px)';
        link.style.transition = 'transform .25s ease';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});
