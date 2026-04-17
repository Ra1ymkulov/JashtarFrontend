import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";

const Media = () => {
  return (
    <>
      <NavPanel items={[{ label: "Медиа", href: "/media" }]} />
      <section>
        <div className="container">
          <p>Media</p>
        </div>
      </section>
    </>
  );
};

export default Media;
