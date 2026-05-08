import { createBrowserRouter } from "react-router";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import MyPage from "../pages/mypage/MyPage";
import Members from "../pages/members/Members";
import MyPageLayout from "../pages/mypage/components/MyPageLayout";
import MemberDetail from "../pages/memberDetail/MemberDetail";

const router = createBrowserRouter([
  { path: "/login", Component: Login },
  { path: "/signup", Component: Signup },
  {
    path: "/mypage",
    Component: MyPageLayout,
    children: [
      { index: true, Component: MyPage },
      { path: "members", Component: Members },
      { path: "members/:memberId", Component: MemberDetail },
    ],
  },
]);

export default router;
