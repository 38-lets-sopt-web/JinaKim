import PostInfoSection from "@/components/postDetail/postInfoSection/PostInfoSection";
import PostMainSection from "@/components/postDetail/postmainSection/PostMainSection";
import PostRatingSection from "@/components/postDetail/postRatingSection/PostRatingSection";
import PostStorySection from "@/components/postDetail/postStorySection/PostStorySection";
import * as S from "./PostDetail.styles";

const PostDetail = () => {
  return (
    <S.Container>
      <S.BackLink to="/">🠔 목록으로 돌아가기</S.BackLink>
      <PostMainSection />
      <PostStorySection />
      <S.BottomGrid>
        <PostInfoSection />
        <PostRatingSection />
      </S.BottomGrid>
    </S.Container>
  );
};

export default PostDetail;
