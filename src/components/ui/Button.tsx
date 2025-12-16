import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition",
        variant === "primary" &&
          "bg-black text-white hover:bg-neutral-800",
        variant === "secondary" &&
          "bg-neutral-100 text-black hover:bg-neutral-200",
        className
      )}
      {...props}
    />
  );
}