import { MouseEventHandler, ReactNode } from "react";

export interface LinkProps {
  href: string;
  title: string;
  className?: string;
  newWindow?: boolean;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

function Link({
  href,
  title,
  className,
  newWindow,
  children,
  onClick,
}: LinkProps) {
  return (
    <a
      href={href}
      target={newWindow ? "_blank" : ""}
      rel={newWindow ? "noreferrer" : ""}
      title={title}
      className={`flex items-center justify-center space-x-2 bg-cyan-600 fill-current px-4 py-2 text-cyan-50 ring-[1px] ring-cyan-800 transition-[background-color] md:hover:bg-cyan-700 ${className ?? ""}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default Link;
