const DEV_ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

/**
 * Helper pour récupérer les icônes
 * @param name nom de l'icône (ex: 'svelte')
 * @param variant variante de l'icône (ex: 'original', 'plain')
 */
const getDevIcon = (name: string, variant: string = "original") =>
    `${DEV_ICON_BASE}${name}/${name}-${variant}.svg`;

export interface Technology {
    name: string;
    url: string;
    invert?: boolean;
}

// Le but est d'avoir un triangle au final
export const techRows: Technology[][] = [
    // Ligne 1: 8 icônes
    [
        { name: 'HTML5', url: getDevIcon('html5') },
        { name: 'CSS3', url: getDevIcon('css3') },
        { name: 'JavaScript', url: getDevIcon('javascript') },
        { name: 'TypeScript', url: getDevIcon('typescript') },
        { name: 'Svelte / SvelteKit', url: getDevIcon('svelte') },
        { name: 'Angular', url: getDevIcon('angular') },
        { name: 'Tailwind CSS', url: getDevIcon('tailwindcss') },
        { name: 'Flutter', url: getDevIcon('flutter') }
    ],
    // Ligne 2: 7 icônes
    [
        { name: 'Python', url: getDevIcon('python') },
        { name: 'Java', url: getDevIcon('java') },
        { name: 'C#', url: getDevIcon('csharp') },
        { name: 'PHP', url: getDevIcon('php') },
        { name: 'Symfony', url: getDevIcon('symfony'), invert: true },
        { name: 'C', url: getDevIcon('c') },
        { name: 'C++', url: getDevIcon('cplusplus') },
    ],
    // Ligne 3: 6 icônes
    [
        { name: 'PostgreSQL', url: getDevIcon('postgresql') },
        { name: 'MariaDB', url: getDevIcon('mariadb') },
        { name: 'MySQL', url: getDevIcon('mysql') },
        { name: 'MongoDB', url: getDevIcon('mongodb') },
        { name: 'Neo4j', url: getDevIcon('neo4j') },
        { name: 'Elasticsearch', url: getDevIcon('elasticsearch') }
    ],
    // Ligne 4: 3 icônes
    [
        { name: 'Git', url: getDevIcon('git') },
        { name: 'GitHub', url: getDevIcon('github'), invert: true },
        { name: 'GitLab', url: getDevIcon('gitlab') }
    ],
    // Ligne 5: 1 icône
    [
        { name: 'Docker', url: getDevIcon('docker') }
    ],
];