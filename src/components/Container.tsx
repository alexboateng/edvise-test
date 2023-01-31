import React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  children?: React.ReactNode;
};
export function Container({ className, ...props }: Props) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
