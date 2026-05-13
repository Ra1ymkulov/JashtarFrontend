"use client";
import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";
import scss from "./Projects.module.scss";
import { CardProject } from "@/src/shared/ui/сardProject/CardProject";
import { useProjectsPage } from "@/src/entities/projects";
import SectionHeader from "@/src/shared/ui/sectionHeader/SectionHeader";
import { Loading } from "@/src/shared/ui/loading/Loading";
import { SectionError } from "@/src/shared/ui/sectionError/SectionError";

const Projects = () => {
  const { data, error, isError, isLoading } = useProjectsPage();
  if (isLoading) return <Loading />;
  if (isError) return <SectionError message={error.message} />;
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
                key={item.id}
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
