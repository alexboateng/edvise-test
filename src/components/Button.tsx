import Link from "next/link";
import clsx from "clsx";
import React from "react";

const baseStyles = {
  solid:
    "group inline-flex items-center justify-center rounded-md py-1 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  outline:
    "group inline-flex ring-1 items-center justify-center rounded-md px-4 text-sm focus:outline-none",
};

const variantStyles = {
  solid: {
    blue: "bg-primary text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600",
  },
  outline: {
    blue: "ring-primary text-primary hover:opacity-2  active:text-primary focus-visible:outline-primary focus-visible:ring-primary",
  },
};

export type Props = {
  variant?: "solid" | "outline";
  color?: "blue";
  className?: string;
  href?: string;
  children?: React.ReactNode;
};
export function Button({
  variant = "solid",
  color = "blue",
  className,
  href,
  ...props
}: Props) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
}
