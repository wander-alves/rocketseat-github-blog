import { Post } from "../Post";
import { PostsListContainer } from "./styles";

export function PostsList (){
  return (
    <PostsListContainer>
      <Post />
      <Post />
    </PostsListContainer>
  )
}