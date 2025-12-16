// src/app/dashboard/components/tables/EventsTable.tsx
"use client";

import { Card } from "../../../../components/ui/Card";
import { EventRecord } from "../../../../types/events";
import { mockEvents } from "../../../../data/mock/events";

export function EventsTable() {
  const events: EventRecord[] = mockEvents;

  return (
    <Card>
      <h3 className="mb-4 text-sm font-medium text-neutral-700">
        Recent Events
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b text-left text-neutral-500">
            <tr>
              <th className="py-2">Event</th>
              <th>User</th>
              <th>Session</th>
              <th>Channel</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-b last:border-0">
                <td className="py-2">{event.name}</td>
                <td>{event.userId}</td>
                <td>{event.sessionId}</td>
                <td>{event.channel}</td>
                <td className="text-neutral-500">
                  {new Date(event.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
