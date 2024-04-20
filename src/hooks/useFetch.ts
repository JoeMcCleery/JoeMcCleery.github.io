import { useEffect, useState } from "react";

export function useFetch<T>(url: string, defaultData: T) {
  const [data, setData] = useState<T>(defaultData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((result: T) => {
        console.log(result);
        setError(null);
        setData(result);
      })
      .catch((error: unknown) => {
        console.log(error);
        setError(error as Error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return [data, isLoading, error] as const;
}
