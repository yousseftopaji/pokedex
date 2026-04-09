import { useQuery } from "@tanstack/react-query";

export function useCharacter(url) {
  return useQuery({
    queryKey: ["character", url],
    queryFn: () => fetch(url).then((res) => res.json()),
    enabled: !!url,
  });
}
