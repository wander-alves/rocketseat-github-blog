import { Main } from '../../components/Main';
import { PostsList } from '../../components/PostsList';
import { Profile } from '../../components/Profile';
import { SearchForm } from '../../components/SearchForm';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Main>
        <Profile />
        <SearchForm />
        <PostsList />
      </Main>
    </HomeContainer>
  );
}
