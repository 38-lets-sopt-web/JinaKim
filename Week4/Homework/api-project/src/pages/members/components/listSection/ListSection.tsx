import { useEffect, useState } from "react";
import * as S from "./ListSection.styles";
import MemberCard from "./memberCard/MemberCard";
import { getUsers } from "../../../../apis/user";
import type { UserItem } from "../../../../types/userType";

const ListSection = () => {
  const [userList, setUserList] = useState<UserItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUserList(data.users);
    };

    fetchData();
  }, []);

  return (
    <S.Container>
      <S.SectionTitle>전체 멤버 리스트</S.SectionTitle>
      <S.ListContainer>
        {userList.map((user) => (
          <MemberCard key={user.id} name={user.name} part={user.part} />
        ))}
      </S.ListContainer>
    </S.Container>
  );
};

export default ListSection;
