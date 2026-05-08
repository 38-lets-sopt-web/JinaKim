import { Form } from "../../../../components/auth/authFormLayout/AuthFormLayout.styles";
import Button from "../../../../components/common/button/Button";
import InputField from "../../../../components/common/input/inputField/InputField";
import InfoCard from "../../../../components/mypage/InfoCard/InfoCard";
import * as S from "./SearchSection.styles";

const SearchSection = () => {
  return (
    <S.SearchSection>
      <S.Title>회원 조회</S.Title>
      <Form>
        <InputField label="회원 ID" />
        <Button>검색</Button>
      </Form>
      <S.Result>
        <S.ResultTitle>검색 결과</S.ResultTitle>
        <InfoCard
          items={[
            { label: "아이디", value: "fkfkfk" },
            { label: "파트", value: "라라라" },
          ]}
        />
      </S.Result>
    </S.SearchSection>
  );
};

export default SearchSection;
