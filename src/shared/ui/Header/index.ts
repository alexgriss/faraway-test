import { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

type THeaderLevel = 'xs' | 's' | 'm' | 'l' | 'xl';

interface IHeader {
  level: THeaderLevel;
}

const getHeaderFontSize = ({ level }: IHeader) =>
  ({
    xs: 1.25,
    s: 1.5,
    m: 1.75,
    l: 2,
    xl: 2.25,
  }[level]);

export const Header = styled.div.attrs<IHeader>((props) => props)`
  font-family: Vollkorn, Arial, Helvetica, sans-serif;
  font-size: ${getHeaderFontSize}rem;
`;
