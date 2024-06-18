import Repo from "components/Repo";
import { Repositories } from "types/repositories";
import { useData } from "hooks/useData";
import { Language } from "types/languages";

interface ReposProps {
  username: string;
}

function Repos({ username }: ReposProps) {
  const [repos, isLoading, error] = useData<Repositories>(
    `${username}-repos`,
    [],
  );
  const [languages, isLoadingLanguages, languagesError] = useData<Language[]>(
    `${username}-languages`,
    [],
  );

  return isLoading || isLoadingLanguages ? (
    // Loading
    <div className="p-2 ring-[1px] ring-emerald-800">
      <p className="animate-pulse">Loading...</p>
    </div>
  ) : error != null || languagesError != null ? (
    // Error
    <div className="p-2 ring-[1px] ring-emerald-800">
      <p>{error ? error.message : languagesError?.message} 😬</p>
    </div>
  ) : (
    // Success
    <div className="grid grid-cols-1 gap-[1px] lg:grid-cols-2 xl:grid-cols-3">
      {repos.map((data, idx) => (
        <Repo key={idx} data={data} languages={languages[idx]} />
      ))}
    </div>
  );
}

export default Repos;
