import { styled } from 'styled-components';

export const CharacterPageHeader = styled.div`
  position: relative;

  & > *:first-child {
    position: absolute;

    bottom: 50%;
    left: 0;

    transform: translateY(50%);
  }
`;
