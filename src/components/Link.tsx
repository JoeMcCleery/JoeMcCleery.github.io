import { MouseEvent } from "react";

export interface LinkProps {
  href: string;
  title: string;
  text: string;
  newWindow?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

function Link({ href, title, text, newWindow, onClick }: LinkProps) {
  return (
    <a
      href={href}
      target={newWindow ? "_blank" : ""}
      rel={newWindow ? "noreferrer" : ""}
      title={title}
      className="block bg-emerald-600 p-2 ring-[1px] ring-emerald-800 transition-[background-color] md:hover:bg-emerald-700"
      onClick={onClick}
    >
      {text}
    </a>
  );
}

export default Link;
