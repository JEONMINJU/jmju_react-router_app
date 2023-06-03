import { useSearchParams } from "react-router-dom";

export const useMyParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = [];
  for (let entry of searchParams.entries()) {
    params.push(entry);
  }
  return {
    params: params.reduce((acc, [key, value]) => {
      if (value) {
        return { ...acc, [key]: value };
      }
      return acc;
    }, {}),
    setParams: setSearchParams,
  };
};
