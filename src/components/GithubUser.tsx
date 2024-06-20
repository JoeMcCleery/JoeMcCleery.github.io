import { useData } from "hooks/useData";
import Link from "components/Link";
import { User } from "types/user";

interface GithubUserProps {
  username: string;
}

function GithubUser({ username }: GithubUserProps) {
  const [user, isLoading, error] = useData<User>(
    `${username}-user`,
    {} as User,
  );

  return (
    <div className="space-y-[1px]">
      {isLoading ? (
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
        <Link
          href={user.html_url}
          title={`Go to ${user.name ?? user.login} github page`}
          newWindow
          className="flex-col !items-start space-x-0 space-y-4 !p-8 md:flex-row md:!items-center md:!justify-start md:space-x-8 md:space-y-0 md:text-left"
        >
          <img src={user.avatar_url} alt="Avatar Icon" className="size-28" />
          <div>
            <h3 className="text-xl font-bold">{user.name ?? user.login}</h3>
            <p>{user.bio}</p>
          </div>
        </Link>
      )}
    </div>
  );
}

export default GithubUser;
