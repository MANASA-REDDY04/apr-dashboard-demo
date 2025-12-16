import { User } from "../../types/user";

export const mockUsers: User[] = [
  {
    id: "u1",
    anonymousId: "anon_123",
    firstSeenAt: "2025-09-01T09:15:00Z",
    lastSeenAt: "2025-09-07T10:25:00Z",
    totalSessions: 6,
    totalConversions: 2,
    primaryChannel: "Search",
  },
  {
    id: "u2",
    anonymousId: "anon_456",
    firstSeenAt: "2025-09-02T12:40:00Z",
    lastSeenAt: "2025-09-06T18:10:00Z",
    totalSessions: 4,
    totalConversions: 1,
    primaryChannel: "Social",
  },
];