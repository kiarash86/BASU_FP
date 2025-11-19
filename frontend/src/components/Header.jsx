import { useLocation } from 'react-router-dom';
import useMobileNavigation from "../hooks/useMobileNavigation";
import useScrollSpy from "../hooks/useScrollSpy";
import { laptop } from "../assets";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import Button from "./Button";

const Header = () => {

  const { openNavigation, toggleNavigation, handleClick } = useMobileNavigation();

  const sectionUrls = navigation
    .filter((item) => !item.onlyMobile && item.url && item.url.startsWith("#"))
    .map((item) => item.url);

  const activeSection = useScrollSpy(sectionUrls, 80);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full border-b border-n-6 bg-n-8/90 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm lg:backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <a className="block w-[10rem] xl:mr-8" href="#hero">
          <img src={laptop} width={40} height={40} alt="BASU_FP" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent`}
        >
          <div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((item) => {
              const isDesktopHidden = item.onlyMobile ? "lg:hidden" : "";

              const isActive =
                activeSection !== "" &&
                item.url &&
                item.url === activeSection;

              const baseClasses =
                "block relative px-6 py-6 font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12";

              const activeClasses = isActive ? "z-2 lg:text-n-1" : "lg:text-n-4";

              return (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`${baseClasses} ${activeClasses} ${isDesktopHidden}`}
                >
                  {item.title}
                </a>
              );
            })}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#"
          className="button mr-8 hidden text-n-3 transition-colors lg:block"
        >
          Course Ware
        </a>

        <Button className="hidden lg:flex" href="#login">
          Quera
        </Button>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
