import * as React from "react";

type Props = React.ComponentPropsWithoutRef<"button"> & { asChild?: boolean; href?: string };

export function Button({ asChild, href, className = "", children, ...props }: Props) {
  if (asChild && href) {
    return (
      <a href={href} className={"btn " + className} {...(props as any)}>
        {children}
      </a>
    );
  }
  return (
    <button className={"btn " + className} {...props}>
      {children}
    </button>
  );
}