function Navigation() {
  const nav = [
    { title: "Nav Item 1", href: "#" },
    { title: "Nav Item 2", href: "#" },
    { title: "Nav Item 3", href: "#" },
  ];

  return (
    <nav>
      <ul className="space-y-[1px] bg-emerald-800 pl-[1px] text-center md:py-[1px] md:pl-0">
        {nav.map((data, idx) => (
          <li key={idx} className="bg-emerald-600 hover:bg-emerald-700">
            <a href={data.href} className="block p-2">
              {data.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
