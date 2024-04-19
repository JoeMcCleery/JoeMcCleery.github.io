import { useEffect, useState } from "react";
import Repo from "./Repo";

interface RepositoriesProps {
  user: string;
}

function UserRepos({ user }: RepositoriesProps) {
  const [data, setData] = useState<JSON[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((result: JSON[]) => {
        setData(result);
        console.log(result);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, [user]);

  return (
    <div>
      <h3 className="mb-2 text-xl font-bold">{user}</h3>
      <div className="space-y-1">
        {data.map((repoData, idx) => (
          <Repo key={idx} data={repoData} />
        ))}
      </div>
    </div>
  );
}

export default UserRepos;
