import { ArrowDown, ArrowUpRight, Braces, Check, Download, Github, Linkedin, UserRound } from 'lucide-react';
import { profile } from '../../data/portfolio';
import { LinkButton } from '../../components/ui/LinkButton';
import { Reveal } from '../../components/ui/Reveal';

export function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid-background" aria-hidden="true" />
      <div className="hero container">
        <Reveal className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> ENGINEERING IDEAS INTO EXPERIENCES</p>
          <h1 id="hero-title">{profile.firstName}<br /><span>{profile.lastName}</span><span className="hero-period">.</span></h1>
          <div className="hero-role"><span className="role-line" /> {profile.role}</div>
          <p className="hero-tagline">Web & mobile apps.<br /><span>Thoughtful, practical software.</span></p>
          <p className="hero-description">I enjoy building useful web and mobile experiences, connecting reliable APIs and data, and learning with every project.</p>
          <div className="hero-actions"><LinkButton href="#projects">Discover my work <ArrowUpRight size={18} /></LinkButton><LinkButton href={profile.resume} variant="secondary" download>Download CV <Download size={17} /></LinkButton></div>
          <div className="hero-socials">{profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19} /></a>}{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>}<span className="social-divider" /><span>BUILD. LEARN. MAKE IT BETTER.</span></div>
        </Reveal>
        <Reveal className="hero-art" delay={0.15}>
          <span className="art-coordinate coordinate-top">&lt;developer /&gt;</span>
          <div className="portrait-stage">
            <div className="orbital orbital--outer" aria-hidden="true" />
            <div className="orbital orbital--inner" aria-hidden="true" />
            <div className="portrait-frame">
            {profile.image ? <img className="portrait" src={profile.image} alt={profile.name} /> : <div className="portrait-placeholder"><span className="portrait-monogram" aria-hidden="true">SY</span><div className="portrait-icon"><UserRound strokeWidth={0.7} /></div><span>{profile.name}</span><small>Software engineer</small></div>}
            </div>
          </div>
          <div className="code-window"><div className="code-window-header"><span className="window-dots"><i /><i /><i /></span><span>developer.ts</span><Braces size={14} /></div><div className="code-lines"><p><span>const</span> developer = {'{'}</p><p>&nbsp; name: <em>'Sreevani'</em>,</p><p>&nbsp; focus: <em>'Web & mobile apps'</em>,</p><p>&nbsp; mindset: <em>'Keep learning'</em></p><p>{'}'};</p></div><div className="code-status"><Check size={12} /> Ideas → working software</div></div>
        </Reveal>
        <div className="hero-bottom"><a className="scroll-cue" href="#about"><span><ArrowDown size={16} /></span> SCROLL TO EXPLORE</a><span className="hero-bottom-note">DESIGNED WITH PURPOSE. BUILT WITH PRECISION.</span></div>
      </div>
    </section>
  );
}
