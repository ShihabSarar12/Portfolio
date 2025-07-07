import Banner from "./components/Banner";
import CodeforcesCard from "./components/CodeforcesCard";
import Header from "./components/Header";
import Projects from "./components/Projects.jsx";
import ProjectShowcase from "./components/ProjectShowcase";
import TechSkills from "./components/TechSkills";
import TechTimeline from "./components/TechTimeline";

function App() {
  return (
    <>
      <div>
        <Header />
        <Projects />
        <TechTimeline />
        <ProjectShowcase />
        <CodeforcesCard />
      </div>
    </>
  );
}

export default App;
