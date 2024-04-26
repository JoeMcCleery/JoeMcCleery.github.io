import GithubUser from "./GithubUser";
import Repos from "./Repos";

interface UserReposProps {
  username: string;
}

function UserRepos({ username }: UserReposProps) {
  return (
    <div className="space-y-[1px]">
      <GithubUser username={username} />
      <Repos username={username} />
    </div>
  );
}

export default UserRepos;
