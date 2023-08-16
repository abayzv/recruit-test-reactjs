import { useQuery } from "react-query";

type Instance = () => Promise<any>;

export function useRepoData(instance: Instance) {
  return useQuery(["repoData"], instance);
}
