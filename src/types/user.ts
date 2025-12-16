export type User = {
  id: string;
  anonymousId?: string;
  firstSeenAt: string; // ISO timestamp
  lastSeenAt: string;  // ISO timestamp
  totalSessions: number;
  totalConversions: number;
  primaryChannel: string;
};