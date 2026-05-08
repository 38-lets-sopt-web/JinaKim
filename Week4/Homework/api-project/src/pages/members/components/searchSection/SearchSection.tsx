import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import { Form } from "../../../../components/auth/authFormLayout/AuthFormLayout.styles";
import Button from "../../../../components/common/button/Button";
import InputField from "../../../../components/common/input/inputField/InputField";
import InfoCard from "../../../../components/mypage/InfoCard/InfoCard";
import * as S from "./SearchSection.styles";
import type { UserInfo } from "../../../../types/userType";
import { getMyInfo } from "../../../../apis/user";

const SearchSection = () => {
  const [searchId, setSearchId] = useState("");
  const [searchedUser, setSearchedUser] = useState<UserInfo | null>(null);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchId(e.target.value);
  };

  const handleSearchUser = async (
    e: SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();

    const data = await getMyInfo(Number(searchId));
    setSearchedUser(data);
  };

  return (
    <S.SearchSection>
      <S.Title>회원 조회</S.Title>
      <Form onSubmit={handleSearchUser}>
        <InputField
          label="회원 ID"
          value={searchId}
          onChange={handleChangeInput}
        />
        <Button type="submit" disabled={!searchId}>
          검색
        </Button>
      </Form>
      <S.Result>
        <S.ResultTitle>검색 결과</S.ResultTitle>
        {searchedUser ? (
          <InfoCard
            items={[
              { label: "아이디", value: searchedUser.loginId },
              { label: "이름", value: searchedUser.name },
              { label: "이메일", value: searchedUser.email },
              { label: "나이", value: searchedUser.age },
              { label: "파트", value: searchedUser.part },
            ]}
          />
        ) : (
          <S.EmptyCard>원하는 ID를 검색해보세요!</S.EmptyCard>
        )}
      </S.Result>
    </S.SearchSection>
  );
};

export default SearchSection;
