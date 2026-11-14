import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigation, profile } from '../../data/portfolio';
import { useActiveSection } from '../../hooks/useActiveSection';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="wordmark" href="#home" aria-label={`${profile.name}, home`}>s<span>y.</span></a>
        <button className="menu-toggle" type="button" aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isMenuOpen} aria-controls="main-navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
        <nav id="main-navigation" className={`navigation ${isMenuOpen ? 'is-open' : ''}`} aria-label="Main navigation" onKeyDown={event => { if (event.key === 'Escape') { setIsMenuOpen(false); document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus(); } }}>
          {navigation.map(link => <a key={link.id} href={`#${link.id}`} aria-current={activeSection === link.id ? 'location' : undefined} onClick={() => setIsMenuOpen(false)}>{link.label}</a>)}
        </nav>
        <div className="header-actions"><ThemeToggle /><a className="header-contact" href="#contact" onClick={() => setIsMenuOpen(false)}>Let’s connect <ArrowUpRight size={16} /></a></div>
      </div>
    </header>
  );
}
