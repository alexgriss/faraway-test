import { ReactNode } from 'react';

import { FlexWrapper } from '@/shared/layout';
import { Header } from '@/shared/ui';

import { SInput } from './styled';

interface IPageHeader {
  children: ReactNode;
  searchString: string;
  onSearchStringChange: (search: string) => void;
}

export const PageHeader = ({
  children,
  searchString,
  onSearchStringChange,
}: IPageHeader) => {
  return (
    <FlexWrapper ai="center" jc="space-between">
      <Header level="xl">{children}</Header>
      <SInput
        style={{ width: '400px' }}
        placeholder="Start enter a name of a character to search..."
        value={searchString}
        onChange={(e) => onSearchStringChange(e.currentTarget.value)}
      />
    </FlexWrapper>
  );
};
