interface NavigationProps {
  onSelection?: () => void;
}

function Navigation({ onSelection }: NavigationProps) {
  const nav = [
    { title: "Nav Item 1", href: "#" },
    { title: "Nav Item 2", href: "#" },
    { title: "Nav Item 3", href: "#" },
  ];

  return (
    <nav>
      <ul className="text-center">
        {nav.map((data, idx) => (
          <li
            key={idx}
            className="border-b border-emerald-800 bg-emerald-600 first:border-t md:hover:bg-emerald-700"
          >
            <a
              href={data.href}
              className="block p-2"
              onClick={() => {
                onSelection && onSelection();
              }}
            >
              {data.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
