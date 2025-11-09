document.querySelectorAll('.game-card a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-4px)';
        link.style.transition = 'transform .2s ease';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});
