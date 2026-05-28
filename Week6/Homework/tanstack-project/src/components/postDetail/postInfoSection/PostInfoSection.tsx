import ContentBox from "@/components/postDetail/contentBox/ContentBox";
import * as S from "./PostInfoSection.styles";

const infoItems = [
  { label: "원제", value: "The Super Mario Galaxy Movie" },
  { label: "언어", value: "en" },
  { label: "제작 국가", value: "Japan, United States of America" },
  { label: "상태", value: "Released" },
  { label: "예산", value: "US$100,000,000" },
  { label: "수익", value: "US$897,444,200" },
];

const PostInfoSection = () => {
  return (
    <ContentBox title="기본 정보">
      <S.List>
        {infoItems.map(({ label, value }) => (
          <S.Item key={label}>
            <S.Label>{label}</S.Label>
            <S.Value>{value}</S.Value>
          </S.Item>
        ))}
      </S.List>
    </ContentBox>
  );
};

export default PostInfoSection;
