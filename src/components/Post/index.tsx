import { PostContainer, PostTitle } from "./styles";
import { getPtBRDateString } from '../../utils/date-formatter';

interface PostProps {
  id: number;
  title: string;
  createdAt: string;
  content: string;
}

export function Post({id, title, createdAt, content}: PostProps){
  const formattedDate = getPtBRDateString(createdAt);
  
  return (
    <PostContainer to={`/posts/${id}`}>
      <PostTitle>
        <h3 title={title}>{title}</h3>
        <span title={createdAt}>{formattedDate}</span>
      </PostTitle>
      <p>
        {content}
      </p>
    </PostContainer>
  )
}