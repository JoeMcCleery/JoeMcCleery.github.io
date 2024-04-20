import Link, { LinkProps } from "components/Link";

interface NavigationProps {
  onSelection?: () => void;
}

function Navigation({ onSelection }: NavigationProps) {
  const nav: LinkProps[] = [
    { href: "#about", title: "Go to about section", text: "About" },
    { href: "#github", title: "Go to github section", text: "Github" },
  ];

  function onClick() {
    onSelection && onSelection();
  }

  return (
    <nav>
      <ul className="text-center">
        {nav.map((data, idx) => (
          <li key={idx}>
            <Link
              href={data.href}
              title={data.title}
              text={data.text}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
