import { useQuery } from "@tanstack/react-query";

export function useCharacters(url) {
  return useQuery({
    queryKey: ["characters", url],
    queryFn: async () => {
      const pageRes = await fetch(url);
      if (!pageRes.ok) throw new Error("Failed to fetch pokemon page");
      const page = await pageRes.json();

      const detailedResults = await Promise.all(
        page.results.map(async (item) => {
          const detailRes = await fetch(item.url);
          if (!detailRes.ok) throw new Error(`Failed to fetch ${item.name}`);
          return detailRes.json();
        }),
      );
      return { ...page, results: detailedResults };
    },
    enabled: !!url,
  });
}
