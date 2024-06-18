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
          className="flex-col space-x-0 space-y-2 p-8"
        >
          <img src={user.avatar_url} alt="Avatar Icon" className="h-12 w-12" />
          <h3 className="text-xl font-bold">{user.name ?? user.login}</h3>
          <p className="text-center">{user.bio}</p>
        </Link>
      )}
    </div>
  );
}

export default GithubUser;
