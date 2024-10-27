    // Sélectionnez le checkbox et le body
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Vérifiez si un thème est déjà enregistré dans localStorage
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        body.classList.add(currentTheme); // Ajoute la classe du thème
        if (currentTheme === 'dark') {
            themeToggle.checked = true; // Vérifie le toggle si le thème est sombre
        }
    }

    // Écoutez les changements du toggle
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark'); // Ajoute la classe du thème sombre
            localStorage.setItem('theme', 'dark'); // Enregistre le thème dans localStorage
        } else {
            body.classList.remove('dark'); // Supprime la classe du thème sombre
            localStorage.setItem('theme', 'light'); // Enregistre le thème clair
        }
    });