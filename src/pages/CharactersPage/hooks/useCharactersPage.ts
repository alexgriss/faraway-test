import { useCallback, useEffect, useState } from 'react';

import { getCharacters, TCharacters } from '@/entities/characters';
import { getCharacterIdFromUrl } from '@/entities/character';

export const useCharactersPage = () => {
  const [page, setPage] = useState(1);

  const [characters, setCharacters] = useState<TCharacters | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchString, setSearchString] = useState('');

  const fetchCharacters = useCallback((params: any) => {
    setCharacters(null);
    setIsLoading(true);

    getCharacters(params).then((response: { data: TCharacters }) => {
      setCharacters({
        ...response.data,
        results: response.data.results.map((character) => {
          const characterId = getCharacterIdFromUrl(character.url);

          const characterFromLS = JSON.parse(
            localStorage.getItem(characterId) || '{}'
          );

          return {
            ...character,
            birth_year: characterFromLS.birthYear || character.birth_year,
            gender: characterFromLS.gender || character.gender,
            height: characterFromLS.height || character.height,
            mass: characterFromLS.mass || character.mass,
          };
        }),
      });
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchCharacters({ page, ...(searchString && { search: searchString }) });
  }, [page, searchString, fetchCharacters]);

  const onSearchStringChange = useCallback((search: string) => {
    setPage(1);
    setSearchString(search);
  }, []);

  return {
    characters: characters?.results,
    isLoading,

    count: characters?.count || 0,
    isNext: !!characters?.next,
    isPrevious: !!characters?.previous,
    page,
    setPage,

    searchString,
    onSearchStringChange,
  };
};
