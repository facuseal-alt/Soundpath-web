import * as React from "react";

export function Card({ className = "", children }: any) {
  return <div className={"card " + className}>{children}</div>;
}

export function CardContent({ className = "", children }: any) {
  return <div className={"card-content " + className}>{children}</div>;
}