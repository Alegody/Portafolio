document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const content = document.getElementById('main-content');

 
    const loadContent = async (page) => {
        try {
            const response = await fetch(page);
            if (!response.ok) throw new Error('Error al cargar la página.');
            const html = await response.text();
            content.innerHTML = html;
            window.history.pushState({}, '', page);
        } catch (error) {
            content.innerHTML = '<p>Error al cargar la página. Intenta nuevamente.</p>';
        }
    };

 
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = link.getAttribute('data-page');
            loadContent(page);
        });
    });

    loadContent('index.html');
});
