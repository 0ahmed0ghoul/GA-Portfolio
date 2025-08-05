import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";


const Nav = () => {
      const [darkMode, setDarkMode] = useState(false);
      useEffect(() => {
          if (darkMode) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }, [darkMode]);
  return (
    <header className="padding-x py-8 absolute z-10 w-full dark:bg-cyan-blue">
      <nav className="flex justify-between items-center max-container">
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        

        
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={29}
            height={29}
            className="mx-10 w-[49px] h-[49px] bg-black rounded-full border-2 border-black animate-spin "
            />
        </a>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
