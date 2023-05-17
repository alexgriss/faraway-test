import { Outlet } from 'react-router-dom';

import { CharactersList } from '@/widgets';
import { PageHeader, CharactersPagination } from '@/features';
import { Spinner } from '@/shared/ui';
import { PageContent, PageWrapper } from '@/shared/layout';

import { useCharactersPage } from './hooks';

export const CharactersPage = () => {
  const {
    characters,
    isLoading,
    count,
    page,
    setPage,
    searchString,
    onSearchStringChange,
  } = useCharactersPage();

  return (
    <PageWrapper>
      <PageHeader
        searchString={searchString}
        onSearchStringChange={onSearchStringChange}
      >
        The Star Wars Characters
      </PageHeader>

      <PageContent>
        {isLoading || !characters ? (
          <Spinner />
        ) : (
          <>
            <CharactersList characters={characters} />
            {characters.length > 0 && (
              <CharactersPagination
                page={page}
                count={count}
                setPage={setPage}
              />
            )}
          </>
        )}
      </PageContent>

      <Outlet />
    </PageWrapper>
  );
};
