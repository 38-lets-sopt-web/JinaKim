import { Outlet } from "react-router";
import Header from "../../../components/common/header/Header";

const MyPageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MyPageLayout;
