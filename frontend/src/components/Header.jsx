import { useLocation } from 'react-router-dom';
// فرض بر این است که useMobileNavigation شامل disablePageScroll و enablePageScroll است
import useMobileNavigation from '../hooks/useMobileNavigation'; 
// Hook جدید تشخیص اسکرول
import useScrollSpy from '../hooks/useScrollSpy';

import { brainwaveSymbol, laptop } from "../assets/";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import Button from "./Button";

const Header = () => {
    const pathname = useLocation();
    
    // فرض بر این است که openNavigation از این Hook برمی‌گردد
    const { openNavigation, toggleNavigation, handleClick } = useMobileNavigation();

    // ⬅️ کد اضافه شده ۱: استخراج و استفاده از Hook Scroll Spy
    // 1. استخراج URLهای بخش ها از آرایه navigation
    const sectionUrls = navigation
        // فیلتر کردن لینک های فقط موبایل (چون در ناوبری دسکتاپ نیستند)
        .filter(item => !item.onlyMobile) 
        .map(item => item.url);
    
    // 2. استفاده از Hook برای دریافت بخش فعال بر اساس اسکرول
    const activeSection = useScrollSpy(sectionUrls); 

    return (
        <div className={`fixed top-0 left-0 w-full z-50 bg-n-8/90 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${ openNavigation ? "bg-n-8" : "bg-n-8/90 lg:backdrop-blur-sm backdrop-blur-sm"}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">

                <a className="block w-[10rem] xl:mr-8" href="#hero"> 
                    <img src={laptop} width={40} height={40} alt="BASU_FP" /> 
                </a>

                <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a key={item.id} href={item.url} onClick={handleClick} className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6
                            ${item.onlyMobile ? "lg:hidden" : "" } md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
                            
                            {/* ⬅️ کد تغییر یافته ۲: منطق پویا */}
                            ${item.url === activeSection ? "z-2 lg:text-n-1" : "lg:text-n-4"} 
                            
                            lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                                {item.title}
                            </a>
                        ))}
                    </div>

                    <HamburgerMenu />
                </nav>

                <a href="#" className='button hidden mr-8 transition-colors text-n-3 lg:block'>Course Ware</a>
            
                <Button className="hidden lg:flex" href="#login">
                    Quera
                </Button>

                <Button className={`ml-auto lg:hidden`} px="px-3" onClick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};

export default Header;