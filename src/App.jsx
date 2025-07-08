import Banner from "./components/Banner";
import CodeforcesCard from "./components/CodeforcesCard";
import Header from "./components/Header";
import Projects from "./components/Projects.jsx";
import ProjectShowcase from "./components/ProjectShowcase";
import TechSkills from "./components/TechSkills";
import TechTimeline from "./components/TechTimeline";
import Three from "./components/Three.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <Three />
        <TechTimeline />
        <ProjectShowcase />
        <CodeforcesCard />
      </div>
    </>
  );
}

export default App;
