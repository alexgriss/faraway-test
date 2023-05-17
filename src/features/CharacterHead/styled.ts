import { styled } from 'styled-components';

import { getCharacterColors, getEyeColors } from '@/entities/character';

export const CharacterHeadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5%;
`;

interface IHead {
  $hairColor: string;
}

export const Head = styled.div<IHead>`
  position: relative;

  width: 600px;
  height: 600px;

  margin: 0 auto;

  background: ${({ $hairColor }) => getCharacterColors($hairColor)};

  border-radius: 50%;

  box-shadow: 30px 30px 50px 10px rgba(0, 0, 0, 0.75),
    inset 30px 30px 50px 10px rgba(255, 255, 255, 1);

  overflow: hidden;
`;

interface IHeadEyes {
  $eyeColor: string;
}

export const HeadEyes = styled.div<IHeadEyes>`
  width: 100%;
  height: 12%;

  margin-top: 14rem;

  border-top: 25px solid #fff;

  background: ${({ $eyeColor }) =>
    getEyeColors(`${$eyeColor}, #fff, ${$eyeColor}`)};
`;

export const HeadBeard = styled.div`
  width: 100%;
  height: 100%;

  background: #fff;
`;

export const HeadContent = styled.div`
  position: absolute;

  bottom: 10%;
  right: 50%;

  transform: translateX(50%);

  z-index: 1;

  display: block;

  content: '';

  width: 300px;

  padding: 1.5rem;

  font-size: 1.5rem;

  background-color: rgba(255, 255, 255, 0.5);

  text-align: center;
`;

export const HeadLabel = styled.div`
  color: ${({ theme }) => theme.color.card.label};
`;

export const HeadTip = styled.div`
  margin-top: 0.8rem;

  font-style: italic;
  font-size: 0.8rem;

  color: ${({ theme }) => theme.color.button.border};
`;
