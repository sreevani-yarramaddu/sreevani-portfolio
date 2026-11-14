import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { profile } from '../../data/portfolio';

export function Contact() {
  return (
    <Section id="contact" eyebrow="SAY HELLO" title="Good things start with a conversation." className="contact-section">
      <div className="contact-grid">
        <p>
          <span className="freelance-status"><span className="status-dot" aria-hidden="true" />Open to opportunities</span>
          I’m always happy to connect about software development, web and mobile applications, and new ideas. Feel free to get in touch.
        </p>
        <div className="contact-links">
          <a className="email-link" href={`mailto:${profile.email}`}><Mail size={22} /><span>{profile.email}</span><ArrowUpRight size={24} /></a>
          <a href={profile.phoneHref}><Phone size={17} /> {profile.phone}</a>
          <div className="contact-socials">
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} /></a>}
            {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={15} /></a>}
          </div>
        </div>
      </div>
    </Section>
  );
}
