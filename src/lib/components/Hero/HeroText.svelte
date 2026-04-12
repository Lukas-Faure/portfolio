<div class="hero-left">
    <h1 class="font-display">
        Lukas <span class="text-glow">Faure</span> <br />
        <span class="dev-title">
            Développeur <span class="heading-gradient">Web</span>,
            <span class="heading-gradient">Logiciel</span> <br />
            & <span class="heading-gradient">Mobile</span>
        </span>
    </h1>
    <p class="hero-subtitle">
        J'adore le développement dans sa globalité. C'est ce qui m'a poussé à me
        challenger et à me lancer dans de nombreux projets personnels. Mon but ?
        Progresser et me perfectionner, tout en retrouvant le plaisir que j'ai,
        depuis tant d'années, à développer des applications et des sites qui me
        ressemblent.
    </p>

    <div class="cta-group">
        <a href="/contact" class="btn-primary">
            Me contacter
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><line x1="5" y1="12" x2="19" y2="12"></line><polyline
                    points="12 5 19 12 12 19"
                ></polyline></svg
            >
        </a>
        <a href="/projects" class="btn-secondary group">
            Voir mes projets
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transition-all duration-300 group-hover:rotate-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
            </svg>
        </a>
    </div>
</div>

<style>
    .hero-left {
        flex: 1.2;
        text-align: left;
    }

    h1 {
        font-size: clamp(2.6rem, 7vw, 4.5rem);
        line-height: 0.95;
        margin-bottom: 1.8rem;
        font-weight: 900;
    }

    .dev-title {
        font-size: 0.58em;
        display: block;
        margin-top: 0.9rem;
        line-height: 1.2;
        opacity: 0.9;
    }

    .text-glow {
        color: var(--accent-purple);
        text-shadow: 0 0 15px rgba(139, 92, 246, 0.6);
    }

    .hero-subtitle {
        font-size: 1.08rem;
        color: var(--text-secondary);
        max-width: 560px;
        margin-bottom: 2.8rem;
        line-height: 1.55;
    }

    .cta-group {
        display: flex;
        gap: 1.5rem;
        align-items: center;
    }

    .btn-primary {
        background: #0062cc;
        padding: 0.75rem 2.2rem;
        border-radius: 0.5rem;
        font-weight: 600;
        color: white;
        display: flex;
        align-items: center;
        gap: 0.7rem;
        transition: var(--transition-smooth);
        border: none;
        font-size: 0.95rem;
    }

    .btn-primary:hover {
        background: #0056b3;
        transform: translateY(-2px);
    }

    .btn-secondary {
        background: #1a202c;
        padding: 0.75rem 2.2rem;
        border-radius: 0.5rem;
        font-weight: 600;
        color: #e2e8f0;
        display: flex;
        align-items: center;
        gap: 0.7rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: var(--transition-smooth);
        font-size: 0.95rem;
    }

    .btn-secondary svg {
        width: 1.1rem;
        height: 1.1rem;
    }

    .btn-secondary:hover {
        background: #2d3748;
        border-color: rgba(255, 255, 255, 0.4);
        transform: translateY(-2px);
    }

    @media (max-width: 1024px) {
        .hero-left {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        h1 {
            margin-inline: auto;
        }
        .hero-subtitle {
            margin-inline: auto;
        }
        .cta-group {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
        }
        .btn-primary,
        .btn-secondary {
            width: 100%;
            justify-content: center;
        }
    }
</style>
