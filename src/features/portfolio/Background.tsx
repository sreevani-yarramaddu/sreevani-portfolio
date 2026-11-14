import { ArrowUpRight, GraduationCap, Users } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { certifications, education } from '../../data/portfolio';

export function Background() {
  return <Section id="education" eyebrow="EDUCATION & CERTIFICATIONS" title="A foundation for what’s next." className="background-section"><div className="background-grid"><div><h3 className="column-title"><GraduationCap size={22} /> Education</h3><div className="education-list">{education.map(item => <article key={item.degree}><p className="education-period">{item.period}</p><h4>{item.degree}</h4><p>{item.institution}</p><span className="grade">{item.grade}</span></article>)}</div></div><article className="leadership"><span className="leadership-icon"><Users size={28} /></span><p className="eyebrow">CERTIFICATIONS</p><h3>Growing skills<br />through learning.</h3><ul className="bullet-list">{certifications.map(item => <li key={item}>{item}</li>)}</ul><a className="text-link" href="#contact">Let’s connect <ArrowUpRight size={17} /></a></article></div></Section>;
}
