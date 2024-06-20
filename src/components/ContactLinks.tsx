import Link, { LinkProps } from "./Link";
import LinkedInIcon from "assets/linkedin.svg?react";
import EmailIcon from "assets/email.svg?react";

export default function ContactLinks() {
  const contactLinks: LinkProps[] = [
    {
      href: "https://www.linkedin.com/in/joseph-mccleery/",
      title: "View my LinkedIn",
      children: (
        <>
          <LinkedInIcon />
          <p>LinkedIn</p>
        </>
      ),
    },
    {
      href: "mailto:gmail@joemccleery.com.au",
      title: "Email me",
      children: (
        <>
          <EmailIcon />
          <p>Email</p>
        </>
      ),
    },
  ];

  return (
    <div className="flex">
      {contactLinks.map((link, idx) => (
        <Link key={idx} href={link.href} title={link.title} newWindow={true}>
          {link.children}
        </Link>
      ))}
    </div>
  );
}
