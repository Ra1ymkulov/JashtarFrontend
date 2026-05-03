"use client";
import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";
import { projects } from "./Staticdata/projects";
import scss from "./Projects.module.scss";
import { CardProject } from "@/src/shared/ui/cardProject/CardProject";

const Projects = () => {
  return (
    <>
      <NavPanel items={[{ label: "Проекты", href: "/projects" }]} />
      <section>
        <div className="container">
          <h1 className={scss.title}>Проекты</h1>
          <div className={scss.container}>
            {projects.map((item, index) => (
              <CardProject
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
