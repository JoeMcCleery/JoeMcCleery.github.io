import Link, { LinkProps } from "components/Link";
import ProfileIcon from "assets/profile.svg?react";
import GithubIcon from "assets/github.svg?react";

interface NavigationProps {
  onSelection?: () => void;
}

function Navigation({ onSelection }: NavigationProps) {
  const navLinks: LinkProps[] = [
    {
      href: "#about",
      title: "Go to about section",
      children: (
        <>
          <ProfileIcon />
          <p>About</p>
        </>
      ),
    },
    {
      href: "#github",
      title: "Go to github section",
      children: (
        <>
          <GithubIcon />
          <p>Github</p>
        </>
      ),
    },
  ];

  function onClick() {
    onSelection && onSelection();
  }

  return (
    <nav>
      <ul>
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
