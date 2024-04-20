import { MinimalRepository } from "types/repositories";
import Link from "./Link";

interface RepoProps {
  data: MinimalRepository;
}

function Repo({ data }: RepoProps) {
  return (
    <div className="flex h-full flex-col justify-between ring-[1px] ring-emerald-800">
      <div className="p-4">
        <h4 className="font-bold">{data.name}</h4>
        <p>{data.description}</p>
      </div>

      <div className="flex transition-[background-color]">
        <Link
          href={data.html_url}
          title={`Go to ${data.name} github page`}
          newWindow
        >
          Github
        </Link>

        {data.homepage && (
          <Link
            href={data.homepage}
            title={`Go to ${data.name} website`}
            newWindow
          >
            Website
          </Link>
        )}
      </div>
    </div>
  );
}

export default Repo;
