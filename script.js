document.addEventListener('DOMContentLoaded', () => {
    const navControls = document.querySelectorAll('.nav-button, .logo');
    const sections = document.querySelectorAll('.content-section');
    const buttons = document.querySelectorAll('.nav-button');

    navControls.forEach(control => {
        control.addEventListener('click', () => {
            const targetId = control.getAttribute('data-target');

            sections.forEach(section => {
                section.classList.remove('active');
            });
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            if (control.classList.contains('nav-button')) {
                control.classList.add('active');
            }
        });
    });

    const initialSection = document.getElementById('home');
    if (initialSection) {
        initialSection.classList.add('active');
    }
});
