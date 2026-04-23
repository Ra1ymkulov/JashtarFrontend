import { Heading } from "@/src/shared/ui/heading/Heading";
import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";

const Projects = () => {
  return (
    <>
      <NavPanel items={[{ label: "Проекты", href: "/projects" }]} />
      <Heading title="Проекты" />
      <section>
        <div className="container">
          <p>Projects</p>
        </div>
      </section>
    </>
  );
};

export default Projects;
