import { create } from "zustand";

interface EventImage {
  id: number;
  event: number;
  title: string;
  image: string;
}

interface EventItem {
  id: number;
  title: string;
  description?: string;
  event_status: string;
  date?: string;
  data?: string;
  images?: EventImage[];
}

interface EventsData {
  events_list: EventItem[];
}

interface EventsState {
  event: EventsData | null;
  loading: boolean;
  error: string | null;
  fetchevents: () => Promise<void>;
}

export const eventsStore = create<EventsState>((set) => ({
  event: null,
  loading: false,
  error: null,
  fetchevents: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/events/"); // поменяй на свой API URL
      const data = await res.json();
      set({ event: data, loading: false });
    } catch (err) {
      set({ error: "Ошибка загрузки", loading: false });
    }
  },
}));
