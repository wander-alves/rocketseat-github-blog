import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { PostContainer, PostTitle } from "./styles";

interface PostProps {
  id: number;
  title: string;
  createdAt: string;
  content: string;
}

export function Post({id, title, createdAt, content}: PostProps){
  const formattedDate = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true, 
  }).replace('cerca de', '').replace('h', 'H');
  
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