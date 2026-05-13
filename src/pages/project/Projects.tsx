"use client";
import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";
import scss from "./Projects.module.scss";
import { CardProject } from "@/src/shared/ui/сardProject/CardProject";
import { useProjectsPage } from "@/src/entities/projects";
import SectionHeader from "@/src/shared/ui/sectionHeader/SectionHeader";

const Projects = () => {
  const { data } = useProjectsPage();
  const projects = data?.[0];

  return (
    <>
      <NavPanel items={[{ label: "Проекты", href: "/projects" }]} />
      <section>
        <div className="container">
          <SectionHeader layout="center" title={projects?.title} />
          <div className={scss.container}>
            {projects?.project_items.map((item, index) => (
              <CardProject
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.short_text}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
