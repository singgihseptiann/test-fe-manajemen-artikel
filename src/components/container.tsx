import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="container mx-auto max-w-6xl p-4">{children}</div>;
}
