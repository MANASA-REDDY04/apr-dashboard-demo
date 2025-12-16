import { EventRecord } from "../../types/events";

export const mockEvents: EventRecord[] = [
  {
    id: "e1",
    name: "page_view",
    userId: "u1",
    sessionId: "s1",
    timestamp: "2025-09-07T10:20:00Z",
    channel: "Search",
  },
  {
    id: "e2",
    name: "purchase",
    userId: "u1",
    sessionId: "s1",
    timestamp: "2025-09-07T10:25:00Z",
    channel: "Search",
  },
];
