import { useEffect, useState } from "react";

export function useData<T>(fileName: string, defaultData: T) {
  const [data, setData] = useState<T>(defaultData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    import(`../data/${fileName}.json`)
      .then((json: { data: T }) => {
        setError(null);
        setData(json.data);
      })
      .catch((error: unknown) => {
        setError(error as Error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fileName]);

  return [data, isLoading, error] as const;
}
