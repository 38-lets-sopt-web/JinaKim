import ContentBox from "@/components/postDetail/contentBox/ContentBox";
import * as S from "./PostStorySection.styles";

const PostStorySection = () => {
  return (
    <ContentBox title="줄거리">
      <S.Description>
        영화 줄거리 내용이 들어갈 영역입니다. 나중에 API 데이터가 연결되면 이
        문장을 실제 overview 값으로 교체하면 됩니다.
      </S.Description>
    </ContentBox>
  );
};

export default PostStorySection;
