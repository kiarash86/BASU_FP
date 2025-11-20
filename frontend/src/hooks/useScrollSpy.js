import { useEffect, useState } from "react";

const useScrollSpy = (sectionUrls = [], offset = 80) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const targetIds = sectionUrls
      .filter(Boolean)
      .map((url) => url.replace("#", ""));

    const sections = targetIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: `-${offset}px 0px -50% 0px`,
      threshold: 0.1,
    };

  

  
  
  
  
  
  
  
  
  
  
  
  
    const observer = new IntersectionObserver((entries) => {
   if (window.scrollY <= offset) {
        if (activeId !== "") setActiveId("");
        return;
      }



      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [sectionUrls, offset]);

  return activeId;
};

export default useScrollSpy;