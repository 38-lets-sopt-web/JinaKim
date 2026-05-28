import { RouterProvider } from "react-router";
import router from "./router/Router";
import * as S from "./App.styles";

const App = () => {
  return (
    <S.AppContainer>
      <RouterProvider router={router} />;
    </S.AppContainer>
  );
};

export default App;
