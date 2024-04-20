import Link, { LinkProps } from "components/Link";

interface NavigationProps {
  onSelection?: () => void;
}

function Navigation({ onSelection }: NavigationProps) {
  const navLinks: LinkProps[] = [
    { href: "#about", title: "Go to about section", children: "About" },
    { href: "#github", title: "Go to github section", children: "Github" },
  ];

  function onClick() {
    onSelection && onSelection();
  }

  return (
    <nav>
      <ul className="text-center">
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <Link href={link.href} title={link.title} onClick={onClick}>
              {link.children}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
