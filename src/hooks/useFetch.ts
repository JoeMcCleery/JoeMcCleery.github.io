import { useEffect, useState } from "react";

export function useFetch<T>(url: string, defaultData: T) {
  const [data, setData] = useState<T>(defaultData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((result: T) => {
        setData(result);
        console.log(result);
      })
      .catch((error: unknown) => {
        setError(error);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return [data, isLoading, error] as const;
}
