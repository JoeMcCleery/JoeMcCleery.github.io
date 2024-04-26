import Repo from "components/Repo";
import { Repositories } from "types/repositories";
import { useFetch } from "hooks/useFetch";
import Link from "components/Link";
import ProfileIcon from "assets/profile.svg?react";

interface RepositoriesProps {
  username: string;
}

function UserRepos({ username }: RepositoriesProps) {
  const [repos, isLoading, error] = useFetch<Repositories>(
    `https://api.github.com/users/${username}/repos`,
    [],
  );

  return (
    <div className="space-y-[1px]">
      <Link
        href={`https://github.com/${username}`}
        title={`Go to ${username} github page`}
        newWindow
      >
        <ProfileIcon className="h-7 w-7" />
        <h3 className="text-xl font-bold">{username}</h3>
      </Link>

      {isLoading ? (
        // Loading
        <div className="p-2 ring-[1px] ring-emerald-800">
          <p className="animate-pulse">Loading...</p>
        </div>
      ) : error ? (
        // Error
        <div className="p-2 ring-[1px] ring-emerald-800">
          <p>{error.message}</p>
        </div>
      ) : (
        // Success
        <div className="grid grid-cols-1 gap-[1px] lg:grid-cols-2 xl:grid-cols-3">
          {repos.map((data, idx) => (
            <Repo key={idx} data={data} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UserRepos;
