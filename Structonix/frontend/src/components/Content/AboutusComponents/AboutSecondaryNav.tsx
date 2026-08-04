'use client';
 
import { useEffect, useState } from 'react';
 
export function AboutSecondaryNav() {
  const [activeSection, setActiveSection] = useState('');
 
  const navItems = [
    { label: 'Who We Are', href: '#who-we-are' },
    { label: 'Mission & Vision', href: '#mission-vision' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Key Strengths', href: '#key-strengths' },
  ];
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      const whoWeAre = document.getElementById('who-we-are');
      const missionVision = document.getElementById('mission-vision');
      const howWeWork = document.getElementById('how-we-work');
      const keyStrengths = document.getElementById('key-strengths');
 
      if (keyStrengths && scrollPos >= keyStrengths.offsetTop) {
        setActiveSection('key-strengths');
      } else if (howWeWork && scrollPos >= howWeWork.offsetTop) {
        setActiveSection('how-we-work');
      } else if (missionVision && scrollPos >= missionVision.offsetTop) {
        setActiveSection('mission-vision');
      } else if (whoWeAre && scrollPos >= whoWeAre.offsetTop) {
        setActiveSection('who-we-are');
      } else {
        setActiveSection('');
      }
    };
 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 200; // Main navbar (128px) + secondary nav (~56px) + extra margin (16px)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
 
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
 
      // Update hash in URL quietly
      window.history.pushState(null, '', `#${id}`);
    }
  };
 
  return (
    <div className="sticky top-[128px] z-30 bg-white border-b border-gray-100 shadow-sm hidden md:block">
      <div className="container mx-auto px-4 md:px-16 flex items-center justify-center py-4">
        <div className="flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href.substring(1))}
              className={`text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 relative pb-2 ${
                activeSection === item.href.substring(1)
                  ? 'text-primary'
                  : 'text-dark-slate hover:text-primary'
              }`}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary animate-fade-in" />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
