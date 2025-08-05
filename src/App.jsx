import { Nav } from "./components";
import UpButton from "./components/UpButton";
import {
  AboutMe,
  Projects,
  Services,
  EducExper,
  Testimonials,
  Skills,
  Footer,
  CV,

} from "./sections";

const App = () => {
  return (
    <main className='relative '>
      <Nav />
      <br />
      <br />
      <section className='xl:padding-l wide:padding-r padding-b py-24'>
        <AboutMe />
      </section>
      <section className=''>
        <Projects />
      </section>
      <section className='padding-x py-24 '>
        <Services />
      </section>
      <section className='padding-x'>
        <EducExper />
      </section>
      <section className='bg-pale-blue '>
        <Testimonials />
      </section>
      <section className='padding-x py-3'>
        <Skills />
      </section>
      <section className=''>
        <CV />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
      <UpButton/>
    </main>
  );
};

export default App;
