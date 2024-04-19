import UserRepos from "components/UserRepos";

function Github() {
  const users = ["JoeMcCleery", "FearIndigo"];

  return (
    <section id="github" className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Github</h2>
      <div className="space-y-4">
        {users.map((user, idx) => (
          <UserRepos key={idx} user={user} />
        ))}
      </div>
    </section>
  );
}

export default Github;
