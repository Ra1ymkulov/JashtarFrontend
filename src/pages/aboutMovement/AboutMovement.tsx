"use client";

import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";

const AboutMovement = () => {
  return (
    <>
      <NavPanel items={[{ label: "О движении", href: "/about-movement" }]} />
      <section>
        <div className="container">
          <p>О движении</p>
        </div>
      </section>
    </>
  );
};

export default AboutMovement;
