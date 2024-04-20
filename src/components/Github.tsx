import UserRepos from "components/UserRepos";

function Github() {
  const usernames = ["JoeMcCleery", "FearIndigo"];

  return (
    <section id="github" className="border-t border-emerald-800 p-8">
      <h2 className="mb-8 text-2xl font-bold">Github</h2>
      <div className="space-y-8">
        {usernames.map((username, idx) => (
          <UserRepos key={idx} username={username} />
        ))}
      </div>
    </section>
  );
}

export default Github;
