import { Link, useParams } from "react-router";
import InfoCard from "../../components/mypage/InfoCard/InfoCard";
import * as S from "./MemberDetail.styles";
import { useEffect, useState } from "react";
import { getMyInfo } from "../../apis/user";
import type { UserInfo } from "../../types/userType";

const MemberDetail = () => {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      const data = await getMyInfo(Number(userId));

      setUserInfo(data);
    };

    fetchData();
  }, [userId]);

  if (!userInfo) return null;

  return (
    <S.Container>
      <S.Title>상세 정보</S.Title>
      <S.Content>
        <Link to=".." relative="path">
          ← 뒤로가기
        </Link>
        <InfoCard
          items={[
            { label: "이름", value: userInfo.name },
            { label: "아이디", value: userInfo.loginId },
            { label: "이메일", value: userInfo.email },
            { label: "나이", value: userInfo.age },
            { label: "파트", value: userInfo.part },
          ]}
        />
      </S.Content>
    </S.Container>
  );
};

export default MemberDetail;
