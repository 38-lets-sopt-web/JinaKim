import ContentBox from "@/components/postDetail/contentBox/ContentBox";
import * as S from "./PostRatingSection.styles";

const PostRatingSection = () => {
  return (
    <ContentBox title="별점 남기기">
      <S.Form>
        <S.Label htmlFor="rating">0.5 ~ 10.0</S.Label>
        <S.Input id="rating" type="number" min="0.5" max="10" step="0.5" />
        <S.ButtonGroup>
          <S.SubmitButton type="button">별점 남기기</S.SubmitButton>
          <S.DeleteButton type="button">별점 삭제하기</S.DeleteButton>
        </S.ButtonGroup>
      </S.Form>
    </ContentBox>
  );
};

export default PostRatingSection;
