import Banner from "./components/Banner";
import CodeforcesCard from "./components/CodeforcesCard";
import Header from "./components/Header";
import ProjectShowcase from "./components/ProjectShowcase";
import TechSkills from "./components/TechSkills";
import TechTimeline from "./components/TechTimeline";

function App() {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <TechTimeline />
        <ProjectShowcase />
        <CodeforcesCard />
      </div>
    </>
  );
}

export default App;
