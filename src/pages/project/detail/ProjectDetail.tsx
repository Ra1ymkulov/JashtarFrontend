"use client";
import scss from "./ProjectDetail.module.scss";
import { useParams } from "next/navigation";
import { projects } from "../Staticdata/projects";
import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";
import { Name } from "./sections/Name/Name";
import { Aim } from "./sections/Aims/Aim";
import { Gallery } from "./sections/Gallary/Gallary";

const ProjectDetail = () => {
  const params = useParams();
  const id = Number(params?.id);
  const project = projects.find((item) => item.id === id);
  if (!project) {
    return;
  }
  return (
    <div className={scss.projectDetail}>
      <NavPanel
        items={[
          { label: "Проекты", href: "/projects" },
          { label: `Проект ${project?.title}` },
        ]}
      />
      <div className="container">
        <div className={scss.ProjectDetail}>
          <Name
            title={project?.title}
            fullText={project?.full_text}
            image={project?.image}
          />
          <Aim title={project?.goals_title} goals={project?.goals} />
          <Gallery images={project?.gallery_images} />
        </div>
      </div>
      ;
    </div>
  );
};

export default ProjectDetail;
