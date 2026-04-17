import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";
import React from "react";

const ProjectDetail = () => {
  return (
    <div>
      <NavPanel
        items={[
          { label: "Проекты", href: "/projects" },
          { label: "DetailProjects" },
        ]}
      />
      <p>ProjectDetail</p>
    </div>
  );
};

export default ProjectDetail;
