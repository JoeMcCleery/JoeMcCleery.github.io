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
          className="!justify-start space-x-0 px-0 py-0"
        >
          <img src={user.avatar_url} alt="Avatar Icon" className="size-28" />
          <div className="px-8">
            <h3 className="text-xl font-bold">{user.name ?? user.login}</h3>
            <p className="text-center">{user.bio}</p>
          </div>
        </Link>
      )}
    </div>
  );
}

export default GithubUser;
