import { useState } from 'react';
import type { ProjectSlide } from '../../types/portfolio';

interface ProjectSlideshowProps {
  title: string;
  slides: [ProjectSlide, ...ProjectSlide[]];
}

export function ProjectSlideshow({ title, slides }: ProjectSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = slides[activeIndex] ?? slides[0];

  function changeSlide(direction: number) {
    setActiveIndex(index => (index + direction + slides.length) % slides.length);
  }

  return (
    <div className="project-slideshow" role="region" aria-roledescription="carousel" aria-label={`${title} previews`} onKeyDown={event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        changeSlide(event.key === 'ArrowLeft' ? -1 : 1);
      }
    }}>
      <div className={`slideshow-image-wrap${current.orientation ? ` slideshow-image-wrap--${current.orientation}` : ''}`}>
        <img className="slideshow-image" src={current.src} alt={current.alt} width={1200} height={680} loading="lazy" draggable={false} />
        {slides.length > 1 && <>
          <button type="button" className="slide-hit-area slide-hit-area--previous" onClick={() => changeSlide(-1)} aria-label={`Previous ${title} preview`} />
          <button type="button" className="slide-hit-area slide-hit-area--next" onClick={() => changeSlide(1)} aria-label={`Next ${title} preview`} />
        </>}
      </div>
      <span className="visually-hidden" aria-live="polite" aria-atomic="true">{title}: image {activeIndex + 1} of {slides.length}</span>
      {slides.length > 1 && (
        <div className="slide-dots" aria-label={`Choose a ${title} slide`}>
          {slides.map((slide, index) => <button key={slide.src} type="button" className="slide-dot" aria-label={`Show ${title} image ${index + 1}: ${slide.caption}`} aria-current={index === activeIndex ? 'true' : undefined} onClick={() => setActiveIndex(index)} />)}
        </div>
      )}
    </div>
  );
}
