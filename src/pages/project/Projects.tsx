import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";

const Projects = () => {
  return (
    <>
      <NavPanel items={[{ label: "Проекты", href: "/projects" }]} />
      <section>
        <div className="container">
          <p>Projects</p>
        </div>
      </section>
    </>
  );
};

export default Projects;
