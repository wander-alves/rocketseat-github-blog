import { SearchFormContainer, SearchFormTitle } from './styles';

interface SearchFormProps { 
  postsCount: number;
  handleQuery: (query: string) => void;
  query: string;
} 

export function SearchForm({ postsCount, handleQuery, query }: SearchFormProps) {
  return (
    <SearchFormContainer>
      <SearchFormTitle>
        <strong>Publicações</strong>
        <span>{ postsCount } publicações</span>
      </SearchFormTitle>
      <input
        type="text"
        id="search"
        placeholder="Buscar conteúdo"
        onChange={(e) => handleQuery(e.target.value)}
        value={query}
      />
    </SearchFormContainer>
  );
}
