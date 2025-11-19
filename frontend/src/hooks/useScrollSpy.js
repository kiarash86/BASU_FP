import { useState, useEffect } from 'react';

/**
 * * @param {string[]} sectionUrls 
 * @returns {string} 
 */
const useScrollSpy = (sectionUrls) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const targetIds = sectionUrls.map(url => url.substring(1));
    
    const targets = targetIds
        .map(id => document.getElementById(id))
        .filter(el => el !== null); 
    if (targets.length === 0) return;

    const observerOptions = {
      rootMargin: '-50% 0px -50% 0px', 
      threshold: 0,
    };

    const observerCallback = (entries) => {
      const visibleEntry = entries.find(entry => entry.isIntersecting);
      
      if (visibleEntry) {
        setActiveId(`#${visibleEntry.target.id}`);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    targets.forEach(target => {
      observer.observe(target);
    });

    return () => {
      targets.forEach(target => {
        observer.unobserve(target);
      });
    };
  }, [sectionUrls]); 

  return activeId;
};

export default useScrollSpy;