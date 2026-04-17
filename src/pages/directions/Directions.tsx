import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";

const Directions = () => {
  return (
    <>
      <NavPanel items={[{ label: "Направление", href: "/directions" }]} />
      <section>
        <div className="container">
          <p>Directions</p>
        </div>
      </section>
    </>
  );
};

export default Directions;
