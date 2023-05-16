import { Outlet } from 'react-router-dom';

import { CharactersList, CharactersPagination } from '@/widgets';
import { PageHeader } from '@/features';
import { Spinner } from '@/shared/ui';
import { PageContent, PageWrapper } from '@/shared/layout';

import { useCharactersPage } from './hooks';

export const CharactersPage = () => {
  const {
    characters,
    isLoading,
    isNext,
    isPrevious,
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
                isNext={isNext}
                isPrevious={isPrevious}
                page={page}
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
