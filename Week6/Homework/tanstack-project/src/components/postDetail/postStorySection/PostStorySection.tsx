import ContentBox from "@/components/postDetail/contentBox/ContentBox";
import * as S from "./PostStorySection.styles";

interface PostStorySectionProps {
  overview: string;
}

const PostStorySection = ({ overview }: PostStorySectionProps) => {
  return (
    <ContentBox title="줄거리">
      <S.Description>{overview}</S.Description>
    </ContentBox>
  );
};

export default PostStorySection;
