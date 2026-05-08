import { Outlet } from "react-router";
import Header from "../../../components/common/header/Header";
import { useEffect, useState } from "react";
import type { UserInfo } from "../../../types/userType";
import { getMyInfo } from "../../../apis/user";

const MyPageLayout = () => {
  const storedUserId = localStorage.getItem("userId");
  const userId = storedUserId ? Number(storedUserId) : null;

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      const data = await getMyInfo(userId);
      setUserInfo(data);
    };

    fetchData();
  }, [userId]);

  if (!userInfo) return null;

  return (
    <>
      <Header name={userInfo.name} />
      <Outlet context={userInfo} />
    </>
  );
};

export default MyPageLayout;
