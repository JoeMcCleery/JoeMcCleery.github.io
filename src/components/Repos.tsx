import Repo from "components/Repo";
import { Repositories } from "types/repositories";
import { useFetch } from "hooks/useFetch";

interface ReposProps {
  username: string;
}

function Repos({ username }: ReposProps) {
  const [repos, isLoading, error] = useFetch<Repositories>(
    `https://api.github.com/users/${username}/repos`,
    [],
  );

  return isLoading ? (
    // Loading
    <div className="p-2 ring-[1px] ring-emerald-800">
      <p className="animate-pulse">Loading...</p>
    </div>
  ) : error ? (
    // Error
    <div className="p-2 ring-[1px] ring-emerald-800">
      <p>{error.message} 😬</p>
    </div>
  ) : (
    // Success
    <div className="grid grid-cols-1 gap-[1px] lg:grid-cols-2 xl:grid-cols-3">
      {repos.map((data, idx) => (
        <Repo key={idx} data={data} />
      ))}
    </div>
  );
}

export default Repos;
