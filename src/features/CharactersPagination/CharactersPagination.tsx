import { Pagination } from 'antd';

import { PaginationWrapper } from './styled';

interface ICharactersPagination {
  count: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const CharactersPagination = ({
  count,
  page,
  setPage,
}: ICharactersPagination) => {
  return (
    <PaginationWrapper>
      <Pagination
        current={page}
        showSizeChanger={false}
        total={count}
        hideOnSinglePage
        onChange={(page) => setPage(page)}
      />
    </PaginationWrapper>
  );
};
