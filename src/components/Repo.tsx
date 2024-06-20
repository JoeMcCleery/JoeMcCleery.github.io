import { MinimalRepository } from "types/repositories";
import Link from "components/Link";
import CodeIcon from "assets/code.svg?react";
import ForkIcon from "assets/fork.svg?react";
import PagesIcon from "assets/pages.svg?react";
import { Language } from "types/languages";

interface RepoProps {
  data: MinimalRepository;
  languages: Language;
}

function Repo({ data, languages }: RepoProps) {
  return (
    <div className="flex h-full flex-col justify-between bg-emerald-600 text-emerald-50 ring-1 ring-emerald-800">
      <div className="flex flex-col space-y-2 p-8">
        <div className="flex items-center space-x-1">
          <h4 className="text-lg font-bold">{data.name}</h4>
          {data.fork && (
            <div className="h-4 w-4">
              <ForkIcon />
            </div>
          )}
        </div>

        <p>{data.description}</p>

        <div className="flex flex-wrap gap-1">
          {Object.keys(languages).map((language, idx) => (
            <p
              key={idx}
              className="rounded-full bg-fuchsia-800/50 px-2 text-sm text-fuchsia-50/80"
            >
              {language}
            </p>
          ))}
        </div>
      </div>

      <div className="flex">
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
