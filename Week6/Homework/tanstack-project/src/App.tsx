import { RouterProvider } from "react-router";
import router from "./router/Router";
import * as S from "./App.styles";
import { useGuestSessionIdQuery } from "./hooks/queries/useGuestQueries";
import { useEffect } from "react";
import { STORAGE_KEYS } from "./constants/storageKeys";

const App = () => {
  const { data } = useGuestSessionIdQuery();
  console.log(data);

  useEffect(() => {
    if (!data) return;

    sessionStorage.setItem(STORAGE_KEYS.guestSessionId, data);
  }, [data]);

  return (
    <S.AppContainer>
      <RouterProvider router={router} />
    </S.AppContainer>
  );
};

export default App;
