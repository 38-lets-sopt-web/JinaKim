import EXImg from "@assets/images/exImg.jpg";
import * as S from "./PostMainSection.styles";

const genres = ["가족", "코미디", "모험", "판타지", "애니메이션"];

const movieStats = [
  { label: "평점", value: "7.6 / 10" },
  { label: "투표 수", value: "1,378" },
  { label: "상영 시간", value: "1시간 39분" },
  { label: "상태", value: "Released" },
];

const PostMainSection = () => {
  return (
    <S.Container>
      <S.MainImg src={EXImg} alt="슈퍼 마리오 갤럭시 배경 이미지" />
      <S.Info>
        <S.PosterImg src={EXImg} alt="슈퍼 마리오 갤럭시 포스터" />
        <S.TextInfo>
          <S.Date>2026.04.01</S.Date>
          <S.Title>슈퍼 마리오 갤럭시</S.Title>
          <S.TagList>
            {genres.map((genre) => (
              <S.Tag key={genre}>{genre}</S.Tag>
            ))}
          </S.TagList>
          <S.GridBox>
            {movieStats.map(({ label, value }) => (
              <S.BoxItem key={label}>
                <S.ItemTitle>{label}</S.ItemTitle>
                <S.ItemInfo>{value}</S.ItemInfo>
              </S.BoxItem>
            ))}
          </S.GridBox>
        </S.TextInfo>
      </S.Info>
    </S.Container>
  );
};

export default PostMainSection;
