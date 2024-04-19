import { useEffect, useState } from "react";
import Repo from "./Repo";
import { Repositories } from "types/repositories";

interface RepositoriesProps {
  username: string;
}

function UserRepos({ username }: RepositoriesProps) {
  const [data, setData] = useState<Repositories>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((result: Repositories) => {
        setData(result);
        console.log(result);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, [username]);

  return (
    <div>
      <h3 className="mb-2 text-xl font-bold">{username}</h3>
      <div className="space-y-1">
        {data.map((repoData, idx) => (
          <Repo key={idx} data={repoData} />
        ))}
      </div>
    </div>
  );
}

export default UserRepos;
