function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center border-t border-emerald-800 bg-emerald-700 p-4 text-emerald-50">
      <p>Joe McCleery - {date}</p>
    </footer>
  );
}

export default Footer;
