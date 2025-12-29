import { useQuery } from "@tanstack/react-query";

const fetchAddress = async ({ queryKey }) => {
  const [_key, { lat, lng }] = queryKey;

  // Input validation
  const latNum = parseFloat(lat);
  const lngNum = parseFloat(lng);

  if (
    isNaN(latNum) ||
    isNaN(lngNum) ||
    latNum < -90 ||
    latNum > 90 ||
    lngNum < -180 ||
    lngNum > 180
  ) {
    throw new Error("Invalid coordinates provided");
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
      { signal: controller.signal }
    );

    if (!response.ok) {
      if (response.status === 429) {
        throw new Error("Too many requests. Please try again later.");
      }
      throw new Error(
        `Failed to fetch address: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.address;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out");
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
};

export function useAddress(lat, lng) {
  return useQuery({
    queryKey: ["address", { lat, lng }],
    queryFn: fetchAddress,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
    enabled: !!lat && !!lng,
    retry: (failureCount, error) => {
      // Don't retry on 404s (address not found)
      if (error?.response?.status === 404) return false;
      return failureCount < 3;
    },
  });
}
