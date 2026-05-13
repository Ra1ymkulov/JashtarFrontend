"use client";
import scss from "./EventsSections.module.scss";
import SectionHeader from "@/src/shared/ui/sectionHeader/SectionHeader";
import { useRouter } from "next/navigation";

const EventsSections = () => {
  const router = useRouter();
  return (
    <div className={scss.eventsSections}>
      <div className="container">
        <SectionHeader
          layout="between"
          title="Предстоящие мероприятия"
          buttonText="Подробнее"
          onButtonClick={() => router.push("/events")}
        />
        <div></div>
      </div>
    </div>
  );
};

export default EventsSections;
