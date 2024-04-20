import Link, { LinkProps } from "components/Link";

interface NavigationProps {
  onSelection?: () => void;
}

function Navigation({ onSelection }: NavigationProps) {
  const nav: LinkProps[] = [
    { href: "#about", title: "", text: "About" },
    { href: "#github", title: "", text: "Github" },
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
              title={`Go to ${data.text} section`}
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
