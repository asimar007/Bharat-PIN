import { useQuery } from "@tanstack/react-query";

const fetchIndiaBorder = async () => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout for larger file

  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/datameet/maps/master/Country/india-composite.geojson",
      { signal: controller.signal }
    );
    if (!response.ok) {
      if (response.status === 429) {
        throw new Error(
          "Too many requests to map service. Please try again later."
        );
      }
      throw new Error(
        `Failed to fetch India border GeoJSON: ${response.status} ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Map data request timed out");
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
};

export const useIndiaBorder = () =>
  useQuery({
    queryKey: ["indiaBorder"],
    queryFn: fetchIndiaBorder,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
