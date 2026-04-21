import { useEffect, useState } from "react";

import { Main } from '../../components/Main';
import { PostsList, type IssueProps } from '../../components/PostsList';
import { Profile } from '../../components/Profile';
import { SearchForm } from '../../components/SearchForm';
import { getRepositoryIssues } from "../../utils/api";
import { useDebounce } from "../../hooks/use-debounce";

import { HomeContainer } from './styles';
import { NotFound } from "../../components/NotFound";

export function Home() {
  const [posts, setPosts] = useState<IssueProps[]>([]);
  const [query, setQuery] = useState('');
  const [rateLimit, setRateLimit] = useState(10);
  const [debouncedQuery] = useDebounce(query);
  async function handleQuery() {
    let results;
    
    if(rateLimit>0){
      results = await getRepositoryIssues(debouncedQuery);
      setRateLimit((prev)=> prev - 1);
    }

    setPosts(results);
  }
  
  useEffect(()=> {
    handleQuery();
    const interval = setInterval(()=>{ 
      setRateLimit(10)
    }, 1000 * 60)

    return ()=> {
      clearInterval(interval);
    }
  }, [debouncedQuery]);
  return (
    <HomeContainer>
      <Main>
        <Profile />
        <SearchForm postsCount={posts.length} handleQuery={setQuery} query={query} />
        { posts.length === 0 
        ? (<NotFound />) 
        : (<PostsList posts={posts}/>)}
      </Main>
    </HomeContainer>
  );
}
