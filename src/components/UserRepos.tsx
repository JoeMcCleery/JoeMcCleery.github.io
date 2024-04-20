import Repo from "./Repo";
import { Repositories } from "types/repositories";
import { useFetch } from "hooks/useFetch";
import Link from "components/Link";

interface RepositoriesProps {
  username: string;
}

function UserRepos({ username }: RepositoriesProps) {
  const [repos, isLoading] = useFetch<Repositories>(
    `https://api.github.com/users/${username}/repos`,
    [],
  );

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-[1px]">
          <Link
            href={`https://github.com/${username}`}
            title={`Go to ${username} github page`}
            newWindow
          >
            <h3 className="text-xl font-bold">{username}</h3>
          </Link>

          <div className="grid grid-cols-1 gap-[1px] lg:grid-cols-2 xl:grid-cols-3">
            {repos.map((data, idx) => (
              <Repo key={idx} data={data} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserRepos;
