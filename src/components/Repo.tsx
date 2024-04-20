import { MinimalRepository } from "types/repositories";

interface RepoProps {
  data: MinimalRepository;
}

function Repo({ data }: RepoProps) {
  return (
    <a
      href={data.html_url}
      target="_blank"
      rel="noreferrer"
      title={`Go to ${data.name} github page`}
      className="block h-full bg-emerald-600 transition-[background-color] md:hover:bg-emerald-700"
    >
      <div className="p-4">
        <h4 className="font-bold">{data.name}</h4>
        <p>{data.description}</p>
      </div>
    </a>
  );
}

export default Repo;
