import { Section } from '../../components/ui/Section';
import { TagList } from '../../components/ui/TagList';
import { experiences } from '../../data/portfolio';

export function Experience() {
  return (
    <Section id="experience" eyebrow="WHERE I’VE CONTRIBUTED" title="Real teams. Real-world experience.">
      <div className="experience-list">
        {experiences.map(item => (
          <article className="experience-row" key={item.company}>
            <div className="experience-meta"><p>{item.period}</p><span>{item.location}</span></div>
            <div className="experience-content">
              <div className="experience-heading">
                <span className="company-logo">{item.logo ? <img src={item.logo} alt={`${item.company} logo`} loading="lazy" /> : <span aria-hidden="true">EE</span>}</span>
                <div><h3>{item.company}</h3><p className="role">{item.role}</p></div>
              </div>
              <ul className="bullet-list">{item.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
              <TagList items={item.technologies} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
