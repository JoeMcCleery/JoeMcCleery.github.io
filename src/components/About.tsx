import ProfileIcon from "assets/profile.svg?react";
import ContactLinks from "./ContactLinks";

function About() {
  return (
    <section id="about" className="p-8">
      <div className="mb-8 flex items-center space-x-2">
        <ProfileIcon className="h-8 w-8" />
        <h2 className="text-2xl font-bold">About Me</h2>
      </div>

      <div className="mb-4 space-y-4">
        <p className="text-lg">
          Dedicated Software Developer from Perth Western Australia with a
          passion for creativity, collaboration, and continuous learning.
        </p>{" "}
        <p>
          Skilled in C#, Typescript, HTML, and CSS. Experienced in frontend
          frameworks (React.js, Vue.js) and game engines (Unity, Godot). Proven
          ability to develop high-quality, cross-platform applications while
          working effectively in team environments.
        </p>
        <p>Eager to explore the application of AI in software development.</p>
      </div>

      <ContactLinks />
    </section>
  );
}

export default About;
