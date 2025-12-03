document.addEventListener('DOMContentLoaded', () => {
    // Pobierz wszystkie przyciski nawigacyjne
    const buttons = document.querySelectorAll('.nav-button');
    // Pobierz wszystkie sekcje treści
    const sections = document.querySelectorAll('.content-section');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Odczytaj ID sekcji docelowej z atrybutu data-target
            const targetId = button.getAttribute('data-target');

            // 1. Ukryj wszystkie sekcje i usuń klasę 'active' z przycisków
            sections.forEach(section => {
                section.classList.remove('active');
            });
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            // 2. Pokaż docelową sekcję i ustaw przycisk jako aktywny
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            button.classList.add('active');
        });
    });

    // Upewnij się, że strona główna jest aktywna przy starcie
    const initialButton = document.querySelector('.nav-button[data-target="home"]');
    const initialSection = document.getElementById('home');
    if (initialButton && initialSection) {
        initialButton.classList.add('active');
        initialSection.classList.add('active');
    }
});
