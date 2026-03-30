import { useEffect, useState } from "react";
import { Post} from "../Post";
import { PostsListContainer } from "./styles";
import { getRepositoryIssues } from "../../utils/api";

interface IssueProps {
  number: number;
  url: string;
  title: string;
  body: string;
  created_at: string;
}

export function PostsList (){
  const [postsList, setPostsList] = useState<IssueProps[]>([]);

  async function getPostsList(){
    const posts = await getRepositoryIssues();
    setPostsList(posts);
  }
  
  useEffect(()=>{
    getPostsList();
  }, [])
  return (
    <PostsListContainer>
      {postsList.map((post)=> (
        <Post
          id={post.number}
          title={post.title}
          content={post.body}
          createdAt={post.created_at}
        />
      ))}
    </PostsListContainer>
  )
}