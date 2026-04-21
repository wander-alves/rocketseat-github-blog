import { Post} from "../Post";
import { PostsListContainer } from "./styles";

export interface IssueProps {
  number: number;
  url: string;
  title: string;
  body: string;
  created_at: string;
}

interface PostListProps { 
  posts: IssueProps[];
}

export function PostsList ({ posts }: PostListProps){
  return (
    <PostsListContainer>
      {posts.map((post: IssueProps)=> (
        <Post
          key={post.number}
          id={post.number}
          title={post.title}
          content={post.body}
          createdAt={post.created_at}
        />
      ))}
    </PostsListContainer>
  )
}