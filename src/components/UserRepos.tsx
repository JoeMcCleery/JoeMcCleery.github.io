import Repo from "./Repo";
import { Repositories } from "types/repositories";
import { useFetch } from "hooks/useFetch";

interface RepositoriesProps {
  username: string;
}

function UserRepos({ username }: RepositoriesProps) {
  const [data, isLoading] = useFetch<Repositories>(
    `https://api.github.com/users/${username}/repos`,
    [],
  );

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3 className="mb-2 text-xl font-bold">{username}</h3>
          <div className="space-y-1">
            {data.map((repoData, idx) => (
              <Repo key={idx} data={repoData} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default UserRepos;
