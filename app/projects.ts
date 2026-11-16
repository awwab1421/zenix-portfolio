export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  collection: 'personal' | 'professional';
  label: string;
  description: string;
  accent: string;
};

export const projects: Project[] = [
  { slug: 'poster-study', title: 'Poster Study', category: 'Poster design / Typography', year: '2026', collection: 'personal', label: '01', description: 'A placeholder for the story behind this personal poster project. The concept, creative direction and process will be added when the real work is ready.', accent: '#D5FF00' },
  { slug: 'type-experiment', title: 'Type Experiment', category: 'Experimental typography', year: '2026', collection: 'personal', label: '02', description: 'A placeholder for an experimental type project. Add the idea, tools, process and final outcome here later.', accent: '#F04B45' },
  { slug: 'visual-play', title: 'Visual Play', category: 'Visual exploration', year: '2026', collection: 'personal', label: '03', description: 'A placeholder for a personal visual exploration. The full project description and artwork can be added later.', accent: '#4776C9' },
  { slug: 'brand-identity', title: 'Brand Identity', category: 'Brand identity', year: '2026', collection: 'professional', label: '01', description: 'A placeholder for a professional identity project. The client, brief, strategy, design system and deliverables will be added when ready.', accent: '#D5FF00' },
  { slug: 'campaign-study', title: 'Campaign Study', category: 'Campaign design', year: '2026', collection: 'professional', label: '02', description: 'A placeholder for a campaign project. Add the brief, audience, creative approach and final applications later.', accent: '#F04B45' },
  { slug: 'art-direction', title: 'Art Direction', category: 'Art direction', year: '2026', collection: 'professional', label: '03', description: 'A placeholder for an art direction project. The concept, collaborators, credits and visual assets will be added later.', accent: '#4776C9' },
];

export const getProjects = (collection: Project['collection']) =>
  projects.filter((project) => project.collection === collection);
