import GithubIcon from "assets/github.svg?react";
import UserRepos from "components/UserRepos";

function Github() {
  const usernames = ["JoeMcCleery", "FearIndigo"];

  return (
    <section id="github" className="border-t border-emerald-800 p-8">
      <div className="mb-8 flex items-center space-x-2">
        <GithubIcon className="h-8 w-8" />
        <h2 className="text-2xl font-bold">Github</h2>
      </div>

      <div className="space-y-8">
        {usernames.map((username, idx) => (
          <UserRepos key={idx} username={username} />
        ))}
      </div>
    </section>
  );
}

export default Github;
