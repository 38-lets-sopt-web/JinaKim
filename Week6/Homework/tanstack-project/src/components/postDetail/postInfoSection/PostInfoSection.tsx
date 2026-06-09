import ContentBox from "@/components/postDetail/contentBox/ContentBox";
import * as S from "./PostInfoSection.styles";

interface PostInfoSectionProps {
  originalTitle: string;
  originalLanguage: string;
  productionCountries: {
    iso_3166_1: string;
    name: string;
  }[];
  spokenLanguages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  budget: number;
  revenue: number;
}

const formatCurrency = (value: number) => {
  if (!value) return "정보 없음";

  return `US$${value.toLocaleString()}`;
};

const PostInfoSection = ({
  originalTitle,
  originalLanguage,
  productionCountries,
  spokenLanguages,
  status,
  budget,
  revenue,
}: PostInfoSectionProps) => {
  const infoItems = [
    { label: "원제", value: originalTitle },
    { label: "원어", value: originalLanguage },
    {
      label: "제작 국가",
      value:
        productionCountries.map((country) => country.name).join(", ") ||
        "정보 없음",
    },
    {
      label: "사용 언어",
      value:
        spokenLanguages.map((language) => language.english_name).join(", ") ||
        "정보 없음",
    },
    { label: "상태", value: status },
    { label: "예산", value: formatCurrency(budget) },
    { label: "수익", value: formatCurrency(revenue) },
  ];

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
