import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";
import scss from "./MediaDetail.module.scss";

const MediaDetail = () => {
  return (
    <>
      <NavPanel items={[{ label: "Медиа", href: "/media" }]} />
      <section className={scss.mediaDetail}>
        <div className="container">
          <p>Media Detail</p>
        </div>
      </section>
    </>
  );
};

export default MediaDetail;
