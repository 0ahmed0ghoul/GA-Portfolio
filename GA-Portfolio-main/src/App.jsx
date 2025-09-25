import { Nav } from "./components";
import UpButton from "./components/UpButton";
import {
  _AboutMe,
  Projects,
  Services,
  EducExper,
  Testimonials,
  Skills,
  Footer,
  CV,
} from "./sections";
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; 
import { useScrollHandler } from "./hooks/useScrollHandler";
import { useState, useEffect } from "react";

const App = () => {


  
  useScrollHandler();

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const el = document.getElementById("location");
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" ,block: "end"});
      }, 100);
    }
  }, []);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <I18nextProvider i18n={i18n}>
      <main className='relative dark:bg-slate-900'>
        <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
        <br />
        <br />
        {/* Main content container with consistent max-width */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className='xl:padding-l wide:padding-r padding-b py-20'>
            <_AboutMe />
          </section>
          <section>
            <Projects darkMode={darkMode}/>
          </section>
          <section className='padding-x py-24'>
            <Services />
          </section>
          <section className='padding-x'>
            <EducExper  />
          </section>
          <section className='bg-pale-blue '>
            <Testimonials />
          </section>
          <section className='padding-x py-3'>
            <Skills />
          </section>
          <section>
            <CV />
          </section>
        </div>
        <section className='bg-black padding-x padding-t pb-8'>
          <Footer  />
        </section>
        <UpButton />
      </main>
    </I18nextProvider>
  );
};

export default App;