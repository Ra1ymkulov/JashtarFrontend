"use client";

import scss from "./Directions.module.scss";

import { useState } from "react";
import { CardActivity } from "@/src/shared/ui/сardActivity/CardActivity";
import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";
import SectionHeader from "@/src/shared/ui/sectionHeader/SectionHeader";
import { useDirectionPage } from "@/src/entities/directions";
import { Loading } from "@/src/shared/ui/loading/Loading";

export default function DirectionsPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };
  const { data, isError, isLoading, error } = useDirectionPage();

  if (isLoading) return <Loading />;
  if (isError) return <div>{error.message}</div>;

  return (
    <>
      <NavPanel
        items={[{ label: "Направление деятельности", href: "/directions" }]}
      />
      <section className={scss.directionSection}>
        <div className="container">
          <div className={scss.content}>
            <SectionHeader layout="center" title={data?.title} />
            {data?.items.map((item) => (
              <CardActivity
                key={item.id}
                image={"/assets/images/Directions.png"}
                title={item.title}
                description={item.short_description}
                fullText={item.full_description}
                isOpen={openId === item.id}
                course={false}
                onClick={() => toggleCard(item.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
