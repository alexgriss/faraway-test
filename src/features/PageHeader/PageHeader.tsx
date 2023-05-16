import { ReactNode } from 'react';

import { FlexWrapper } from '@/shared/layout';
import { Header, Input } from '@/shared/ui';

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
      <Input
        style={{ width: '400px' }}
        placeholder="Start enter a name to search..."
        value={searchString}
        onChange={(e) => onSearchStringChange(e.currentTarget.value)}
      />
    </FlexWrapper>
  );
};
