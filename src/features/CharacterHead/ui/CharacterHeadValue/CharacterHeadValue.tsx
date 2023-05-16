import { FlexWrapper } from '@/shared/layout';

import { HeadLabel } from '../../styled';

interface ICharacterHeadValue {
  title: string;
  postfix?: string;
  value: string;
  onEditHandler: (value: string) => void;
}

export const CharacterHeadValue = ({
  value,
  onEditHandler,
  title,
  postfix,
}: ICharacterHeadValue) => {
  return (
    <FlexWrapper ai="center" jc="center">
      <HeadLabel>{title}</HeadLabel>
      <span
        onBlur={(e) => onEditHandler(e.currentTarget.innerText)}
        contentEditable
        dangerouslySetInnerHTML={{ __html: value }}
      />
      &nbsp;
      {postfix}
    </FlexWrapper>
  );
};
