import api from "./instance";

export const getGuestSessionId = async () => {
  const { data } = await api.get("/authentication/guest_session/new", {
    params: { api_key: import.meta.env.VITE_API_KEY },
  });

  return data;
};
