import { ArrowUpRight } from 'lucide-react';
import { Section } from '../../components/ui/Section';

export function About() {
  return (
    <Section id="about" eyebrow="THE PERSON BEHIND THE CODE" title="Curious by nature. Developer by craft." className="about-section">
      <div className="about-grid">
        <div className="about-copy">
          <p>I’m Sreevani, a Computer Science and Engineering graduate from <strong>RGUKT IIIT</strong>. I enjoy solving problems and turning ideas into practical web and mobile applications.</p>
          <p>I’m currently a <strong>Curious Intern at Everest Engineering</strong>, contributing to internal and sample projects across web and mobile development. I collaborate on features, debugging, testing, and follow Spec-Driven Development to plan and implement work clearly.</p>
          <p>My experience spans <strong>React Native, React, Node.js, Firebase, and PostgreSQL</strong>, with project work in food ordering and a gamified conference application. I’m always learning and improving how I build software.</p>
          <a className="text-link" href="#experience">Follow my journey <ArrowUpRight size={17} /></a>
        </div>
        <div className="about-facts">
          <div><strong>Currently</strong><span>Curious Intern at Everest Engineering</span></div>
          <div><strong>Full stack</strong><span>Web, mobile, APIs & databases</span></div>
          <div><strong>Always learning</strong><span>Practical software and thoughtful teamwork</span></div>
        </div>
      </div>
    </Section>
  );
}
