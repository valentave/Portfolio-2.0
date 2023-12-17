import { useEffect, useState } from "react";
import Icon from "../../assets/icons/vat-logo.webp";
import AlternateIcon from "../../assets/icons/vat-logo-white.webp";
import NavItem from "./NavItem";
import { useRef } from "react";

export default function Header() {
  const hamburgerButton = useRef(null);
  const navbar = useRef(null);
  const navbarItems = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
    themeSelector: useRef(null),
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const openNav = () => {
      navbar.current.classList.toggle("nav-open");
    };

    const changeTheme = () => {
      document.body.classList.toggle('dark-mode');
      setIsDarkMode(prevState => !prevState);
    };

    if (hamburgerButton.current) {
      hamburgerButton.current.addEventListener("click", openNav);
    }

    Object.values(navbarItems).forEach((item) => {
      if (item.current) {
        item.current.addEventListener("click", openNav);
      }
    });

    if (navbarItems.themeSelector.current) {
      navbarItems.themeSelector.current.addEventListener('click', changeTheme);
    }

    return () => {
      if (hamburgerButton.current) {
        hamburgerButton.current.removeEventListener("click", openNav);
      }

      Object.values(navbarItems).forEach((item) => {
        if (item.current) {
          item.current.removeEventListener("click", openNav);
        }
      });

      if (navbarItems.themeSelector.current) {
        navbarItems.themeSelector.current.removeEventListener('click', changeTheme);
      }
    };
  }, []);

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="logo-container">
        <img src={isDarkMode ? AlternateIcon : Icon} alt="Valentín Andrés Taverna logo" ref={navbarItems.logo} className="logo" />
      </div>
            <div className="hamburger-container">
                <button className="hamburger-btn" ref={hamburgerButton}>
                    <svg height="24px" width="24px" viewBox="0 0 24 24" className="hamburger-svg">
                        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                    </svg>
                </button>
            </div>
            <nav className="nav" ref={navbar}>
                <ul className="nav-list">
                    <NavItem link="#Home" section="Home" reference={navbarItems.home}/>
                    <NavItem link="#About" section="About" reference={navbarItems.about}/>
                    <NavItem link="#Skills" section="Skills" reference={navbarItems.skills}/>
                    <NavItem link="#Projects" section="Projects" reference={navbarItems.projects}/>
                    <NavItem link="#Contact" section="Contact" reference={navbarItems.contact}/>
                    <li className="nav-item" ref={navbarItems.themeSelector}>
                        <button className="theme-selector">
                            <svg height="24px" width="24px" viewBox="0 0 24 24">
                                <path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}