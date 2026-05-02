import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";
import { CardProject } from "@/src/shared/ui/cardProject/CardProject";
import { projects } from "./Staticdata/projects";
import scss from "./Projects.module.scss";

const Projects = () => {
  return (
    <>
      <NavPanel items={[{ label: "Проекты", href: "/projects" }]} />
      <section>
        <div className="container">
          <h1 className={scss.title}>Проекты</h1>
          <div className={scss.container}>
            {projects.map((item) => (
              <CardProject
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
