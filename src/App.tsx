import "./App.scss";
import Hero from "./sections/hero/hero";
import About from "./sections/about/about";
import Skills from "./sections/skills/skills";
import Projects from "./sections/projects/projects";
import ContactUs from "./sections/contact/contact";

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactUs />
    </div>
  );
};

export default App;
