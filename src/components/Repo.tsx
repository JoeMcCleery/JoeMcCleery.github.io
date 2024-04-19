import { MinimalRepository } from "types/repositories";

interface RepoProps {
  data: MinimalRepository;
}

function Repo({ data }: RepoProps) {
  return (
    <div>
      <h4 className="font-bold">{data.name}</h4>
      <p>{data.description}</p>
    </div>
  );
}

export default Repo;
