import { MinimalRepository } from "types/repositories";
import Link from "components/Link";
import CodeIcon from "assets/code.svg?react";
import ForkIcon from "assets/fork.svg?react";
import PagesIcon from "assets/pages.svg?react";

interface RepoProps {
  data: MinimalRepository;
}

function Repo({ data }: RepoProps) {
  return (
    <div className="flex h-full flex-col justify-between bg-emerald-600 text-emerald-50 ring-1 ring-emerald-800">
      <div className="p-4">
        <div className="flex items-center space-x-1">
          <h4 className="font-bold">{data.name}</h4>
          {data.fork && <ForkIcon />}
        </div>

        <p>{data.description}</p>
      </div>

      <div className="flex transition-[background-color]">
        <Link
          href={data.html_url}
          title={`Go to ${data.name} github page`}
          newWindow
        >
          <CodeIcon />
          <p>Github</p>
        </Link>

        {data.homepage && (
          <Link
            href={data.homepage}
            title={`Go to ${data.name} website`}
            newWindow
          >
            <PagesIcon />
            <p>Website</p>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Repo;
