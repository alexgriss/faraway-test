import { Button } from '@/shared/ui';
import { PaginationWrapper } from './styled';

interface ICharactersPagination {
  isNext: boolean;
  isPrevious: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const CharactersPagination = ({
  isNext,
  isPrevious,
  page,
  setPage,
}: ICharactersPagination) => {
  return (
    <PaginationWrapper>
      <Button
        disabled={!isPrevious}
        onClick={() => isPrevious && setPage((prevState) => prevState - 1)}
      >
        &laquo;
      </Button>
      <span>{page}</span>
      <Button
        disabled={!isNext}
        onClick={() => isNext && setPage((prevState) => prevState + 1)}
      >
        &raquo;
      </Button>
    </PaginationWrapper>
  );
};
