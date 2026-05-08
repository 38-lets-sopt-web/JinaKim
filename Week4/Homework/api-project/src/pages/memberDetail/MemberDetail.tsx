import { Link } from "react-router";
import InfoCard from "../../components/mypage/InfoCard/InfoCard";
import * as S from "./MemberDetail.styles";

const MemberDetail = () => {
  return (
    <S.Container>
      <S.Title>상세 정보</S.Title>
      <S.Content>
        <Link to=".." relative="path">
          ← 뒤로가기
        </Link>
        <InfoCard
          items={[
            { label: "아이디", value: "fkfkfk" },
            { label: "파트", value: "라라라" },
          ]}
        />
      </S.Content>
    </S.Container>
  );
};

export default MemberDetail;
