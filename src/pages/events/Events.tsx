"use client";

import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";

const Events = () => {
  return (
    <>
      <NavPanel items={[{ label: "Мероприятия", href: "/events" }]} />
    </>
  );
};

export default Events;
