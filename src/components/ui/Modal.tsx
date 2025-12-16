"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import clsx from "clsx";

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function Modal({
  open,
  onOpenChange,
  title,
  children,
  footer,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />

        {/* Content */}
        <Dialog.Content
          className={clsx(
            "fixed z-50",
            "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "w-full max-w-lg rounded-xl bg-white p-6 shadow-lg"
          )}
        >
          {title && (
            <Dialog.Title className="mb-4 text-lg font-semibold">
              {title}
            </Dialog.Title>
          )}

          <div className="text-sm text-neutral-700">{children}</div>

          {footer && (
            <div className="mt-6 flex justify-end gap-2">{footer}</div>
          )}

          <Dialog.Close asChild>
            <button
              aria-label="Close"
              className="absolute right-4 top-4 rounded-md p-1 text-neutral-500 hover:bg-neutral-100"
            >
              ✕
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
