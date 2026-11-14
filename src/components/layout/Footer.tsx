import { ArrowUp } from 'lucide-react';
import { profile } from '../../data/portfolio';

export function Footer() {
  return <footer className="footer container"><a href="#home" className="wordmark" aria-label="Back to home">sy<span>.</span></a><p>© {new Date().getFullYear()} {profile.name}. Built with care & TypeScript.</p><a className="text-link" href="#home">Back to top <ArrowUp size={15} /></a></footer>;
}
