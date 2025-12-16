"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import clsx from "clsx";

type DropdownProps = {
  trigger: ReactNode;
  items: { label: string; onSelect: () => void }[];
};

export function Dropdown({ trigger, items }: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {trigger}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className={clsx(
          "z-50 min-w-[160px] rounded-md border bg-white p-1 shadow-md"
        )}
        sideOffset={6}
      >
        {items.map((item) => (
          <DropdownMenu.Item
            key={item.label}
            onSelect={item.onSelect}
            className="cursor-pointer rounded px-3 py-2 text-sm outline-none hover:bg-neutral-100"
          >
            {item.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}