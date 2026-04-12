import { projects, type Project } from '../data/projects';

export class ProjectService {
  /**
   * Retourne tous les projets
   */
  static getAllProjects(): Project[] {
    return projects;
  }

  /**
   * Retourne les projets mis en avant
   */
  static getFeaturedProjects(limit = 4): Project[] {
    return projects
      .filter(p => p.highlighted)
      .slice(0, limit);
  }

  /**
   * Trouver un projet par son slug
   */
  static getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
  }

  /**
   * Obtenir les projets similaires basés sur les tags
   */
  static getRelatedProjects(currentSlug: string, limit: number = 2): Project[] {
    const current = this.getProjectBySlug(currentSlug);
    if (!current) return [];

    return projects
      .filter(p => p.slug !== currentSlug)
      .filter(p =>
        p.tags.some(tag => current.tags.includes(tag))
      )
      .slice(0, limit);
  }
}
