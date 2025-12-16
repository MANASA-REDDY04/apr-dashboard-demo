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
  {
    id: "u3",
    anonymousId: "anon_789",
    firstSeenAt: "2025-09-03T08:20:00Z",
    lastSeenAt: "2025-09-07T11:35:00Z",
    totalSessions: 3,
    totalConversions: 2,
    primaryChannel: "Direct",
  },
  {
    id: "u4",
    anonymousId: "anon_101",
    firstSeenAt: "2025-09-05T14:15:00Z",
    lastSeenAt: "2025-09-07T12:00:00Z",
    totalSessions: 2,
    totalConversions: 0,
    primaryChannel: "Email",
  },
  {
    id: "u5",
    anonymousId: "anon_202",
    firstSeenAt: "2025-09-06T19:00:00Z",
    lastSeenAt: "2025-09-07T12:20:00Z",
    totalSessions: 12,
    totalConversions: 5,
    primaryChannel: "Referral",
  },
];