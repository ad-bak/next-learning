import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { useRouter } from "next/router";
import { getAllEvents } from "../../../dummy-data";

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;
