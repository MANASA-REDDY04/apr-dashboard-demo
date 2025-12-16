"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import clsx from "clsx";

type TabsProps = {
  tabs: { value: string; label: string }[];
  defaultValue: string;
  onChange?: (value: string) => void;
};

export function Tabs({ tabs, defaultValue, onChange }: TabsProps) {
  return (
    <TabsPrimitive.Root
      defaultValue={defaultValue}
      onValueChange={onChange}
    >
      <TabsPrimitive.List className="flex gap-2 border-b">
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.value}
            value={tab.value}
            className={clsx(
              "px-3 py-2 text-sm text-neutral-500",
              "data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black"
            )}
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
    </TabsPrimitive.Root>
  );
}