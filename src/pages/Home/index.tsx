import { useEffect, useState } from "react";

import { Main } from '../../components/Main';
import { PostsList, type IssueProps } from '../../components/PostsList';
import { Profile } from '../../components/Profile';
import { SearchForm } from '../../components/SearchForm';
import { getRepositoryIssues } from "../../utils/api";
import { useDebounce } from "../../hooks/use-debounce";

import { HomeContainer } from './styles';

export function Home() {
  const [posts, setPosts] = useState<IssueProps[]>([]);
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query);
  async function handleQuery(){
    const results = await getRepositoryIssues(debouncedQuery);
    setPosts(results)
  }

  useEffect(()=> {
    handleQuery();
  }, [debouncedQuery])
  return (
    <HomeContainer>
      <Main>
        <Profile />
        <SearchForm 
          postsCount={posts.length} 
          handleQuery={setQuery} 
          query={query}
        />
        <PostsList posts={posts}/>
      </Main>
    </HomeContainer>
  );
}
