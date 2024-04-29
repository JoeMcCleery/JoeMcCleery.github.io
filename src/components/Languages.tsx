import { useFetch } from "hooks/useFetch";
import { Language } from "types/languages";

interface LanguagesProps {
  url: string;
  mainLanguage?: string;
}

function Languages({ url, mainLanguage }: LanguagesProps) {
  const [languages] = useFetch<Language>(
    url,
    mainLanguage ? { [mainLanguage]: 0 } : {},
  );

  return (
    <div className="flex flex-wrap gap-1">
      {Object.keys(languages).map((language, idx) => (
        <p
          key={idx}
          className="rounded-full bg-fuchsia-800 px-2 text-sm text-fuchsia-50"
        >
          {language}
        </p>
      ))}
    </div>
  );
}

export default Languages;
