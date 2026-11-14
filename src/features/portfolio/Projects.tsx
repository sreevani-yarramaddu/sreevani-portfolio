import { ArrowUpRight } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { TagList } from '../../components/ui/TagList';
import { projects, profile } from '../../data/portfolio';
import { ProjectSlideshow } from '../../components/ui/ProjectSlideshow';

export function Projects() {
  return <Section id="projects" eyebrow="SELECTED WORK" title="Ideas, put into practice." className="projects-section"><p className="section-intro">A closer look at what I’ve built and the problems behind it.</p><div className="project-grid">{projects.map(project => <article className="project-card" key={project.title}><ProjectSlideshow title={project.title} slides={project.slides} /><div className="project-body"><p className="project-category">{project.category}</p><div className="project-title"><h3>{project.title}</h3></div><p>{project.description}</p><ul className="bullet-list">{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul><TagList items={project.technologies} />{project.repository && <a className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer">View source code <ArrowUpRight size={17} /></a>}</div></article>)}</div>{profile.github && <a className="all-projects text-link" href={profile.github} target="_blank" rel="noopener noreferrer">More on GitHub <ArrowUpRight size={17} /></a>}</Section>;
}
