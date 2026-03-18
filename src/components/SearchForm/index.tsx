import { useState } from 'react';
import { SearchFormContainer, SearchFormTitle } from './styles';

export function SearchForm() {
  const [query, setQuery] = useState('');

  function handleQuery(content: string) {
    setQuery(content);
  }
  return (
    <SearchFormContainer>
      <SearchFormTitle>
        <strong>Publicações</strong>
        <span>6 publicações</span>
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
