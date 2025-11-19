import { useState, useEffect } from 'react';

/**
 * یک هوک سفارشی برای تشخیص اینکه کدام بخش صفحه در حال حاضر فعال است.
 * از Intersection Observer برای عملکرد بهینه استفاده می کند.
 * * @param {string[]} sectionUrls - آرایه ای از URLهای بخش ها (مثلاً: ["#hero", "#features"])
 * @returns {string} activeId - URL بخش فعال فعلی (مثلاً: "#features")
 */
const useScrollSpy = (sectionUrls) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // تبدیل URLها به IDهای قابل جستجو (حذف #)
    const targetIds = sectionUrls.map(url => url.substring(1));
    
    // انتخاب عناصر DOM بر اساس IDها
    const targets = targetIds
        .map(id => document.getElementById(id))
        .filter(el => el !== null); // اطمینان از وجود عنصر

    if (targets.length === 0) return;

    // تعریف تنظیمات Observer
    const observerOptions = {
      // این تنظیم باعث می شود Observer زمانی فعال شود که المان به مرکز ویوپورت برسد
      rootMargin: '-50% 0px -50% 0px', 
      threshold: 0,
    };

    // تابع کال‌بک Observer
    const observerCallback = (entries) => {
      // پیدا کردن اولین ورودی که در حال تقاطع (Intersecting) است
      const visibleEntry = entries.find(entry => entry.isIntersecting);
      
      if (visibleEntry) {
        // تنظیم ID فعال با پیشوند #
        setActiveId(`#${visibleEntry.target.id}`);
      }
    };

    // ایجاد و شروع Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    targets.forEach(target => {
      observer.observe(target);
    });

    // تابع Clean-up برای جلوگیری از نشت حافظه
    return () => {
      targets.forEach(target => {
        observer.unobserve(target);
      });
    };
  }, [sectionUrls]); 

  return activeId;
};

export default useScrollSpy;