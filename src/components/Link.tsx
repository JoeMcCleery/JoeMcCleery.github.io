import { MouseEventHandler, ReactNode } from "react";

export interface LinkProps {
  href: string;
  title: string;
  newWindow?: boolean;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

function Link({ href, title, newWindow, children, onClick }: LinkProps) {
  return (
    <a
      href={href}
      target={newWindow ? "_blank" : ""}
      rel={newWindow ? "noreferrer" : ""}
      title={title}
      className="block bg-emerald-600 p-2 ring-[1px] ring-emerald-800 transition-[background-color] md:hover:bg-emerald-700"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default Link;
