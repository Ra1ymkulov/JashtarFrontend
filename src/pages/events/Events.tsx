import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";

const Events = () => {
	return (
		<>
			<NavPanel items={[{ label: "Мероприятия", href: "/events" }]} />
			<section>
				<div className="container">
					<p>Events</p>
				</div>
			</section>
		</>
	);
};

export default Events;
