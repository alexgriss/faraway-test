import { styled } from 'styled-components';

import { getCharacterColors, getEyeColors } from '@/entities/character';

export const Wrapper = styled.div`
  transition: 0.3s;

  cursor: pointer;

  &:hover {
    transform: scale(1.07);
  }
`;

interface ICardHeader {
  $hairColor: string;
}

export const CardHeader = styled.div<ICardHeader>`
  position: relative;

  height: 120px;
  width: 120px;

  margin: 0 auto;

  border-radius: 50%;

  background: ${({ $hairColor }) => getCharacterColors($hairColor)};

  overflow: hidden;
`;

interface ICardEyes {
  $eyeColor: string;
}

export const CardEyes = styled.div<ICardEyes>`
  width: 100%;
  height: 17px;

  margin-top: 3rem;

  border-top: 7px solid #fff;

  background: ${({ $eyeColor }) =>
    getEyeColors(`${$eyeColor}, #fff, ${$eyeColor}`)};
`;

export const CardBeard = styled.div`
  width: 100%;
  height: 100%;

  background: #fff;
`;

interface ICardBody {
  $skinColor: string;
}

export const CardBody = styled.div<ICardBody>`
  margin-top: 0.5rem;
  padding-top: 0.5rem;

  background: ${({ $skinColor }) => getCharacterColors($skinColor)};
`;

export const CardBodyContent = styled.div`
  margin: 0.5rem;
  margin-top: 0;
  padding: 0.5rem;

  background-color: rgba(255, 255, 255, 0.5);
`;

export const CardFooter = styled.div`
  width: 100%;
  height: 100px;

  background: ${({ theme }) => `linear-gradient(
    to left,
    ${theme.color.background} 0% 20%,
    transparent 20% 40%,
    ${theme.color.background} 40% 60%,
    transparent 60% 80%,
    ${theme.color.background} 80% 100%
  )`};
`;

export const CardLabel = styled.div`
  color: ${({ theme }) => theme.color.card.label};
`;
