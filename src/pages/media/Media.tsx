"use client";
import { useMediaPage } from "@/src/entities/media";
import scss from "./Media.module.scss";
import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";
import { Loading } from "@/src/shared/ui/loading/Loading";
import { SectionError } from "@/src/shared/ui/sectionError/SectionError";

const Media = () => {
  const { data, isLoading, error, isError } = useMediaPage();
  if (isLoading) return <Loading />;
  if (isError) return <SectionError message={error.message} />;

  return (
    <>
      <NavPanel items={[{ label: "Медиа", href: "/media" }]} />
      <section>
        <div className="container">
          <p className={scss.title}>Media</p>
        </div>
      </section>
    </>
  );
};

export default Media;
