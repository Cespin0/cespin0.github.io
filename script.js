document.addEventListener('DOMContentLoaded', () => {
    // 1. Cambio de Tema (Claro / Oscuro)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        
        // Cambiar icono del botón
        themeToggleBtn.innerHTML = newTheme === 'dark' 
            ? '<i class="fa-solid fa-moon"></i>' 
            : '<i class="fa-solid fa-sun"></i>';
    });

    // 2. Cambio de Idioma (Español / Inglés básico interactivo)
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = 'es';

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        langToggleBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
        htmlElement.setAttribute('lang', currentLang);

        // Actualizar textos dinámicamente con atributos data-es / data-en
        document.querySelectorAll('[data-es]').forEach(el => {
            const translation = el.getAttribute(`data-${currentLang}`);
            if (translation) {
                el.textContent = translation;
            }
        });
    });

    // 3. Colapsar / Expandir Menú Lateral (Escritorio y Móvil)
    const sidebar = document.getElementById('sidebar');
    const sidebarToggleBtn = document.getElementById('sidebar-toggle');
    const hamburgerBtn = document.getElementById('hamburger-btn');

    sidebarToggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        const icon = sidebarToggleBtn.querySelector('i');
        icon.classList.toggle('fa-chevron-left');
        icon.classList.toggle('fa-chevron-right');
    });

    hamburgerBtn.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
    });

    // Cerrar menú móvil al hacer clic en una opción
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                sidebar.classList.remove('mobile-open');
            }
        });
    });
});