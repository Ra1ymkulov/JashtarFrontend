import UpcomingEvents from "./sections/UpcomingEvents/UpcomingEvents";
import EventsArchive from "./sections/EventsArchive/EventsArchive";

const EventsPage = () => {
  return (
    <>
      <UpcomingEvents />
      <EventsArchive showAll={false} />
    </>
  );
};

export default EventsPage;
