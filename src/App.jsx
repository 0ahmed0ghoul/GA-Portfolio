import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  ShowProjects
} from "./sections";
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; 
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const el = document.getElementById("aboutme");
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth"});
      }, 100);
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          {/* Home page */}
          <Route path="/" element={
            <main className="relative bg-slate-900">
              <Nav />
              <br />
              <br />
              <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="wide:padding-r padding-b py-20">
                  <_AboutMe />
                </section>
                <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-24 flex justify-center items-center">
                  <Projects />
                </section>
                <section id="services" className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-24 ">
                  <Services />
                </section>
                <section id="education_experience" className="max-w-screen-xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8 lg:pt-24">
                  <EducExper />
                </section>
                <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-24 ">
                  <Testimonials />
                </section>
                <section>
                  <Skills />
                </section>
                <section>
                  <CV />
                </section>
              </div>
              <section className="bg-black padding-x padding-t pb-8">
                <Footer />
              </section>
              <UpButton />
            </main>
          } />

          {/* New Show Projects Page */}
          <Route path="/show/projects" element={<ShowProjects/>} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;
