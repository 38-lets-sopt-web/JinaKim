import { getGuestSessionId } from "@/apis/guestSession";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { STORAGE_KEYS } from "@/constants/storageKeys";
import { useQuery } from "@tanstack/react-query";

export const useGuestSessionIdQuery = () => {
  const storedSessionId = sessionStorage.getItem(STORAGE_KEYS.guestSessionId);

  return useQuery({
    queryKey: QUERY_KEYS.guest.session(),
    queryFn: getGuestSessionId,
    select: (data) => data.guest_session_id,
    enabled: !storedSessionId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
