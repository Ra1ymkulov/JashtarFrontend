"use client";
import scss from "./ProjectDetail.module.scss";
import { useParams } from "next/navigation";
import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";
import { useProjectsDetail } from "@/src/entities/projects";
import SectionHeader from "@/src/shared/ui/sectionHeader/SectionHeader";
import { Loading } from "@/src/shared/ui/loading/Loading";
import { SectionError } from "@/src/shared/ui/sectionError/SectionError";
import { encodeUrl, onImageError } from "@/src/shared/lib";

const ProjectDetail = () => {
  const params = useParams();
  const id = Number(params?.id);
  const { data: project, isError, error, isLoading } = useProjectsDetail(id);
  if (isLoading) return <Loading />;
  if (isError) return <SectionError message={error.message} />;
  const goals = project?.goals ?? [];
  const mid = Math.ceil(goals.length / 2);
  const columns = [project?.goals.slice(0, mid), project?.goals.slice(mid)];
  return (
    <>
      <NavPanel
        items={[
          { label: "Проекты", href: "/projects" },
          { label: `${project?.title}` },
        ]}
      />
      <div className={scss.projectDetail}>
        <div className="container">
          <div className={scss.projectDetail}>
            <SectionHeader
              layout="center"
              title={project?.title}
              description={project?.full_text}
            />
            <img
              className={scss.banner}
              src={encodeUrl(project?.image)}
              onError={onImageError}
              alt=""
            />
            <SectionHeader layout="center" title={project?.goals_title} />
            <div className={scss.goalsContent}>
              {columns.map((column, i) => (
                <ul key={i}>
                  {column?.map((items) => (
                    <li key={items.id}>{items.text}</li>
                  ))}
                </ul>
              ))}
            </div>
            <div className={scss.galleryContent}>
              {project?.gallery_images.map((image, index) => (
                <img
                  className={`${scss.galleryImage} ${scss[`p${index + 1}`]}`}
                  key={image.id}
                  src={encodeUrl(image.image)}
                  onError={onImageError}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
