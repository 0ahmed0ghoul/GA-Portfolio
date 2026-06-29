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
  ShowProjects,
} from "./sections";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { useEffect } from "react";
import Preloader from "./components/Preloader";
import Certifications from "./sections/Certifications";
import ContactMe from "./sections/ContactMe";

// Color palette matching _AboutMe
const INK = "#0d0c0a";
const SURFACE = "#161410";
const PAPER = "#ece6d6";

const App = () => {
  useEffect(() => {
    const el = document.getElementById("aboutme");
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <main
                className="relative min-h-screen"
                style={{ backgroundColor: INK, color: PAPER }}
              >
                <Preloader />
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                  <section className="">
                    <_AboutMe />
                    <Nav />
                  </section>
                  <section className="mt-12" id="projects">
                    <Projects />
                  </section>
                  <section
                    id="services"
                    className="mt-12"
                  
                  >
                    <Services />
                  </section>
                  <section
                    id="education_experience"
                    className="mt-12"
                  >
                    <EducExper />
                  </section>
                  <section id="certifications" className="mt-12">
                    <Certifications />
                  </section>
                  <section className="mt-12 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-24">
                    <Testimonials />
                  </section>
                  <section>
                    <Skills />
                  </section>
                  <section>
                    <CV />
                  </section>
                  <section id="contact_me" className="mt-12">
                    <ContactMe />
                  </section>
                </div>
                <section
                  className="padding-x padding-t pb-8 mt-12" 
                  style={{ backgroundColor: SURFACE }}
                >
                  <Footer />
                </section>
                <UpButton />
              </main>
            }
          />

          {/* New Show Projects Page */}
          <Route path="/show/projects" element={<ShowProjects />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;
