const EventDetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="container">
      <h1>Мероприятие #{params.id}</h1>
    </div>
  );
};

export default EventDetailPage;
