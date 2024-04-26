import ProfileIcon from "assets/profile.svg?react";

function About() {
  return (
    <section id="about" className="p-8">
      <div className="mb-8 flex items-center space-x-2">
        <ProfileIcon className="h-8 w-8" />
        <h2 className="text-2xl font-bold">About Me</h2>
      </div>

      <p>Software developer from Perth, Western Australia.</p>
    </section>
  );
}

export default About;
